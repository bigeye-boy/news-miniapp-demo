# News Home Page

The home page is the main product surface. It combines weather, recommended stories, category filtering, skeleton loading states, and the news list.

## Files

- `index.js`: loads weather and news, handles category changes, location refresh, and article navigation.
- `index.nxml`: renders weather, skeleton UI, swiper recommendations, category tabs, and news cards.
- `index.nxss`: page layout, dark mode styles, skeleton styles, and host text scale usage.
- `index.json`: enables the custom navigation style for the page.

## Key Behaviors

- Loads default Doha weather on first page creation.
- Uses `nx.getLocation` when the user refreshes weather.
- Calls `fetchWeather` and `fetchNews` from `services/`.
- Keeps recommendation data stable when only the news category changes.
- Opens article detail pages with an encoded URL parameter.
- Reads host appearance before first render so theme, text scale, and RTL direction are applied during cold start.

## Teaching Focus

Use this page to explain page lifecycle, skeleton loading, service calls, swiper, list rendering, event binding, and navigation with URL data.
