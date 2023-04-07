<script lang="ts" setup>
import { tabbarList } from '@/assets/data/tabbar'
</script>

<template>
  <div class="tabbar">
    <template v-for="item in tabbarList" :key="item.text"> </template>
  </div>
</template>

<style lang="scss" scoped></style>
