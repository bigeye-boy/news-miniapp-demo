import request from './request'

// Load news by section through the shared request helper.
export function fetchNews(category, options = {}) {
  return request({
    ...options,
    url: '/news-section',
    method: 'POST',
    data: { sections: [category] },
  })
}
