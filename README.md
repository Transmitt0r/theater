# Tesla Theater Launcher

A static launcher page designed for the Tesla in-car browser. The layout uses a centered Tesla T mark with clean OEM-style service tiles.

## Features

- Tesla-style visual layout (centered Tesla mark + touch-first 3-column tile grid)
- Automatic light/dark appearance using system/browser theme preference (`prefers-color-scheme`)
- Neutral high-contrast tile backgrounds with official service logos for:
  - Netflix
  - Disney+
  - Prime Video
  - HBO Max
  - YouTube
  - ARD Mediathek
  - ZDF Mediathek
- Fully static output suitable for GitHub Pages hosting
- Fullscreen-launch workaround: service taps route through YouTube redirect URLs before opening the selected provider

## Development

```sh
npm install
npm run dev
```

The local dev server runs from `/` by default for convenience.

## Build

```sh
npm run build
```

Generated static output is written to `dist/`.

## GitHub Pages base path

GitHub Pages for this repository is served from `/theater`. Set `BASE_PATH=/theater` during the production build so generated asset URLs and routes resolve correctly:

```sh
BASE_PATH=/theater npm run build
```

The included GitHub Actions workflow already sets this environment variable.
