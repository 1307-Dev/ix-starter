import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as defineIxIconsCustomElements } from '@siemens/ix-icons/loader';
import {
  iconHome,
  iconDocument,
  iconBarchart,
  iconTable,
  iconDragAndDrop,
  iconBulb,
} from '@siemens/ix-icons/icons';
import * as echarts from 'echarts/core';
import { registerTheme } from '@siemens/ix-echarts';
import { initializeTheme } from '@ix-starter/shared';

import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-light.css';

import App from './App.vue';
import GetStarted from './pages/GetStarted.vue';
import FormsPage from './pages/FormsPage.vue';
import ChartsPage from './pages/ChartsPage.vue';
import GridsPage from './pages/GridsPage.vue';

// Register icons before defining custom elements
import { addIcons } from '@siemens/ix-icons';
addIcons({ iconHome, iconDocument, iconBarchart, iconTable, iconDragAndDrop, iconBulb });

// Initialize iX web components
defineCustomElements();
defineIxIconsCustomElements();

registerTheme(echarts);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: GetStarted },
    { path: '/forms', component: FormsPage },
    { path: '/charts', component: ChartsPage },
    { path: '/grids', component: GridsPage },
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
app.mount('#app');

// Initialize theme using shared utility
initializeTheme('theme-classic-light');
