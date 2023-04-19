<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getAssetsURL } from '@/uitls'
import { tabbarList } from '@/assets/data'

const route = useRoute()
const current = ref(0)
watch(route, () => {
  console.log(route.path)
  const index = tabbarList.findIndex((item) => route.path === item.path)
  current.value = index > -1 ? index : 0
})
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
