<script setup lang="ts">
import { IxContentHeader, IxTypography } from '@siemens/ix-vue';
import { AgGridVue } from 'ag-grid-vue3';
import * as ag from 'ag-grid-community';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  GRID_ROW_DATA,
  GRID_COL_DEFS,
  URL_AG_GRID,
  PAGE_GRIDS,
  GRID_MAX_WIDTH,
} from '../shared';

const ixTheme = getIxTheme(ag).withParams({
  wrapperBorder: false,
  headerRowBorder: true,
  rowBorder: false,
  borderColor: 'var(--theme-color-std-bdr)',
});
</script>

<template>
  <IxContentHeader :header-title="PAGE_GRIDS" />
  <IxTypography format="body" :style="{ display: 'block', marginTop: '1.5rem', marginBottom: '1.5rem' }">
    Siemens Industrial Experience integrates the data grid library
    <a
      :href="URL_AG_GRID"
      target="_blank"
      rel="noreferrer"
      style="color: inherit; text-decoration: underline"
    >
      AG Grid
    </a>.
    <br />
    This lets you use its features while staying consistent with the Siemens Industrial Experience
    design system.
  </IxTypography>

  <div :style="{ maxWidth: GRID_MAX_WIDTH }">
    <AgGridVue
      :row-data="GRID_ROW_DATA"
      :column-defs="GRID_COL_DEFS"
      dom-layout="autoHeight"
      :theme="ixTheme"
    />
  </div>
</template>
