

import { useEffect, useRef } from 'react';
import { IxIcon, IxTypography } from '@siemens/ix-react';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { registerTheme } from '@siemens/ix-echarts';

echarts.use([LineChart, GridComponent, TooltipComponent, TitleComponent, CanvasRenderer]);
registerTheme(echarts);

const scatterData = [
  [0, 300],
  [600, 1500],
  [1200, 1400],
  [1800, 1300],
  [2400, 0],
  [2900, 200],
  [3500, 2000],
];

function buildOptions() {
  return {
    tooltip: { trigger: 'item' },
    grid: { left: 60, right: 30, top: 30, bottom: 50 },
    xAxis: {
      type: 'value',
      min: 0,
      max: 3500,
      interval: 500,
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 2500,
      interval: 500,
    },
    series: [
      {
        type: 'line',
        data: scatterData,
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: { borderWidth: 0 },
        smooth: false,
      },
    ],
  };
}

function Charts() {
  const chartRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const theme = themeSwitcher.getCurrentTheme();
    instanceRef.current = echarts.init(chartRef.current, theme);
    instanceRef.current.setOption(buildOptions());

    const handleThemeChange = (newTheme: string) => {
      instanceRef.current?.dispose();
      if (!chartRef.current) return;
      instanceRef.current = echarts.init(chartRef.current, newTheme);
      instanceRef.current.setOption(buildOptions());
    };

    themeSwitcher.themeChanged.on(handleThemeChange);

    const handleResize = () => instanceRef.current?.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      themeSwitcher.themeChanged.off(handleThemeChange);
      window.removeEventListener('resize', handleResize);
      instanceRef.current?.dispose();
    };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <IxTypography format="h1">Charts</IxTypography>
      <IxTypography format="body" style={{ display: 'block', marginTop: '0.5rem', marginBottom: '2rem' }}>
        Siemens Industrial Experience provides an{' '}
        <a href="https://echarts.apache.org" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
          ECharts
        </a>{' '}
        theme. This lets you use different chart types in the Siemens Industrial Experience design system.
      </IxTypography>

      <IxTypography format="h2" style={{ marginBottom: '1rem' }}>Motor Vibration Analysis</IxTypography>

      <div
        ref={chartRef}
        style={{ width: '100%', maxWidth: '700px', height: '400px' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', maxWidth: '700px' }}>
        <IxIcon name="drag-and-drop" size="16" />
        <IxTypography format="body">Pump A-102</IxTypography>
      </div>
    </div>
  );
}

export default Charts;
