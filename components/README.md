# Components

This directory contains internal components that belong to the Showcase Mini App itself.

Internal components are different from npm components:

- Internal components live directly under `components/`.
- They can be declared with project-relative paths, such as `/components/drawer/drawer`.
- They are useful for app-specific UI and behavior.
- Reusable package components live under `npm-components/` and are consumed through `miniprogram_npm/`.

## Current Components

| Component | Purpose |
| --- | --- |
| `drawer/` | A reusable bottom drawer with slot content, mask close behavior, close button support, and theme adaptation. |
