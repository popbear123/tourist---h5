<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ICities, ICity } from '@/service/modules/city'

const props = defineProps({
  cities: {
    type: Array as PropType<ICities[]>,
    default: () => []
  },
  hotCities: {
    type: Array as PropType<ICity[]>,
    default: () => []
  }
})

const emits = defineEmits(['choose'])

const indexList = props.cities.map((city) => city.group)
indexList.unshift('#')

function chooseCity(item: ICity) {
  emits('choose', item.cityName)
}
</script>

<template>
  <div class="tab-content">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="#">热门</van-index-anchor>
      <div class="hot-cities">
        <template v-for="item in hotCities" :key="item.cityId">
          <div class="hot-city" @click="chooseCity(item)">{{ item.cityName }}</div>
        </template>
      </div>
      <template v-for="city in cities" :key="city.group">
        <van-index-anchor :index="city.group">{{ city.group }}</van-index-anchor>
        <template v-for="item in city.cities" :key="item.cityId">
          <van-cell :title="item.cityName" @click="chooseCity(item)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="scss" scoped>
.tab-content {
  height: calc(100vh - 104px);
  overflow-y: auto;
  .hot-cities {
    width: 375.2px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px 10px 10px;
    .hot-city {
      width: 70px;
      height: 28px;
      margin: 6px;
      border-radius: 14px;
      font-size: 12px;
      background-color: #fff4ec;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
