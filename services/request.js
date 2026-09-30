const API_BASE_URL = 'https://ok.surf/api/v1'

// Shared request helper used by page-level services.
export default function request(options) {
  const url = options.url.startsWith('http')
    ? options.url
    : `${API_BASE_URL}${options.url}`

  return nx.request({
    ...options,
    url,
  })
}
