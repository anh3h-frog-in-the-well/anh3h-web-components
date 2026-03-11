# anh3h-web-components

This repository contains a Lit web component project scaffolded with Vite and TypeScript.
A Lit web component project uses @lit-labs/router for navigation between pages.

## Development

```bash
npm install
npm run dev         # start dev server at http://localhost:5173
```

## Build

```bash
npm run build        # compile with tsc and bundle with vite
npm run preview      # preview production build
```

## GitHub Actions

A simple CI workflow is defined in `.github/workflows/ci.yml` which installs dependencies and runs the build on pushes and pull requests to `main`.  

Feel free to add tests, linting, or other checks as needed.