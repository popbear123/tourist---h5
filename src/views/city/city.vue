<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/store/modules'
import { storeToRefs } from 'pinia'

import TabContent from './cpns/tab-content.vue'

const router = useRouter()

// 搜索框
const searchValue = ref('')
function cancel() {
  router.back()
}

// tabs
const tabActive = ref<'cityGroup' | 'cityGroupOverSea'>('cityGroup')
const cityStore = useCityStore()
cityStore.getAllCity()
const { allCity } = storeToRefs(cityStore)
</script>

<template>
  <div class="city">
    <van-search
      v-model="searchValue"
      shape="round"
      placeholder="城市/区域/位置"
      show-action
      @cancel="cancel"
    />

    <van-tabs v-model:active="tabActive">
      <template v-for="(value, key) in allCity" :key="value.title">
        <van-tab :title="value.title" :name="key">
          <tab-content :cities="allCity[tabActive]?.cities"></tab-content>
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>
.city {
  --van-search-left-icon-color: var(--primary-color);
  --van-tabs-line-height: 50px;
  --van-tabs-bottom-bar-color: var(--primary-color);
}
</style>
