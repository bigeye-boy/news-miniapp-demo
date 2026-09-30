# Services

This directory contains reusable data-access functions used by pages. Pages should call these modules instead of writing request URLs and request setup directly in page files.

## Files

- `request.js`: shared request helper. It applies the default API base URL unless the request already uses an absolute URL.
- `news.js`: loads news by section through the shared request helper.
- `weather.js`: loads current weather data from Open-Meteo.
- `profile.js`: submits profile form data and uploads avatar files.

## Design Rules

- Keep page files focused on state, lifecycle, event handling, and navigation.
- Keep URLs and API request details in service modules.
- Prefer small service functions that return the underlying `nx.request` or `nx.uploadFile` call.
- Use absolute URLs only when a service targets an external demo endpoint.
- Keep response shaping in the page when it is tightly coupled to UI state.

## Teaching Focus

Use this directory to explain how a Mini App can organize shared business logic without introducing a heavy framework.
