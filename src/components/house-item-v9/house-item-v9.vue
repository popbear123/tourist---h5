<script lang="ts" setup>
import type { PropType } from 'vue'
import type { IGetHomeHouseListDataItem } from '@/service/modules'

defineProps({
  item: {
    type: Object as PropType<IGetHomeHouseListDataItem>,
    default: () => ({})
  }
})
</script>

<template>
  <div class="house-item-v9">
    <div class="item-inner">
      <img :src="item.data.image.url" class="img" />
      <div class="info">
        <div class="title">{{ item.data.summaryText }}</div>
        <div class="desc">{{ item.data.houseName }}</div>
        <div class="price">
          <van-rate
            :modelValue="Number(item.data.commentScore)"
            :size="14"
            allow-half
            readonly
            color="#fff"
          />
          <div class="text">¥ {{ item.data.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.house-item-v9 {
  .item-inner {
    margin: 5px;
    position: relative;
    color: #fff;
    font-size: 12px;
    .img {
      width: 100%;
      border-radius: 6px;
      vertical-align: top;
    }
    .info {
      padding: 8px 10px;
      position: absolute;
      bottom: 0;
      .desc {
        margin: 5px 0;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>
