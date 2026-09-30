# Mini App Component Source

This directory is the component source root for the `npm-components` package. The package `miniprogram` field points here, so the Mini App npm builder can discover and package these components.

## Components

| Component | Purpose |
| --- | --- |
| `card/` | Card container with title, subtitle, slot content, and theme support. |
| `badge/` | Badge label with type and theme support. |
| `stepper/` | Numeric stepper with min, max, value, theme, and change event. |

## File Convention

Each component uses the same four-file convention:

- `index.js`: component properties, methods, and events.
- `index.nxml`: component structure.
- `index.nxss`: component styles.
- `index.json`: component configuration.

Keep these components small and readable because they are used for teaching npm component packaging.
