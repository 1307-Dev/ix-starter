<script setup lang="ts">
import { IxContentHeader, IxTypography, IxLinkButton } from '@siemens/ix-vue';
import { URL_IX_DOCS, SECTION_MARGIN_TOP } from '../shared';
</script>

<template>
  <IxContentHeader header-title="Get Started with Siemens Industrial Experience" />
  <IxTypography format="body" :style="{ display: 'block', marginTop: SECTION_MARGIN_TOP, marginBottom: '1.5rem' }">
    The starter app includes an application shell and three example pages with commonly used
    components.
  </IxTypography>

  <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem">
    <IxLinkButton url="/forms">Forms</IxLinkButton>
    <IxLinkButton url="/charts">Charts</IxLinkButton>
    <IxLinkButton url="/grids">Grids</IxLinkButton>
  </div>

  <IxTypography format="body" style="display: block">
    Browse the full component library at
    <a
      :href="URL_IX_DOCS"
      target="_blank"
      rel="noreferrer"
      style="color: inherit; text-decoration: underline"
    >
      ix.siemens.io
    </a>
  </IxTypography>
</template>
