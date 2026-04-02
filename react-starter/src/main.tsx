import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { registerTheme } from '@siemens/ix-echarts';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { initializeIcons, initializeTheme } from './shared';

import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-light.css';
import '@siemens/ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css';
import { defineCustomElements as defineIxBrandTheme } from '@siemens/ix-brand-theme/loader';

initializeIcons();
defineIxBrandTheme();
echarts.use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer]);
registerTheme(echarts);
ModuleRegistry.registerModules([AllCommunityModule]);
initializeTheme('brand', 'dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter future={{ v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
