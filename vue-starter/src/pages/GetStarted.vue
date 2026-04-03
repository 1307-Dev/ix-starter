<script setup lang="ts">
import { IxContentHeader, IxTypography, IxLinkButton } from '@siemens/ix-vue';
import { URL_IX_DOCS } from '../shared';
</script>

<template>
  <IxContentHeader header-title="Get started with Siemens Industrial Experience" />
  <IxTypography format="body" :style="{ display: 'block', marginTop: '1.5rem', marginBottom: '1.5rem' }">
    Explore the Siemens Industrial Experience design system with our interactive starter app.
    <br />
    Build faster with ready-to-use components and documentation.
  </IxTypography>

  <IxTypography format="body" :style="{ display: 'block', marginBottom: '1.5rem' }">
    The starter app includes an application shell and three example pages featuring our most
    popular components:
  </IxTypography>

  <div :style="{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }">
    <IxLinkButton url="/forms">Forms</IxLinkButton>
    <IxLinkButton url="/charts">Charts</IxLinkButton>
    <IxLinkButton url="/grids">Grids</IxLinkButton>
  </div>

  <IxTypography format="body" :style="{ display: 'block', marginTop: '1.5rem', marginBottom: '1.5rem' }">
    Browse the full component library in our documentation:
    <a :href="URL_IX_DOCS" target="_blank" rel="noreferrer" style="color: inherit; text-decoration: underline">
      ix.siemens.io
    </a>
  </IxTypography>
</template>


