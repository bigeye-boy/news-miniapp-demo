# Profile Page

The Profile page demonstrates profile display, local storage, third-party Mini App components, local npm components, host appearance switching, and parent-child component communication.

## Files

- `profile.js`: loads stored profile data, handles notification changes, local npm component events, theme selection, and drawer actions.
- `profile.nxml`: renders profile information, `van-switch`, local npm components, theme settings, and the reusable drawer.
- `profile.nxss`: page layout, dark mode styles, text scale usage, and local npm component host styles.
- `profile.json`: declares Vant, local npm components, and the internal drawer component.

## Key Behaviors

- Uses `dayjs` to render the last updated time.
- Reads and writes profile data with local storage.
- Uses `@vant/weapp` for the notification switch.
- Uses `npm-components` for `demo-card`, `demo-badge`, and `demo-stepper`.
- Passes the current theme class into local npm components so they can adapt to dark mode.
- Uses `nx.showActionSheet` to choose system, light, or dark theme mode.
- Opens a reusable drawer component and receives close events from the child component.

## Teaching Focus

Use this page to explain third-party component libraries, local npm components, component properties, slots, events, storage, and host appearance adaptation.
