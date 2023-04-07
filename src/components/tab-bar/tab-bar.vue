<script lang="ts" setup>
import { ref, computed } from 'vue'
import { getAssetsURL } from '@/uitls'
import { tabbarList } from '@/assets/data'

const initCurrent = computed(() => {
  const index = tabbarList.findIndex((item) => location.hash.indexOf(item.path) > -1)
  return index > -1 ? index : 0
})
const current = ref(initCurrent.value)
</script>

<template>
  <div class="tab-bar">
    <!-- <template v-for="(item, index) in tabbarList" :key="item.text">
      <div class="tab-bar-item" @click="tabItemClick(index, item)">
        <img
          :src="getAssetsURL(current === index ? item.activeImageURL : item.imageURL)"
          class="icon"
        />
        <div class="text">{{ item.text }}</div>
      </div>
    </template> -->
    <van-tabbar v-model="current" active-color="rgb(255, 150, 69)">
      <template v-for="(item, index) in tabbarList" :key="item.text">
        <van-tabbar-item :to="item.path">
          {{ item.text }}
          <template #icon>
            <img
              :src="getAssetsURL(current === index ? item.activeImageURL : item.imageURL)"
              class="icon"
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.tab-bar {
  .icon {
    height: 25px;
  }
}
</style>
