import { defineStore } from 'pinia'
import { getHomeHotSuggests, getHomeCategories, getHomeHouseList } from '@/service/modules'
import type {
  IGetHomeHotSuggestsDataItem,
  IGetHomeCategoriesDataItem,
  IGetHomeHouseListDataItem
} from '@/service/modules'

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [] as IGetHomeHotSuggestsDataItem[],
    categories: [] as IGetHomeCategoriesDataItem[],
    houseList: [] as IGetHomeHouseListDataItem[],
    page: 1
  }),

  actions: {
    // 获取首页热门推荐
    async getHomeHotSuggestsAction() {
      const { data } = await getHomeHotSuggests()
      this.hotSuggests = data
    },

    // 获取首页推荐类别
    async getHomeCategoriesAction() {
      const { data } = await getHomeCategories()
      this.categories = data
    },

    // 获取首页房屋推荐
    async getHomeHouseListAction() {
      const { data } = await getHomeHouseList(this.page)
      this.houseList.push(...data)
      this.page++
    }
  }
})

export { useHomeStore }
