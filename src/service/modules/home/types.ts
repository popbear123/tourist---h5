// 首页热门推荐
export interface IGetHomeHotSuggests {
  data: IGetHomeHotSuggestsDataItem[]
  errcode: number
  errmsg: null | string
}

export interface IGetHomeHotSuggestsDataItem {
  aloneLine: boolean
  checkBubble: boolean
  childTags: any
  tagCode: number
  tagDesc: null | string
  tagLink: string
  tagText: {
    background: {
      color: string
      gradientColor: null | string
      image: null | string
    }
    border: null
    color: '#3F4954'
    text: '番禺区'
    tips: null
  }
}

// 首页推荐类别
export interface IGetHomeCategories {
  data: IGetHomeCategoriesDataItem[]
  errcode: number
  errmsg: null | string
}

export interface IGetHomeCategoriesDataItem {
  adCampaign: boolean
  content: null | string
  id: string
  labels: any[]
  navigateUrl: string
  pictureUrl: string
  pictures: null | string[]
  redPacketConfig: null | any
  subPictureUrl: string
  subTitle: string
  testBucket: string
  title: string
  videoUrl: string
}

// 首页房屋列表
export interface IGetHomeHouseList {
  data: IGetHomeHouseListDataItem[]
  errcode: number
  errmsg: null | string
}

export interface IGetHomeHouseListDataItem {
  data: {
    activityInfo: any
    cityId: number
    commentScore: string
    extendMap: { logicBit: string }
    logicBit: string
    finalPrice: number
    guideText: null | string
    houseAdvert: null | string
    houseId: number
    houseName: string
    houseTags: null | string[]
    iconTag: null | string
    image: {
      url: string
    }
    height: number
    url: string
    width: number
    location: string
    poiLocation: any
    priceTipBadge: {
      type: number
      text: string
      color: string
      background: any
      border: null | string
      orderIndex: number
      tip: null | string
    }
    background: any
    border: string
    color: string
    colorType: number
    gradient: { startColor: string; endColor: string }
    endColor: string
    startColor: string
    jumpUrl: null | string
    orderIndex: number
    text: string
    tip: null | string
    type: number
    productPrice: number
    referencePriceDesc: null | string
    sellingPoint: any
    showHouseVideo: boolean
    summaryText: string
  }
  discoveryContentType: number
}
