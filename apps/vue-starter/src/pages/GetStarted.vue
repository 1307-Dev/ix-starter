<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IxTypography } from '@siemens/ix-vue';
import { PAGE_PADDING, URL_IX_DOCS } from '@ix-starter/shared';

const router = useRouter();
</script>

<template>
  <div :style="{ padding: PAGE_PADDING }">
    <IxTypography format="h1"> Get Started with Siemens Industrial Experience </IxTypography>
    <IxTypography format="body" style="display: block; margin-top: 1rem; margin-bottom: 1.5rem">
      The starter app includes an application shell and three example pages with commonly used
      components.
    </IxTypography>

    <ul
      style="
        list-style: none;
        padding: 0;
        margin: 0 0 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      "
    >
      <li>
        <a
          href="/forms"
          style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline"
          @click.prevent="router.push('/forms')"
        >
          &gt; Forms
        </a>
      </li>
      <li>
        <a
          href="/charts"
          style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline"
          @click.prevent="router.push('/charts')"
        >
          &gt; Charts
        </a>
      </li>
      <li>
        <a
          href="/grids"
          style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline"
          @click.prevent="router.push('/grids')"
        >
          &gt; Grids
        </a>
      </li>
    </ul>

    <IxTypography format="body" style="display: block">
      Browse the full component library at
      <a :href="URL_IX_DOCS" target="_blank" rel="noreferrer"> ix.siemens.io </a>
    </IxTypography>
  </div>
</template>
