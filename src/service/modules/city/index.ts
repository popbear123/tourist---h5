import request from '../../request'
import type { IGetCityAll } from './types'
export * from './types'

export function getCityAll() {
  return request.get<IGetCityAll>('/city/all')
}
