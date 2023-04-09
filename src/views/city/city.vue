<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/store/modules'

const router = useRouter()

// 搜索框
const searchValue = ref('')
function cancel() {
  router.push('/home')
}

// tabs
const tabActive = ref()
const cityStore = useCityStore()
cityStore.getAllCity()
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
      <template v-for="value in cityStore.allCity" :key="value.title">
        <van-tab :title="value.title">
          <div class="tab-content">
            {{ value.cities }}
          </div>
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
  .tab-content {
    height: calc(100vh - 104px);
    overflow-y: auto;
  }
}
</style>
