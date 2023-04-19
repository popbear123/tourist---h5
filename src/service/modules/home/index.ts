import request from '../../request'
import type { IGetHomeHotSuggests, IGetHomeCategories, IGetHomeHouseList } from './types'
export * from './types'

// 获取首页热门推荐
export function getHomeHotSuggests() {
  return request.get<IGetHomeHotSuggests>('/home/hotSuggests')
}

// 获取首页推荐类别
export function getHomeCategories() {
  return request.get<IGetHomeCategories>('home/categories')
}

// 获取首页房屋列表
export function getHomeHouseList(page: number = 1) {
  return request.get<IGetHomeHouseList>('home/houselist', { params: { page } })
}
