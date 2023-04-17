export interface IGetCityAll {
  data: IGetCityAllData
  errTip: any
  errcode: number
  errmsg: null | string
  referTraceId: string
  ret: boolean
  trace: any
  ver: string
  _id: string
}

export interface IGetCityAllData {
  cityGroup: {
    cities: ICities[]
    hotCities: ICity[]
    title: string
  }
  cityGroupOverSea: {
    cities: ICities[]
    hotCities: ICity[]
    title: string
  }
}

export interface ICity {
  cityId: number
  cityName: string
  gangAoTai: boolean
  hot: boolean
  latitude: string
  longitude: string
  pinYin: string
}

export interface ICities {
  cities: ICity[]
  group: string
}
