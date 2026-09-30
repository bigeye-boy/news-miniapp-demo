# News Detail Page

This page displays an external news article inside the Mini App WebView component.

## Files

- `news-detail.js`: reads the encoded article URL from page options and stores it in page data.
- `news-detail.nxml`: renders the `web-view` component.
- `news-detail.nxss`: styles the detail page container and WebView area.
- `news-detail.json`: sets the page navigation title.

## Key Behaviors

- Uses a fallback URL when no article URL is provided.
- Decodes the URL passed from the home page.
- Keeps the page logic intentionally small so the WebView flow is easy to explain.

## Teaching Focus

Use this page to explain parameter passing with `nx.navigateTo`, `encodeURIComponent`, `decodeURIComponent`, and WebView usage.
