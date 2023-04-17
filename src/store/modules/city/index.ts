import { defineStore } from 'pinia'
import { getCityAll } from '@/service'
import type { ICityState } from './types'

const useCityStore = defineStore('city', {
  state: (): ICityState => ({
    allCity: {},
    chooseCity: '广州'
  }),

  actions: {
    async getAllCity() {
      const { data } = await getCityAll()
      this.allCity = data
    }
  }
})

export { useCityStore }
