import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { IxTypography, IxIcon } from '@siemens/ix-angular/standalone';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { registerTheme } from '@siemens/ix-echarts';

echarts.use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer]);
registerTheme(echarts);

const CHART_SCATTER_DATA = [
  [0, 300], [600, 1500], [1200, 1400], [1800, 1300],
  [2400, 0], [2900, 200], [3500, 2000],
];

function buildChartOptions() {
  return {
    tooltip: { trigger: 'item' as const },
    grid: { left: 60, right: 30, top: 30, bottom: 50 },
    xAxis: { type: 'value' as const, min: 0, max: 3500, interval: 500 },
    yAxis: { type: 'value' as const, min: 0, max: 2500, interval: 500 },
    series: [{
      type: 'line',
      data: CHART_SCATTER_DATA,
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: { borderWidth: 0 },
      smooth: false,
    }],
  };
}

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [IxTypography, IxIcon],
  template: `
    <div class="charts-page">
      <ix-typography format="h1">Charts</ix-typography>
      <ix-typography format="body" class="description">
        Siemens Industrial Experience provides an
        <a href="https://echarts.apache.org" target="_blank" rel="noreferrer">
          ECharts
        </a>
        theme. This lets you use different chart types in the Siemens Industrial Experience design system.
      </ix-typography>

      <ix-typography format="h2" class="chart-title">Motor Vibration Analysis</ix-typography>

      <div #chartContainer class="chart-container"></div>

      <div class="chart-label">
        <ix-icon name="drag-and-drop" size="16"></ix-icon>
        <ix-typography format="body">Pump A-102</ix-typography>
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
    }, 100);
  }

  ngOnDestroy() {
    themeSwitcher.themeChanged.off(this.themeChangeHandler);
    window.removeEventListener('resize', this.resizeHandler);
    this.chartInstance?.dispose();
  }
}
