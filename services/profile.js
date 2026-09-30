import request from './request'

const AVATAR_UPLOAD_URL = 'https://httpbin.org/post'

// Submit profile form data to the demo service.
export function submitProfile(profile, options = {}) {
  return request({
    ...options,
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    data: profile,
  })
}

// Upload the selected avatar before submitting the profile.
export function uploadAvatar(profile, options = {}) {
  return nx.uploadFile({
    ...options,
    url: AVATAR_UPLOAD_URL,
    filePath: profile.avatar,
    name: 'file',
    formData: {
      name: profile.name,
    },
  })
}
