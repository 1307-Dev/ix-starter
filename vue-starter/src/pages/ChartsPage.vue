<script setup lang="ts">
import { ref, shallowRef, onMounted, onUnmounted } from 'vue';
import { IxTypography, IxIcon } from '@siemens/ix-vue';
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
  PAGE_CHARTS,
} from '../shared';

const chartRef = ref<HTMLDivElement | null>(null);
const instance = shallowRef<echarts.ECharts | null>(null);

function handleThemeChange(newTheme: string) {
  instance.value?.dispose();
  if (!chartRef.value) return;
  instance.value = echarts.init(chartRef.value, convertThemeName(newTheme));
  instance.value.setOption(buildChartOptions());
}

function handleResize() {
  instance.value?.resize();
}

onMounted(() => {
  if (!chartRef.value) return;
  const theme = convertThemeName(themeSwitcher.getCurrentTheme());
  instance.value = echarts.init(chartRef.value, theme);
  instance.value.setOption(buildChartOptions());
  themeSwitcher.themeChanged.on(handleThemeChange);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  themeSwitcher.themeChanged.off(handleThemeChange);
  window.removeEventListener('resize', handleResize);
  instance.value?.dispose();
});
</script>

<template>
  <IxTypography format="h1"> {{ PAGE_CHARTS }} </IxTypography>
    <IxTypography format="body" class="description">
      Siemens Industrial Experience provides an
      <a :href="URL_ECHARTS" target="_blank" rel="noreferrer"> ECharts </a>
      theme. This lets you use different chart types in the Siemens Industrial Experience design
      system.
    </IxTypography>

    <IxTypography format="h2" class="chart-title">
      {{ CHART_SECTION_TITLE }}
    </IxTypography>

    <div
      ref="chartRef"
      :style="{ width: '100%', maxWidth: CHART_MAX_WIDTH, height: CHART_HEIGHT }"
    />

    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '1rem',
        maxWidth: CHART_MAX_WIDTH,
      }"
    >
      <IxIcon :name="ICON_DRAG_AND_DROP" size="16" />
      <IxTypography format="body">
        {{ CHART_LABEL }}
      </IxTypography>
    </div>
</template>

<style scoped>
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
</style>
