<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
  IxContent,
} from '@siemens/ix-vue';
import { NAV_ITEMS } from '@ix-starter/shared';
import logo from './assets/logo.png';

const router = useRouter();
const route = useRoute();
</script>

<template>
  <IxApplication>
    <IxApplicationHeader name="Siemens Industrial Experience Starter App">
      <template #logo>
        <img
          :src="logo"
          alt="Siemens"
          style="height: 40px"
        >
      </template>
    </IxApplicationHeader>

    <IxMenu enable-toggle-theme>
      <IxMenuItem
        v-for="item in NAV_ITEMS"
        :key="item.path"
        :icon="item.icon"
        :active="route.path === item.path"
        @click="router.push(item.path)"
      >
        {{ item.label }}
      </IxMenuItem>
    </IxMenu>

    <IxContent>
      <router-view />
    </IxContent>
  </IxApplication>
</template>
