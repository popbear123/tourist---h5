<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCityStore, useHomeStore } from '@/store/modules'
import { formatDate } from '@/uitls'
import { useScroll } from '@/hooks'

import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue'

const router = useRouter()
const cityStore = useCityStore()

// 网络请求
const homeStore = useHomeStore()
homeStore.getHomeHotSuggestsAction()
homeStore.getHomeCategoriesAction()
homeStore.getHomeHouseListAction()
const { hotSuggests, categories, houseList } = storeToRefs(homeStore)

// 位置
function locationClick() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res)
      router.push('/city')
    },
    (err) => {
      console.log(err)
    },
    {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 15000
    }
  )
}

// 日期
const showDatePicker = ref(false)
let startTime = ref(new Date())
let endTime = ref(new Date())
endTime.value.setDate(endTime.value.getDate() + 1)
const dateForms = reactive({
  startTime: computed(() => formatDate(startTime.value)),
  endTime: computed(() => formatDate(endTime.value)),
  day: computed(() => endTime.value.getDate() - startTime.value.getDate())
})
function onConfirm(date: Date[]) {
  console.log(date)
  startTime.value = date[0]
  endTime.value = date[1]
  showDatePicker.value = false
}

// 热门精选
const { isReachBottom } = useScroll()
watch(isReachBottom, async (newValue) => {
  if (newValue) {
    console.log('触发了下拉加载')
    await homeStore.getHomeHouseListAction()
    isReachBottom.value = false
  }
})
</script>

<template>
  <div class="home">
    <!-- navbar -->
    <div class="nav-bar">爱在旅途</div>

    <!-- banner -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>

    <!-- info-box -->
    <div class="info-box">
      <!-- 位置 -->
      <div class="location-bar" @click="locationClick">
        <div class="left">{{ cityStore.chooseCity }}</div>
        <div class="right">
          <text class="text">我的位置</text>
          <img src="@/assets/img/home/icon_location.png" class="icon" />
        </div>
      </div>

      <!-- 入住日期 -->
      <div class="date-range" @click="showDatePicker = true">
        <div class="left-box">
          <div class="start-time time">
            <div class="text">入住</div>
            <div class="date">{{ dateForms.startTime }}</div>
          </div>
          <div class="day">共{{ dateForms.day }}天</div>
        </div>
        <div class="end-time time">
          <div class="text">离店</div>
          <div class="date">{{ dateForms.endTime }}</div>
        </div>
      </div>
      <van-calendar
        v-model:show="showDatePicker"
        type="range"
        color="#ff9854"
        @confirm="onConfirm"
      />

      <!-- 价格人数 -->
      <div class="price-num">
        <div class="price-num-item">价格不限</div>
        <div class="price-num-item">人数不限</div>
      </div>

      <!-- 关键词/位置/名宿名 -->
      <div class="key-words">关键字/位置/民宿名</div>

      <!-- 热门建议 -->
      <div class="hot-suggests">
        <template v-for="item in hotSuggests" :key="item.tagText.text">
          <div
            class="hot-suggest"
            :style="{ backgroundColor: item.tagText.background.color, color: item.tagText.color }"
          >
            {{ item.tagText.text }}
          </div>
        </template>
      </div>

      <!-- 搜索按钮 -->
      <div class="search-btn">开始搜索</div>
    </div>

    <!-- 推荐类别 -->
    <div class="recommend-categories">
      <template v-for="item in categories" :key="item.id">
        <div class="recommend-category">
          <img :src="item.pictureUrl" class="img" />
          <text class="text">{{ item.title }}</text>
        </div>
      </template>
    </div>

    <!-- 热门精选 -->
    <div class="hot-recommends">
      <h2 class="title">热门精选</h2>
      <div class="house-list">
        <template v-for="item in houseList" :key="item.data.houseId">
          <house-item-v9
            v-if="item.discoveryContentType === 9"
            class="house-item"
            :item="item"
          ></house-item-v9>
          <house-item-v3
            v-if="item.discoveryContentType === 3"
            class="house-item"
            :item="item"
          ></house-item-v3>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding-bottom: 50px;
  .nav-bar {
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 16px;
    background-color: #fff;
    font-weight: 500;
  }

  .banner {
    height: 125.06px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .info-box {
    padding: 0 20px 20px 20px;
    .location-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44.8px;
      .left {
        font-size: 15px;
        color: #333;
      }
      .right {
        display: flex;
        align-items: center;
        .text {
          font-size: 12px;
          color: #666;
        }
        .icon {
          width: 18px;
          margin-left: 8px;
        }
      }
    }

    .date-range {
      display: flex;
      height: 44px;
      .left-box {
        flex: 1;
        display: flex;
        .day {
          flex: 1;
          height: 100%;
          text-align: center;
          line-height: 44px;
        }
      }
      .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .text {
          font-size: 12px;
          color: #999;
        }
        .date {
          margin-top: 3px;
          color: #333;
          font-size: 15px;
          font-weight: 500;
        }
        &:last-child {
          min-width: 30%;
          padding-left: 20px;
        }
      }
    }

    .price-num {
      display: flex;
      align-items: center;
      height: 44px;
      .price-num-item {
        font-size: 12px;
        color: #999;
        &:first-child {
          flex: 1;
        }
        &:last-child {
          min-width: 30%;
          padding-left: 20px;
        }
      }
    }

    .key-words {
      height: 44px;
      line-height: 44px;
      color: #999;
    }

    .hot-suggests {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0;
      .hot-suggest {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        padding: 4px 8px;
        margin: 3px;
        border-radius: 14px;
        // color: #3f4954;
        // background-color: #f1f3f5;
      }
    }

    .search-btn {
      width: 100%;
      height: 38px;
      max-height: 50px;
      font-weight: 500;
      font-size: 18px;
      line-height: 38px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      background-image: var(--linear-gradient);
    }
  }

  .recommend-categories {
    display: flex;
    padding: 0 8px;
    background-color: #fff;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .recommend-category {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 80px;
      padding: 0 12px;
      box-sizing: border-box;
      .img {
        width: 32px;
        height: 32px;
      }
      .text {
        font-size: 12px;
        font-weight: 500;
        margin-top: 4px;
      }
    }
  }

  .hot-recommends {
    .title {
      margin: 20px 0 0 20px;
    }
    .house-list {
      padding: 8px;
      display: flex;
      flex-wrap: wrap;
      .house-item {
        width: 50%;
      }
    }
  }
}
</style>
