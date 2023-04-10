<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

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
</script>

<template>
  <div class="home">
    <div class="nav-bar">爱在旅途</div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="info-box">
      <div class="location-bar" @click="locationClick">
        <div class="left">广州</div>
        <div class="right">
          <text class="text">我的位置</text>
          <img src="@/assets/img/home/icon_location.png" class="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
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
    .location-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44.8px;
      padding: 0 20px;
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
  }
}
</style>
