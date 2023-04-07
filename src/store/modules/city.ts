import { defineStore } from 'pinia'
import { getCityAll } from '@/service'
import type { IGetCityAll } from '@/service'

const useCityStore = defineStore('city', {
  state: () => ({
    allCity: {} as IGetCityAll
  }),

  actions: {
    async getAllCity() {
      const { data } = await getCityAll()
      this.allCity = data
    }
  }
})

export { useCityStore }
