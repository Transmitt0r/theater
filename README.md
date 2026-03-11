# Tesla Theater Launcher

A clean, static launcher page designed for the Tesla in-car browser. It provides quick, touch-friendly access to major streaming services without ads, clutter, or unnecessary navigation.

## Features

- Minimal dark interface inspired by Tesla's in-car UI language
- Large tiles optimized for in-car touch interaction
- Direct launch links for:
  - Netflix
  - Disney+
  - Prime Video
  - HBO Max
  - YouTube
  - ARD Mediathek
  - ZDF Mediathek
- Fully static output suitable for GitHub Pages hosting

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
