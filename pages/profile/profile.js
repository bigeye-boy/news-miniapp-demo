import dayjs from 'dayjs'

Page({
  data: {
    // Profile data is stored locally for this demo.
    profile: {
      avatar: '',
      name: 'Alex',
      bio: 'News reader',
      notifications: true,
      readingGoal: 5,
    },
    drawerVisible: false,
    lastUpdated: '',
  },

  // Load the profile and keep the page theme in sync.
  onShow() {
    getApp().refreshAppearance()
    const profile = {
      ...this.data.profile,
      ...(nx.getStorageSync('profile') || {}),
    }
    this.setData({
      profile,
      lastUpdated: dayjs().format('YYYY-MM-DD HH:mm'),
    })
  },

  // Open the profile editor.
  editProfile() {
    this.closeDrawer()
    nx.navigateTo({ url: '/pages/profile-edit/profile-edit' })
  },

  // Save the notification preference locally.
  onNotificationsChange(e) {
    const profile = {
      ...this.data.profile,
      notifications: e.detail,
    }
    this.setData({ profile })
    nx.setStorageSync('profile', profile)
  },

  // Receive the npm stepper component event and persist the new value.
  onReadingGoalChange(e) {
    const profile = {
      ...this.data.profile,
      readingGoal: e.detail.value,
    }
    this.setData({ profile })
    nx.setStorageSync('profile', profile)
  },

  // Use a platform action sheet for the three theme modes.
  selectTheme() {
    const app = getApp()
    nx.showActionSheet({
      itemList: ['Use host theme', 'Light', 'Dark'],
      success: (result) => {
        app.setThemeMode(['system', 'light', 'dark'][result.tapIndex])
      },
    })
  },

  // Open the reusable drawer from the parent page.
  openDrawer() {
    this.setData({ drawerVisible: true })
  },

  // The child component reports close requests to the parent.
  closeDrawer() {
    this.setData({ drawerVisible: false })
  },

  // Toggle notifications from content rendered inside the drawer.
  toggleNotifications() {
    const profile = {
      ...this.data.profile,
      notifications: !this.data.profile.notifications,
    }
    this.setData({ profile })
    nx.setStorageSync('profile', profile)
    this.closeDrawer()
  },
})
