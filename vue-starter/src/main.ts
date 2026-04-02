import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as defineIxIconsCustomElements } from '@siemens/ix-icons/loader';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { registerTheme } from '@siemens/ix-echarts';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { initializeTheme, initializeIcons } from './shared';

import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-light.css';
import '@siemens/ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css';
import { defineCustomElements as defineIxBrandTheme } from '@siemens/ix-brand-theme/loader';
import './styles/global.css';

import App from './App.vue';

initializeIcons();
defineCustomElements();
defineIxIconsCustomElements();
defineIxBrandTheme();

echarts.use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer]);
registerTheme(echarts);
ModuleRegistry.registerModules([AllCommunityModule]);

const router = createRouter({
  history: createWebHistory(),
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

initializeTheme('brand', 'dark');

app.mount('#app');
