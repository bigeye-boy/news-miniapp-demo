# Stepper Component

The stepper component demonstrates component state boundaries and parent-child communication.

## Properties

| Property | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `Number` | `0` | Current numeric value. |
| `min` | `Number` | `0` | Minimum allowed value. |
| `max` | `Number` | `99` | Maximum allowed value. |
| `theme` | `String` | `theme-light` | Applies light or dark styles. |

## Events

- `change`: emitted after the value changes. The event detail shape is `{ value }`.

## Teaching Focus

Use this component to explain property input, internal boundary checks, `triggerEvent`, and how a parent page persists a child component event result.
