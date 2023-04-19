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
  <div class="house-item-v3">
    <div class="item-inner">
      <img :src="item.data.image.url" class="img" />
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" class="icon" />
          <div class="text">{{ item.data.location }}</div>
        </div>
        <div class="desc">{{ item.data.houseName }}</div>
        <div class="summary">{{ item.data.summaryText }}</div>
        <div class="price">
          <div class="new-price">¥ {{ item.data.finalPrice }}</div>
          <div class="old-price">¥ {{ item.data.productPrice }}</div>
          <div class="tip">已减 {{ item.data.productPrice - item.data.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.house-item-v3 {
  .item-inner {
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;
    .img {
      vertical-align: top;
      width: 100%;
    }
    .info {
      background-color: #fff;
      padding: 8px 10px;
      font-size: 12px;
      .location {
        display: flex;
        align-items: center;
        .icon {
          width: 12px;
          height: 12px;
        }
        .text {
          margin-left: 5px;
        }
      }
      .desc {
        margin: 5px 0;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        font-size: 14px;
      }
      .summary {
        color: #666;
      }
      .price {
        display: flex;
        align-items: center;
        margin: 8px 0;
        .new-price {
          color: var(--primary-color);
          font-size: 14px;
        }
        .old-price {
          margin: 0 3px;
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }
        .tip {
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          padding: 0 6px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
