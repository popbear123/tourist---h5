import type { ITabBarItem } from './types'

export const tabbarList: ITabBarItem[] = [
  {
    text: '首页',
    imageURL: 'img/tabbar/tab_home.png',
    activeImageURL: 'img/tabbar/tab_home_active.png',
    path: '/home'
  },
  {
    text: '收藏',
    imageURL: 'img/tabbar/tab_favor.png',
    activeImageURL: 'img/tabbar/tab_favor_active.png',
    path: '/favor'
  },
  {
    text: '订单',
    imageURL: 'img/tabbar/tab_order.png',
    activeImageURL: 'img/tabbar/tab_order_active.png',
    path: '/order'
  },
  {
    text: '消息',
    imageURL: 'img/tabbar/tab_message.png',
    activeImageURL: 'img/tabbar/tab_message.png',
    path: '/message'
  }
]
