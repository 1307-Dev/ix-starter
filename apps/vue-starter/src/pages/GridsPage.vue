<template>
  <div style="padding: 2rem">
    <ix-typography format="h1">Grids</ix-typography>
    <ix-typography format="body" style="display: block; margin-top: 0.5rem; margin-bottom: 2rem">
      Siemens Industrial Experience integrates the data grid library
      <a :href="URL_AG_GRID" target="_blank" rel="noreferrer" style="text-decoration: underline">
        AG Grid
      </a>.
      This lets you use its features while staying consistent with the Siemens Industrial Experience design system.
    </ix-typography>

    <div class="ag-theme-alpine ix-ag-grid" :style="{ height: GRID_MIN_HEIGHT, maxWidth: GRID_MAX_WIDTH }">
      <AgGridVue
        :rowData="GRID_ROW_DATA"
        :columnDefs="GRID_COL_DEFS"
        style="width: 100%; height: 100%"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3';
import { GRID_ROW_DATA, GRID_COL_DEFS, URL_AG_GRID, GRID_MIN_HEIGHT, GRID_MAX_WIDTH } from '@ix-starter/shared';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '@ix-starter/shared/styles/ag-grid-theme.css';
</script>
