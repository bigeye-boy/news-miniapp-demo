# Drawer Component

The drawer is an internal reusable component used by the Profile page. It opens from the bottom and lets the parent page provide custom slot content.

## Files

- `drawer.js`: declares properties and emits close events.
- `drawer.nxml`: renders the mask, panel, title, close button, and slot.
- `drawer.nxss`: drawer layout, animation, and dark theme styles.
- `drawer.json`: marks this directory as a component.

## Properties

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `visible` | `Boolean` | `false` | Controls whether the drawer is open. |
| `title` | `String` | `Drawer` | Header text shown inside the drawer. |
| `theme` | `String` | `theme-light` | Applies light or dark theme styles. |
| `closeOnMaskTap` | `Boolean` | `true` | Allows mask taps to close the drawer. |
| `showClose` | `Boolean` | `true` | Shows or hides the close button. |

## Events

- `close`: emitted when the user taps the mask or close button. The event detail contains a `reason` field.

## Teaching Focus

Use this component to explain component properties, slot content, event emission with `triggerEvent`, and parent-controlled visibility.
