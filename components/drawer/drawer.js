Component({
  properties: {
    visible: Boolean,
    title: {
      type: String,
      value: 'Drawer',
    },
    theme: {
      type: String,
      value: 'theme-light',
    },
    closeOnMaskTap: {
      type: Boolean,
      value: true,
    },
    showClose: {
      type: Boolean,
      value: true,
    },
  },

  methods: {
    // Keep taps inside the drawer from closing it.
    stopPropagation() {},

    // Tell the parent why the drawer should close.
    closeBy(reason) {
      this.triggerEvent('close', { reason })
    },

    onMaskTap() {
      if (this.properties.closeOnMaskTap) this.closeBy('mask')
    },

    onCloseTap() {
      this.closeBy('button')
    },
  },
})
