import type { IGetCityAllData } from '@/service'

export interface ICityState {
  allCity: IGetCityAllData | {}
  chooseCity: string
}
