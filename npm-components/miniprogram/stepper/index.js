Component({
  properties: {
    value: {
      type: Number,
      value: 0,
    },
    min: {
      type: Number,
      value: 0,
    },
    max: {
      type: Number,
      value: 99,
    },
    theme: {
      type: String,
      value: 'theme-light',
    },
  },
  methods: {
    changeValue(nextValue) {
      const value = Math.max(this.properties.min, Math.min(this.properties.max, nextValue))
      this.setData({ value })
      this.triggerEvent('change', { value })
    },
    decrease() {
      this.changeValue(this.properties.value - 1)
    },
    increase() {
      this.changeValue(this.properties.value + 1)
    },
  },
})
