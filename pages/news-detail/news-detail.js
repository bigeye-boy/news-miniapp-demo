Page({
  data: {
    // The web-view displays the selected article URL.
    articleUrl: 'https://news.google.com/',
  },

  // Read the article URL passed from the News page.
  onLoad(options) {
    const articleUrl = options.url ? decodeURIComponent(options.url) : 'https://news.google.com/'
    this.setData({ articleUrl })
  },
})
