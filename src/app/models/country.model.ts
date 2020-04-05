export interface CountryModel {
  country: string
  countryInfo: CountryInfo
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  active: number
  critical: number
  casesPerOneMillion: number
  deathsPerOneMillion: number
  updated: number
}

export interface HistoricalModel {
  country: string
  provinces: string[]
  timeline: {
    cases: any,
    deaths: any,
    recovered: any
  }
}

interface CountryInfo {
  _id: number
  iso2: string
  iso3: string
  lat: number
  long: number
  flag: string
}
