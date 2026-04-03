import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { IxContentHeader, IxTypography, IxIcon } from '@siemens/ix-angular/standalone';
import { themeSwitcher } from '@siemens/ix';
import { convertThemeName } from '@siemens/ix-echarts';
import * as echarts from 'echarts/core';
import {
  buildChartOptions,
  URL_ECHARTS,
  CHART_SECTION_TITLE,
  CHART_LABEL,
  ICON_DRAG_AND_DROP,
  CHART_MAX_WIDTH,
  CHART_HEIGHT,
  CHART_INIT_DELAY_MS,
  PAGE_CHARTS,
} from '../../../shared';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [IxContentHeader, IxTypography, IxIcon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="charts-page">
      <ix-content-header [headerTitle]="PAGE_CHARTS"></ix-content-header>
      <ix-typography format="body" class="description">
        Siemens Industrial Experience provides an
        <a [href]="urlEcharts" target="_blank" rel="noreferrer">ECharts</a>
        theme.
        <br />
        This lets you use different chart types in the Siemens Industrial Experience design system.
      </ix-typography>

      <ix-typography format="label-lg" bold class="chart-title">{{ chartSectionTitle }}</ix-typography>

      <div
        #chartContainer
        [style.width]="'100%'"
        [style.max-width]="CHART_MAX_WIDTH"
        [style.height]="CHART_HEIGHT"
      ></div>

      <div class="chart-label" [style.max-width]="CHART_MAX_WIDTH">
        <ix-icon name="drag-and-drop" size="16"></ix-icon>
        <ix-typography format="body">{{ chartLabel }}</ix-typography>
      </div>
    </div>
  `,
  styles: [
    `
      .description {
        display: block;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .description a {
        color: inherit;
        text-decoration: underline;
      }
      .chart-title {
        margin-bottom: 1rem;
      }
      .chart-label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1rem;
      }
    `,
  ],
})
export class ChartsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartContainer') chartContainer!: ElementRef<HTMLDivElement>;
  private chartInstance: echarts.ECharts | null = null;

  protected readonly PAGE_CHARTS = PAGE_CHARTS;
  protected readonly urlEcharts = URL_ECHARTS;
  protected readonly chartSectionTitle = CHART_SECTION_TITLE;
  protected readonly chartLabel = CHART_LABEL;
  protected readonly iconDragAndDrop = ICON_DRAG_AND_DROP;
  protected readonly CHART_MAX_WIDTH = CHART_MAX_WIDTH;
  protected readonly CHART_HEIGHT = CHART_HEIGHT;
  private readonly chartInitDelayMs = CHART_INIT_DELAY_MS;

  private themeChangeHandler = () => {
    this.chartInstance?.dispose();
    if (!this.chartContainer?.nativeElement) return;
    this.chartInstance = echarts.init(
      this.chartContainer.nativeElement,
      convertThemeName(themeSwitcher.getCurrentTheme())
    );
    this.chartInstance.setOption(buildChartOptions());
  };

  private resizeHandler = () => {
    this.chartInstance?.resize();
  };

  ngAfterViewInit() {
    setTimeout(() => {
      const theme = convertThemeName(themeSwitcher.getCurrentTheme());
      this.chartInstance = echarts.init(this.chartContainer.nativeElement, theme);
      this.chartInstance.setOption(buildChartOptions());

      themeSwitcher.themeChanged.on(this.themeChangeHandler);
      themeSwitcher.schemaChanged.on(this.themeChangeHandler);
      window.addEventListener('resize', this.resizeHandler);
    }, this.chartInitDelayMs);
  }

  ngOnDestroy() {
    themeSwitcher.themeChanged.off(this.themeChangeHandler);
    themeSwitcher.schemaChanged.off(this.themeChangeHandler);
    window.removeEventListener('resize', this.resizeHandler);
    this.chartInstance?.dispose();
  }
}
