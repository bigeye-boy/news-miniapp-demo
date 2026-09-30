# npm-components

This directory is a local Mini App npm package used by the Showcase project. It demonstrates how reusable Mini App components can be packaged, installed, built with `neux npm`, and consumed from a page.

The package is referenced from the app root `package.json`:

```json
{
  "dependencies": {
    "npm-components": "file:./npm-components"
  }
}
```

## Package Shape

| Path | Purpose |
| --- | --- |
| `package.json` | Package metadata. The `miniprogram` field points to component source. |
| `miniprogram/card/` | Card container component with title, subtitle, slot content, and theme support. |
| `miniprogram/badge/` | Badge component with type and theme support. |
| `miniprogram/stepper/` | Stepper component with value, min, max, theme, and change event. |

## Build and Consume

Run these commands from the app root:

```sh
npm install
npm run build:npm
```

`neux npm` generates runtime component output under `miniprogram_npm/npm-components/`.

Pages consume generated component paths in page JSON:

```json
{
  "usingComponents": {
    "demo-card": "/miniprogram_npm/npm-components/card/index"
  }
}
```

## Teaching Focus

Use this package to explain local npm dependencies, package structure, the `miniprogram` field, generated `miniprogram_npm` output, component properties, slots, events, and dark mode support.
