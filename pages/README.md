# Pages

This directory contains the product pages used in the Showcase Mini App. Each page follows the standard Neux Mini App file shape:

- `*.nxml` defines the page structure.
- `*.nxss` defines page-specific styles.
- `*.js` owns page state, event handlers, and lifecycle logic.
- `*.json` declares page configuration and local component dependencies.

## Page List

| Page | Role |
| --- | --- |
| `index/` | News home page with weather, recommendations, categories, skeleton states, and news list loading. |
| `news-detail/` | WebView detail page that opens the selected article URL. |
| `profile/` | Profile overview, theme selector, local npm component demo, Vant switch, and reusable drawer demo. |
| `profile-edit/` | Form page for editing profile data, choosing an avatar, uploading the avatar, and submitting profile data. |

## Data Flow

Pages should keep display state local and call `services/` modules for reusable request logic. Use `this.setData()` for values rendered by the view, and use `nx.getStorageSync` / `nx.setStorageSync` only for small local demo state.

## Host Appearance

Pages that need theme, text scale, or RTL support should use `appearance` data from `getApp().getAppearance()` or refresh it with `getApp().refreshAppearance()` when the page becomes visible.
