<template>
  <ix-application>
    <ix-application-header name="Siemens Industrial Experience Starter App">
      <div slot="logo">
        <img :src="logo" alt="Siemens" style="height: 40px" />
      </div>
    </ix-application-header>

    <ix-menu enable-toggle-theme>
      <ix-menu-item
        v-for="item in NAV_ITEMS"
        :key="item.path"
        :icon="item.icon"
        :active="route.path === item.path"
        @click="router.push(item.path)"
      >
        {{ item.label }}
      </ix-menu-item>
    </ix-menu>

    <ix-content>
      <router-view />
    </ix-content>
  </ix-application>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { NAV_ITEMS } from '@ix-starter/shared';
import logo from './assets/logo.png';

const router = useRouter();
const route = useRoute();
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
