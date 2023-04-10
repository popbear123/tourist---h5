<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ICities } from '@/service/modules/city'

defineProps({
  cities: {
    type: Array as PropType<ICities[]>,
    required: true
  }
})
</script>

<template>
  <div class="tab-content">
    <van-index-bar highlight-color="#ff9854">
      <template v-for="city in cities" :key="city.group">
        <van-index-anchor :index="city.group">{{ city.group }}</van-index-anchor>
        <template v-for="item in city.cities" :key="item.cityId">
          <van-cell :title="item.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="scss" scoped>
.tab-content {
  height: calc(100vh - 104px);
  overflow-y: auto;
}
</style>
