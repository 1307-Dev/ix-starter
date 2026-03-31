<script setup lang="ts">
import { IxTypography } from '@siemens/ix-vue';
import { AgGridVue } from 'ag-grid-vue3';
import {
  GRID_ROW_DATA,
  GRID_COL_DEFS,
  URL_AG_GRID,
  PAGE_PADDING,
  PAGE_GRIDS,
  SECTION_MARGIN_TOP,
  SECTION_MARGIN_BOTTOM,
} from '@ix-starter/shared';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '@ix-starter/shared/styles/ag-grid-theme.css';
</script>

<template>
  <div :style="{ padding: PAGE_PADDING }">
    <IxTypography format="h1"> {{ PAGE_GRIDS }} </IxTypography>
    <IxTypography format="body" :style="{ display: 'block', marginTop: SECTION_MARGIN_TOP, marginBottom: SECTION_MARGIN_BOTTOM }">
      Siemens Industrial Experience integrates the data grid library
      <a :href="URL_AG_GRID" target="_blank" rel="noreferrer" style="text-decoration: underline">
        AG Grid </a
      >.
      <br />
      This lets you use its features while staying consistent with the Siemens Industrial Experience
      design system.
    </IxTypography>

    <div class="ag-theme-alpine ix-ag-grid">
      <AgGridVue
        :row-data="GRID_ROW_DATA"
        :column-defs="GRID_COL_DEFS"
        dom-layout="autoHeight"
        theme="legacy"
        style="width: 100%"
      />
    </div>
  </div>
</template>
