<script setup lang="ts">
import TabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!router.meta.isHideTabbar"></tab-bar>
  </div>
</template>

<style lang="scss"></style>
