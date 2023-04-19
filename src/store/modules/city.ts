import { defineStore } from 'pinia'
import { getCityAll } from '@/service'
import type { IGetCityAllData } from '@/service'

const useCityStore = defineStore('city', {
  state: () => ({
    allCity: {} as IGetCityAllData,
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
