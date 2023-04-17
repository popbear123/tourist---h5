import request from '../../request'
import type { IGetHomeHotSuggests } from './types'
export * from './types'

export function getHomeHotSuggests() {
  return request.get<IGetHomeHotSuggests>('/home/hotSuggests')
}
