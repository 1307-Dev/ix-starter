<template>
  <ix-application>
    <ix-application-header name="Siemens Industrial Experience Starter App">
      <div slot="logo">
        <img :src="logo" alt="Siemens" style="height: 40px" />
      </div>
    </ix-application-header>

    <ix-menu enable-toggle-theme>
      <ix-menu-item
        icon="home"
        :active="route.path === '/'"
        @click="router.push('/')"
      >
        Get Started
      </ix-menu-item>
      <ix-menu-item
        icon="document"
        :active="route.path === '/forms'"
        @click="router.push('/forms')"
      >
        Forms
      </ix-menu-item>
      <ix-menu-item
        icon="barchart"
        :active="route.path === '/charts'"
        @click="router.push('/charts')"
      >
        Charts
      </ix-menu-item>
      <ix-menu-item
        icon="table"
        :active="route.path === '/grids'"
        @click="router.push('/grids')"
      >
        Grids
      </ix-menu-item>
    </ix-menu>

    <ix-content>
      <router-view />
    </ix-content>
  </ix-application>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
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
