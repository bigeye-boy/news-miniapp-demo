import request from './request'

const WEATHER_BASE_URL = 'https://api.open-meteo.com/v1/forecast'

// Load current weather from Open-Meteo.
export function fetchWeather(latitude, longitude, options = {}) {
  return request({
    ...options,
    url: `${WEATHER_BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=kmh&timezone=auto`,
  })
}
