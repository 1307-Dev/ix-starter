<template>
  <div :style="{ padding: PAGE_PADDING }">
    <ix-typography format="h1">
      Get Started with Siemens Industrial Experience
    </ix-typography>
    <ix-typography format="body" style="display: block; margin-top: 1rem; margin-bottom: 1.5rem">
      The starter app includes an application shell and three example pages with commonly used components.
    </ix-typography>

    <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; display: flex; flex-direction: column; gap: 0.5rem">
      <li>
        <a href="#/forms" @click.prevent="router.push('/forms')" style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline">
          &gt; Forms
        </a>
      </li>
      <li>
        <a href="#/charts" @click.prevent="router.push('/charts')" style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline">
          &gt; Charts
        </a>
      </li>
      <li>
        <a href="#/grids" @click.prevent="router.push('/grids')" style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline">
          &gt; Grids
        </a>
      </li>
    </ul>

    <ix-typography format="body" style="display: block">
      Browse the full component library at
      <a href="https://ix.siemens.io" target="_blank" rel="noreferrer">ix.siemens.io</a>
    </ix-typography>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { PAGE_PADDING } from '@ix-starter/shared';
const router = useRouter();
</script>
