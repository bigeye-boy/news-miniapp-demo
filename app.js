App({
  globalData: {
    // Shared configuration and host appearance state.
    appearance: {
      themeMode: nx.getStorageSync('themeMode') || 'system',
      hostTheme: 'light',
      language: 'en',
      textDirection: 'ltr',
      fontSizeScaleFactor: 1,
      fontSizeSetting: 16,
    },
  },

  onLaunch() {
    // Enable debug logging for the showcase demo.
    nx.setEnableDebug({
      enableDebug: true,
    })

    // Read host settings before the first page applies appearance classes.
    this.refreshAppearance()
  },

  // Read the latest host theme, language, text direction, and text scale.
  readHostAppearance() {
    const appInfo = nx.getAppBaseInfo() || {}
    const storedMode = nx.getStorageSync('themeMode')
    const themeMode = ['system', 'light', 'dark'].includes(storedMode)
      ? storedMode
      : this.globalData.appearance.themeMode
    const hostTheme = appInfo.theme || 'light'
    const fontScale = Number(appInfo.fontSizeScaleFactor || 1)
    const language = appInfo.language || 'en'
    const textDirection = this.resolveDirection(appInfo, language)

    this.globalData.appearance = {
      ...this.globalData.appearance,
      themeMode,
      hostTheme,
      language,
      textDirection,
      fontSizeScaleFactor: Number.isFinite(fontScale) && fontScale > 0 ? fontScale : 1,
      fontSizeSetting: appInfo.fontSizeSetting || 16,
    }
  },

  resolveDirection(info, language) {
    const direction = info.textDirection
      || info.direction
      || info.hostCustom?.textDirection
      || (info.isRtl ? 'rtl' : '')
      || (info.hostCustom?.isRtl ? 'rtl' : '')
    if (direction === 'rtl' || direction === 'ltr') return direction
    return /^(ar|fa|he|iw|ur)([-_]|$)/i.test(language) ? 'rtl' : 'ltr'
  },

  // Convert raw appearance state into classes and labels for pages.
  getAppearance() {
    const appearance = this.globalData.appearance
    const theme = appearance.themeMode === 'system'
      ? appearance.hostTheme
      : appearance.themeMode
    const scale = appearance.fontSizeScaleFactor || 1
    return {
      themeClass: `theme-${theme}`,
      directionClass: `direction-${appearance.textDirection}`,
      fontClass: scale >= 1.2 ? 'font-xlarge' : scale >= 1.05 ? 'font-large' : 'font-normal',
      themeMode: appearance.themeMode,
      themeLabel: appearance.themeMode === 'system'
        ? 'Use host theme'
        : appearance.themeMode === 'light'
          ? 'Light'
          : 'Dark',
      hostTheme: appearance.hostTheme,
      language: appearance.language,
      textDirection: appearance.textDirection,
      fontSizeScaleFactor: scale.toFixed(2),
      fontSizeSetting: appearance.fontSizeSetting,
    }
  },

  // Push the current appearance into every active page.
  applyAppearance(page) {
    page.setData({ appearance: this.getAppearance() })
  },

  // Save a manual choice and update the UI immediately.
  setThemeMode(themeMode) {
    nx.setStorageSync('themeMode', themeMode)
    this.refreshAppearance()
  },

  // Update pages, the navigation bar, and the tab bar together.
  refreshAppearance() {
    this.readHostAppearance()
    const pages = getCurrentPages()
    pages.forEach((page) => this.applyAppearance(page))
    const isDark = this.getAppearance().themeClass === 'theme-dark'
    if (typeof nx.setNavigationBarColor === 'function') {
      nx.setNavigationBarColor({
        frontColor: isDark ? '#ffffff' : '#000000',
        backgroundColor: isDark ? '#111827' : '#ffffff',
      })
    }
    if (typeof nx.setTabBarStyle === 'function') {
      nx.setTabBarStyle({
        color: isDark ? '#94a3b8' : '#64748b',
        selectedColor: isDark ? '#4ade80' : '#1aad19',
        backgroundColor: isDark ? '#111827' : '#ffffff',
        borderStyle: 'black',
      })
    }
  },
})
