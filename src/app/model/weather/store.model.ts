import {CurrentWeatherModel} from './current.model';

export interface WeatherStoreModel {
  [id: string]: CurrentWeatherModel[];
}
