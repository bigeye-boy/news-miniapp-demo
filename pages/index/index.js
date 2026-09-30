import { fetchNews } from '../../services/news'
import { fetchWeather } from '../../services/weather'

Page({
  data: {
    // Render the first frame with the current host appearance.
    appearance: getApp().getAppearance(),
    // News categories and the current page state.
    categories: ['US', 'World', 'Business', 'Technology', 'Science', 'Health'],
    activeCategory: 'US',
    news: [],
    recommendations: [],
    weather: {
      location: 'Doha, Qatar',
      temperature: '--',
      description: 'Loading weather...',
      windSpeed: '--',
    },
    weatherLoading: true,
    weatherError: '',
    loading: true,
    error: '',
  },

  // Load default weather and news when the page is created.
  onLoad() {
    this.loadWeather(25.2854, 51.531, 'Doha, Qatar')
    this.loadNews(this.data.activeCategory, true)
  },

  // Refresh host appearance whenever the page becomes visible.
  onShow() {
    getApp().refreshAppearance()
  },


  // Ask the host for the current location before loading weather.
  refreshWeather() {
    this.setData({ weatherLoading: true, weatherError: '' })
    nx.getLocation({
      isHighAccuracy: true,
      success: (res) => {
        this.loadWeather(res.latitude, res.longitude, 'Current location')
      },
      fail: () => {
        this.setData({
          weatherLoading: false,
          weatherError: 'Location unavailable. Showing Doha weather.',
        })
      },
    })
  },

  // Fetch weather from Open-Meteo and update the loading state.
  loadWeather(latitude, longitude, location) {
    this.setData({ weatherLoading: true, weatherError: '' })
    fetchWeather(latitude, longitude, {
      success: (res) => {
        const current = res.data && res.data.current
        if (!current) {
          this.setData({ weatherLoading: false, weatherError: 'Weather is unavailable.' })
          return
        }
        this.setData({
          weatherLoading: false,
          weather: {
            location,
            temperature: Math.round(current.temperature_2m),
            description: this.getWeatherDescription(current.weather_code),
            windSpeed: Math.round(current.wind_speed_10m),
          }
        })
      },
      fail: () => {
        this.setData({
          weatherError: 'Weather is unavailable.',
          weatherLoading: false,
        })
      },
    })
  },

  // Keep weather code mapping in one small helper.
  getWeatherDescription(code) {
    if (code === 0) return 'Clear sky'
    if ([1, 2, 3].includes(code)) return 'Partly cloudy'
    if ([45, 48].includes(code)) return 'Foggy'
    if ([51, 53, 55, 56, 57].includes(code)) return 'Drizzle'
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return 'Rainy'
    if ([71, 73, 75, 77, 85, 86].includes(code)) return 'Snowy'
    if ([95, 96, 99].includes(code)) return 'Stormy'
    return 'Unknown'
  },

  // Switch the active category and reload only the list.
  selectCategory(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ activeCategory: category })
    this.loadNews(category)
  },

  // Load live news, with a small fallback for offline demos.
  loadNews(category = this.data.activeCategory, updateRecommendations = false) {
    this.setData({ loading: true, error: '' })
    fetchNews(category, {
      success: (res) => {
        const news = (res.data && res.data[category]) || []
        const nextData = {
          news: news.slice(0, 10),
          loading: false,
        }
        if (updateRecommendations) nextData.recommendations = news.slice(0, 3)
        this.setData(nextData)
      },
      fail: () => {
        const fallbackNews = [
          {
            title: 'News preview is ready',
            source: 'News Demo',
            og: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80',
            link: 'https://news.google.com/',
          },
          {
            title: 'Build a useful mini app with small steps',
            source: 'Mini App Weekly',
            og: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80',
            link: 'https://news.google.com/',
          },
        ]
        const nextData = {
          news: fallbackNews,
          loading: false,
          error: 'Live news is unavailable. Showing demo data.',
        }
        if (updateRecommendations) nextData.recommendations = fallbackNews
        this.setData(nextData)
      },
    })
  },

  // Open the selected article in the web-view page.
  openNews(e) {
    const item = e.currentTarget.dataset.item
    nx.navigateTo({
      url: `/pages/news-detail/news-detail?url=${encodeURIComponent(item.link)}`,
    })
  },
})
