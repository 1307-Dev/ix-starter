# Siemens iX Starter Apps

Three independent starter applications for **React**, **Vue**, and **Angular** using the [Siemens Industrial Experience (iX)](https://ix.siemens.io/) design system. Each app is fully self-contained — no monorepo, no shared build steps.

## Overview

Each starter app includes:

- 🏠 **Get Started** - Welcome page with navigation
- 📝 **Forms** - Form components with validation
- 📊 **Charts** - ECharts integration with iX theming
- 📋 **Grids** - AG Grid integration with iX styling
- 🌓 **Theme Toggle** - Light/dark mode switching

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 8

## Project Structure

```
ix-starter/
├── react-starter/      # Vite + React 18 + TypeScript
├── vue-starter/        # Vite + Vue 3.5 + TypeScript
└── angular-starter/    # Angular CLI + Angular 20
```

Each app has its own `package.json`, `node_modules`, and `src/shared/` folder containing the shared utilities.

## Quick Start

Pick the framework you want and run it independently:

### React Starter

| Port | Build Tool | Framework |
| ---- | ---------- | --------- |
| 3000 | Vite 5.4   | React 18  |

```bash
cd react-starter
pnpm i
pnpm dev
```

### Vue Starter

| Port | Build Tool | Framework |
| ---- | ---------- | --------- |
| 3200 | Vite 5.4   | Vue 3.5   |

```bash
cd vue-starter
pnpm i
pnpm dev
```

### Angular Starter

| Port | Build Tool  | Framework  |
| ---- | ----------- | ---------- |
| 4200 | Angular CLI | Angular 20 |

```bash
cd angular-starter
pnpm i
pnpm dev
```

## Available Scripts (per app)

| Script       | Description            |
| ------------ | ---------------------- |
| `pnpm dev`   | Start dev server       |
| `pnpm build` | Build for production   |
| `pnpm lint`  | Lint the app           |

## Siemens iX Packages

| Package               | Version | Description      |
| --------------------- | ------- | ---------------- |
| `@siemens/ix`         | 4.2.0   | Core components  |
| `@siemens/ix-react`   | 4.2.0   | React bindings   |
| `@siemens/ix-angular` | 4.2.0   | Angular bindings |
| `@siemens/ix-icons`   | 3.2.0   | Icon library     |
| `@siemens/ix-echarts` | 2.0.0   | ECharts theme    |
| `@siemens/ix-aggrid`  | 4.0.1   | AG Grid theme    |

## Theme Switching

All apps include built-in theme toggling via the iX menu:

```html
<IxMenu enable-toggle-theme>
  <!-- menu items -->
</IxMenu>
```

For programmatic theme control:

```typescript
import { themeSwitcher } from '@siemens/ix';

themeSwitcher.setTheme('theme-classic-dark');
```

## Documentation

- [Siemens iX Documentation](https://ix.siemens.io/)
- [Siemens iX GitHub](https://github.com/siemens/ix)
- [ECharts Documentation](https://echarts.apache.org/)
- [AG Grid Documentation](https://www.ag-grid.com/)

## License

MIT
