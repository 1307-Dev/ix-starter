import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { IxTypography, IxIcon } from '@siemens/ix-angular/standalone';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { registerTheme } from '@siemens/ix-echarts';
import {
  buildChartOptions,
  URL_ECHARTS,
  CHART_SECTION_TITLE,
  CHART_LABEL,
  ICON_DRAG_AND_DROP,
  CHART_INIT_DELAY_MS,
} from '@ix-starter/shared';

echarts.use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer]);
registerTheme(echarts);

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [IxTypography, IxIcon],
  template: `
    <div class="charts-page">
      <ix-typography format="h1">Charts</ix-typography>
      <ix-typography format="body" class="description">
        Siemens Industrial Experience provides an
        <a [href]="urlEcharts" target="_blank" rel="noreferrer">
          ECharts
        </a>
        theme. This lets you use different chart types in the Siemens Industrial Experience design system.
      </ix-typography>

      <ix-typography format="h2" class="chart-title">{{ chartSectionTitle }}</ix-typography>

      <div #chartContainer class="chart-container"></div>

      <div class="chart-label">
        <ix-icon [name]="iconDragAndDrop" size="16"></ix-icon>
        <ix-typography format="body">{{ chartLabel }}</ix-typography>
      </div>
    </div>
  `,
  styles: [`
    .charts-page {
      padding: 2rem;
    }
    .description {
      display: block;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
    .description a {
      text-decoration: underline;
    }
    .chart-title {
      margin-bottom: 1rem;
    }
    .chart-container {
      width: 100%;
      max-width: 700px;
      height: 400px;
    }
    .chart-label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
      max-width: 700px;
    }
  `],
})
export class ChartsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartContainer') chartContainer!: ElementRef<HTMLDivElement>;
  private chartInstance: echarts.ECharts | null = null;

  protected readonly urlEcharts = URL_ECHARTS;
  protected readonly chartSectionTitle = CHART_SECTION_TITLE;
  protected readonly chartLabel = CHART_LABEL;
  protected readonly iconDragAndDrop = ICON_DRAG_AND_DROP;
  private readonly chartInitDelayMs = CHART_INIT_DELAY_MS;

  private themeChangeHandler = (newTheme: string) => {
    this.chartInstance?.dispose();
    if (!this.chartContainer?.nativeElement) return;
    this.chartInstance = echarts.init(this.chartContainer.nativeElement, newTheme);
    this.chartInstance.setOption(buildChartOptions());
  };

  private resizeHandler = () => {
    this.chartInstance?.resize();
  };

  ngAfterViewInit() {
    setTimeout(() => {
      const theme = themeSwitcher.getCurrentTheme();
      this.chartInstance = echarts.init(this.chartContainer.nativeElement, theme);
      this.chartInstance.setOption(buildChartOptions());
      
      themeSwitcher.themeChanged.on(this.themeChangeHandler);
      window.addEventListener('resize', this.resizeHandler);
    }, this.chartInitDelayMs);
  }

  ngOnDestroy() {
    themeSwitcher.themeChanged.off(this.themeChangeHandler);
    window.removeEventListener('resize', this.resizeHandler);
    this.chartInstance?.dispose();
  }
}
