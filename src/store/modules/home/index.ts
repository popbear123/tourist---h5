import { defineStore } from 'pinia'
import { getHomeHotSuggests } from '@/service/modules'
import type { IHomeState } from './types'

const useHomeStore = defineStore('home', {
  state: (): IHomeState => ({
    hotSuggests: []
  }),

  actions: {
    async getHomeHotSuggestsAction() {
      const { data } = await getHomeHotSuggests()
      this.hotSuggests = data
    }
  }
})

export { useHomeStore }
