import {CurrentWeatherModel} from './current.model';

export interface WeatherActionModel {
  type: string;
  payload: {
    id: string;
    weather: CurrentWeatherModel;
  };
}
