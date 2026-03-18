/**
 * Sample data for demo purposes across apps
 */

// Chart data - Motor vibration analysis
export const CHART_SCATTER_DATA = [
  [0, 300],
  [600, 1500],
  [1200, 1400],
  [1800, 1300],
  [2400, 0],
  [2900, 200],
  [3500, 2000],
];

// Chart axis configuration
export const CHART_X_AXIS = {
  type: 'value' as const,
  min: 0,
  max: 3500,
  interval: 500,
};

export const CHART_Y_AXIS = {
  type: 'value' as const,
  min: 0,
  max: 2500,
  interval: 500,
};

// Grid data - Industrial equipment inventory
export interface GridRowData {
  series: string;
  model: string;
  quantity: number;
}

export const GRID_ROW_DATA: GridRowData[] = [
  { series: 'SIMATIC', model: 'S7-1500', quantity: 32 },
  { series: 'SIPLUS', model: 'CMS1200', quantity: 16 },
  { series: 'SIMATIC', model: 'S7-1200', quantity: 41 },
  { series: 'SIMATIC', model: 'S7-1500V', quantity: 32 },
  { series: 'SIMATIC', model: 'ET 200pro', quantity: 52 },
  { series: 'SINUMERIK', model: '828D', quantity: 73 },
];

// Grid column definitions - typed for GridRowData
export const GRID_COL_DEFS: { field: keyof GridRowData; headerName: string; flex: number }[] = [
  { field: 'series', headerName: 'Series', flex: 1 },
  { field: 'model', headerName: 'Model', flex: 1 },
  { field: 'quantity', headerName: 'Quantity', flex: 1 },
];

// Chart options builder
export function buildChartOptions() {
  return {
    tooltip: { trigger: 'item' as const },
    grid: { left: 60, right: 30, top: 30, bottom: 50 },
    xAxis: CHART_X_AXIS,
    yAxis: CHART_Y_AXIS,
    series: [
      {
        type: 'line' as const,
        data: CHART_SCATTER_DATA,
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: { borderWidth: 0 },
        smooth: false,
      },
    ],
  };
}
