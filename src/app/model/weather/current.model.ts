import {CoordinateModel} from '../unit.model';
import {WeatherMainModel, WeatherModel, WeatherWindModel} from './weather.model';

export interface CurrentWeatherModel {
  coord: CoordinateModel;
  sys:{
    country: string;
    sunrise: number;
    sunset: number;
  };
  weather: WeatherModel[];
  main: WeatherMainModel;
  wind: WeatherWindModel;
  rain: {
    '3h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  id: number;
  name: string;
  cod: number;
}
