<template>
  <div class="charts-page">
    <ix-typography format="h1">Charts</ix-typography>
    <ix-typography format="body" class="description">
      Siemens Industrial Experience provides an
      <a :href="URL_ECHARTS" target="_blank" rel="noreferrer">
        ECharts
      </a>
      theme. This lets you use different chart types in the Siemens Industrial Experience design system.
    </ix-typography>

    <ix-typography format="h2" class="chart-title">{{ CHART_SECTION_TITLE }}</ix-typography>

    <div ref="chartRef" class="chart-container"></div>

    <div class="chart-label">
      <ix-icon :name="ICON_DRAG_AND_DROP" size="16"></ix-icon>
      <ix-typography format="body">{{ CHART_LABEL }}</ix-typography>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import {
  buildChartOptions,
  URL_ECHARTS,
  CHART_SECTION_TITLE,
  CHART_LABEL,
  ICON_DRAG_AND_DROP,
  CHART_INIT_DELAY_MS,
} from '@ix-starter/shared';

echarts.use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer]);

const chartRef = ref<HTMLDivElement | null>(null);
let instance: echarts.ECharts | null = null;

function handleThemeChange(newTheme: string) {
  instance?.dispose();
  if (!chartRef.value) return;
  instance = echarts.init(chartRef.value, newTheme);
  instance.setOption(buildChartOptions());
}

function handleResize() {
  instance?.resize();
}

onMounted(async () => {
  await nextTick();
  // Give DOM time to fully render
  setTimeout(() => {
    if (!chartRef.value) return;
    const theme = themeSwitcher.getCurrentTheme();
    instance = echarts.init(chartRef.value, theme);
    instance.setOption(buildChartOptions());
    themeSwitcher.themeChanged.on(handleThemeChange);
    window.addEventListener('resize', handleResize);
  }, CHART_INIT_DELAY_MS);
});

onUnmounted(() => {
  themeSwitcher.themeChanged.off(handleThemeChange);
  window.removeEventListener('resize', handleResize);
  instance?.dispose();
});
</script>

<style scoped>
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
</style>
