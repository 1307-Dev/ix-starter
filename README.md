# Siemens iX Starter Apps

A monorepo containing starter applications for **React**, **Vue**, and **Angular** using the [Siemens Industrial Experience (iX)](https://ix.siemens.io/) design system.

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

## Quick Start

```bash
# Install dependencies
pnpm install

# Run React starter
pnpm dev:react

# Run Vue starter
pnpm dev:vue

# Run Angular starter
pnpm dev:angular
```

## Project Structure

```
ix-starter/
├── apps/
│   ├── react-starter/      # Vite + React 18 + TypeScript
│   ├── vue-starter/        # Vite + Vue 3.5 + TypeScript
│   └── angular-starter/    # Angular 20 + standalone components
├── packages/
│   └── shared/             # Shared utilities and types
├── package.json            # Root workspace scripts
└── pnpm-workspace.yaml     # pnpm workspace configuration
```

## Apps

### React Starter
| Port | Build Tool | Framework |
|------|------------|-----------|
| 3000 | Vite 5.4   | React 18  |

```bash
cd apps/react-starter
pnpm dev
```

### Vue Starter
| Port | Build Tool | Framework |
|------|------------|-----------|
| 3200 | Vite 5.4   | Vue 3.5   |

```bash
cd apps/vue-starter
pnpm dev
```

### Angular Starter
| Port | Build Tool | Framework  |
|------|------------|------------|
| 4200 | Angular CLI| Angular 20 |

```bash
cd apps/angular-starter
pnpm dev
```

## Siemens iX Packages

| Package | Version | Description |
|---------|---------|-------------|
| `@siemens/ix` | 4.2.0 | Core components |
| `@siemens/ix-react` | 4.2.0 | React bindings |
| `@siemens/ix-angular` | 4.2.0 | Angular bindings |
| `@siemens/ix-icons` | 3.2.0 | Icon library |
| `@siemens/ix-echarts` | 2.0.0 | ECharts theme |
| `@siemens/ix-aggrid` | 4.0.1 | AG Grid theme |

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev:react` | Start React dev server |
| `pnpm dev:vue` | Start Vue dev server |
| `pnpm dev:angular` | Start Angular dev server |
| `pnpm build` | Build all apps |
| `pnpm lint` | Lint all apps |
| `pnpm test` | Run all tests |

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
