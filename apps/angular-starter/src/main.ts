import { bootstrapApplication } from '@angular/platform-browser';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { registerTheme } from '@siemens/ix-echarts';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as defineIxIconsCustomElements } from '@siemens/ix-icons/loader';
import { initializeIcons } from '@ix-starter/shared';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

defineCustomElements();
defineIxIconsCustomElements();
initializeIcons();

echarts.use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer]);
registerTheme(echarts);
ModuleRegistry.registerModules([AllCommunityModule]);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
