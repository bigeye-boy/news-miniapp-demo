import { submitProfile, uploadAvatar } from '../../services/profile'

Page({
  data: {
    // Form fields are kept in page state until the user saves.
    avatar: '',
    name: '',
    bio: '',
    submitting: false,
    result: '',
  },

  // Restore the last saved profile.
  onLoad() {
    const profile = nx.getStorageSync('profile')
    if (profile) this.setData(profile)
  },

  // Keep the custom page theme and navigation bar synchronized.
  onShow() {
    getApp().refreshAppearance()
  },

  // Pick one local image as the profile avatar.
  chooseAvatar() {
    nx.chooseImage({
      count: 1,
      success: (res) => this.setData({ avatar: res.tempFilePaths[0] }),
    })
  },

  // Use the field name to update the matching form value.
  onInput(e) {
    this.setData({
      [e.currentTarget.dataset.field]: e.detail.value,
    })
  },

  // Upload the avatar first, then submit the profile data.
  saveProfile() {
    const profile = {
      avatar: this.data.avatar,
      name: this.data.name || 'Alex',
      bio: this.data.bio || 'News reader',
    }

    if (this.data.submitting) return

    this.setData({ submitting: true, result: '' })
    nx.setStorageSync('profile', profile)

    const submit = () => {
      submitProfile(profile, {
        success: () => {
          nx.showToast({ title: 'Saved', icon: 'success' })
          nx.switchTab({ url: '/pages/profile/profile' })
        },
        fail: (error) => {
          this.setData({
            result: error && error.errMsg ? error.errMsg : 'Profile request failed.',
          })
        },
        complete: () => {
          this.setData({ submitting: false })
        },
      })
    }

    if (!profile.avatar) {
      submit()
      return
    }

    uploadAvatar(profile, {
      success: submit,
      fail: (error) => {
        this.setData({
          submitting: false,
          result: error && error.errMsg ? error.errMsg : 'Avatar upload failed.',
        })
      },
    })
  },
})
