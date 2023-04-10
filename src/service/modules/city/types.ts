export interface IGetCityAll {
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
