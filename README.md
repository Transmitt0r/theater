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

The default base path is `/theater/` (GitHub Pages project path). For local root-path testing, run with `BASE_PATH=/`.

## Build

```sh
npm run build
```

Generated static output is written to `dist/`.

## GitHub Pages base path

GitHub Pages for this repository is served from `/theater/`, which is now also the default build base.

If you need a root-path build for local testing, override it explicitly:

```sh
BASE_PATH=/ npm run build
```
