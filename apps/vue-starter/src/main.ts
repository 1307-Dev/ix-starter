import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as defineIxIconsCustomElements } from '@siemens/ix-icons/loader';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { registerTheme } from '@siemens/ix-echarts';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { initializeTheme, initializeIcons } from '@ix-starter/shared';

import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-light.css';
import './styles/global.css';

import App from './App.vue';

// Register icons using shared utility
initializeIcons();

// Initialize iX web components (required by @siemens/ix-vue wrappers)
defineCustomElements();
defineIxIconsCustomElements();

// Register ECharts components and theme once at startup
echarts.use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer]);
registerTheme(echarts);

// Register AG Grid modules once at startup
ModuleRegistry.registerModules([AllCommunityModule]);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('./pages/GetStarted.vue') },
    { path: '/forms', component: () => import('./pages/FormsPage.vue') },
    { path: '/charts', component: () => import('./pages/ChartsPage.vue') },
    { path: '/grids', component: () => import('./pages/GridsPage.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

const app = createApp(App);

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue error:', err);
  console.error('Component:', instance);
  console.error('Info:', info);
};

app.use(router);

// Initialize theme before mount to prevent flash
initializeTheme('theme-classic-light');

app.mount('#app');
