# News Demo

News Demo is a Neux Mini App training project built around a small news product. It demonstrates a complete product loop: news browsing, recommended stories, weather by location, WebView detail pages, profile editing, file upload, local storage, reusable services, host appearance adaptation, and Mini App npm components.

The code is intentionally compact for teaching. Pages keep UI state and user interactions, while reusable request and business logic live under `services/`.

## What This Project Demonstrates

- Page lifecycle with `onLoad` and `onShow`.
- View updates with `setData`.
- News list loading, skeleton states, and fallback data.
- Weather loading through a shared service and `nx.getLocation`.
- WebView navigation with encoded URL parameters.
- Profile editing with form fields, storage, `nx.uploadFile`, and `nx.request`.
- Host-aware theme, text scale, and RTL direction.
- Third-party packages: `@vant/weapp`, `dayjs`, and the local `npm-components` package.
- A reusable drawer component with slot content and close events.

## Directory Map

```text
newsdemo/
├─ app.js                         # Global app state and host appearance adaptation
├─ app.json                       # Routes, window defaults, and tab bar configuration
├─ app.nxss                       # Shared styles, dark mode, RTL, and text scale classes
├─ package.json                   # Scripts and npm dependencies
├─ pages/
│  ├─ index/                      # News home, weather, recommendations, categories
│  ├─ news-detail/                # WebView article detail page
│  ├─ profile/                    # Profile overview, theme selection, npm component demo
│  └─ profile-edit/               # Profile form, avatar selection, upload, submit
├─ services/
│  ├─ request.js                  # Shared request helper and API base URL handling
│  ├─ news.js                     # News section API wrapper
│  ├─ weather.js                  # Open-Meteo weather API wrapper
│  └─ profile.js                  # Profile submit and avatar upload services
├─ components/
│  └─ drawer/                     # Internal reusable drawer component
├─ npm-components/
│  └─ miniprogram/
│     ├─ card/                    # Local npm card component
│     ├─ badge/                   # Local npm badge component
│     └─ stepper/                 # Local npm stepper component
├─ assets/
│  └─ tabbar/                     # Tab bar icons
├─ types/                         # Project-level API type declarations
└─ docs/                          # Architecture diagrams and training assets
```

| Path | Purpose |
| --- | --- |
| `app.js` | Global app state, host appearance reading, theme switching, and tab bar styling. |
| `app.json` | Page routes, window defaults, and tab bar configuration. |
| `app.nxss` | Shared page foundation, host text scale classes, RTL helpers, and dark theme tokens. |
| `pages/` | Product pages: news home, WebView detail, profile, and profile edit form. |
| `services/` | Reusable request modules used by pages. |
| `components/` | Internal project components. |
| `npm-components/` | Local Mini App npm component package used to teach package consumption. |
| `assets/` | Static images, including tab bar icons. |
| `types/` | Project-level type declarations. |
| `docs/` | Architecture diagrams and supporting training artifacts. |

## Setup

Install dependencies first:

```sh
npm install
```

Build Mini App npm dependencies:

```sh
npm run build:npm
```

This command runs `neux npm`. It reads dependencies from `package.json` and generates Mini App runtime output in `miniprogram_npm/`.

## Development Commands

Start the local browser preview:

```sh
npm run dev
```

Build a release package:

```sh
npm run build
```

Start a real-device debug preview:

```sh
npm run debug
```

Upload a trial version:

```sh
npm run upload
```

## GitHub CI/CD

The GitHub Actions workflow at `.github/workflows/neux-cicd.yml` builds every
pull request and push to `main`, then retains the generated `.wgt` package as
a workflow artifact for 14 days. A push to `main` also uploads a preview
package after the `neux-upload` GitHub Environment permits the deployment.

Before enabling uploads, create the `neux-upload` Environment in the GitHub
repository and add this Environment secret:

```text
NEUX_CLI_KEY_NXKW5CCASBKPN1Z
```

Set the secret to the CLI key for app `nxkw5ccasbkpn1z`. Do not add this key to
`project.config.json`, `.env`, or repository secrets stored in source files.
The workflow uses version name `1.0.<GitHub run number>` and version code
`1000 + <GitHub run number>`; increase `NEUX_VERSION_CODE_OFFSET` in the
workflow if the signed service already has a higher version code.


## npm Package Workflow

The project uses three dependency styles:

- `@vant/weapp`: a Mini App component library. The Profile page uses `van-switch`.
- `dayjs`: a JavaScript utility library. The Profile page uses it to format the last updated time.
- `npm-components`: a local Mini App npm package stored in this repository and consumed through `miniprogram_npm`.

After adding or changing dependencies in `package.json`, run:

```sh
npm install
npm run build:npm
```

Then declare generated component paths in page JSON files, such as `pages/profile/profile.json`.

## Generated Directories

The following directories are generated locally and should not be edited as source:

- `node_modules/`: installed npm dependencies.
- `miniprogram_npm/`: generated Mini App npm runtime output from `neux npm`.
- `dist/`: generated build output, including release packages.

If generated output is missing or stale, regenerate it:

```sh
npm run build:npm
npm run build
```

The source of truth is the project source code, `package.json`, `package-lock.json`, component packages, and page configuration.
