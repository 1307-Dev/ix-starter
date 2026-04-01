import { useEffect, useRef } from 'react';
import { IxIcon, IxTypography } from '@siemens/ix-react';
import { themeSwitcher } from '@siemens/ix';
import { convertThemeName } from '@siemens/ix-echarts';
import * as echarts from 'echarts/core';
import {
  buildChartOptions,
  URL_ECHARTS,
  CHART_MAX_WIDTH,
  CHART_HEIGHT,
  CHART_SECTION_TITLE,
  CHART_LABEL,
  ICON_DRAG_AND_DROP,
  PAGE_CHARTS,
  SECTION_MARGIN_TOP,
  SECTION_MARGIN_BOTTOM,
} from '../shared';

function Charts() {
  const chartRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Dispose any existing instance first (handles Strict Mode double-invoke)
    if (instanceRef.current) {
      instanceRef.current.dispose();
      instanceRef.current = null;
    }

    // Also check for orphaned instances on the DOM element
    const existingInstance = echarts.getInstanceByDom(chartRef.current);
    if (existingInstance) {
      existingInstance.dispose();
    }

    const theme = convertThemeName(themeSwitcher.getCurrentTheme());
    instanceRef.current = echarts.init(chartRef.current, theme);
    instanceRef.current.setOption(buildChartOptions());

    const handleThemeChange = () => {
      instanceRef.current?.dispose();
      if (!chartRef.current) return;
      instanceRef.current = echarts.init(chartRef.current, convertThemeName(themeSwitcher.getCurrentTheme()));
      instanceRef.current.setOption(buildChartOptions());
    };

    themeSwitcher.themeChanged.on(handleThemeChange);
    themeSwitcher.schemaChanged.on(handleThemeChange);

    const handleResize = () => instanceRef.current?.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      themeSwitcher.themeChanged.off(handleThemeChange);
      themeSwitcher.schemaChanged.off(handleThemeChange);
      window.removeEventListener('resize', handleResize);
      instanceRef.current?.dispose();
    };
  }, []);

  return (
    <>
      <IxTypography format="h1">{PAGE_CHARTS}</IxTypography>
      <IxTypography
        format="body"
        style={{
          display: 'block',
          marginTop: SECTION_MARGIN_TOP,
          marginBottom: SECTION_MARGIN_BOTTOM,
        }}
      >
        Siemens Industrial Experience provides an{' '}
        <a
          href={URL_ECHARTS}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          ECharts
        </a>{' '}
        theme. This lets you use different chart types in the Siemens Industrial Experience design
        system.
      </IxTypography>

      <IxTypography format="h2" style={{ marginBottom: '1rem' }}>
        {CHART_SECTION_TITLE}
      </IxTypography>

      <div
        ref={chartRef}
        style={{ width: '100%', maxWidth: CHART_MAX_WIDTH, height: CHART_HEIGHT }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1rem',
          maxWidth: CHART_MAX_WIDTH,
        }}
      >
        <IxIcon name={ICON_DRAG_AND_DROP} size="16" />
        <IxTypography format="body">{CHART_LABEL}</IxTypography>
      </div>
    </>
  );
}

export default Charts;
