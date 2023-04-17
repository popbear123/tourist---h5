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
