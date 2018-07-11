import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {WeatherStoreModel} from '../../model/weather/store.model';
import {UPDATE_WEATHER} from '../constant/weather.constant';
import {CurrentWeatherModel} from '../../model/weather/current.model';

@Injectable()
export class WeatherAction {
  constructor(private store: Store<WeatherStoreModel>){}
  public updateWeather(id: number, weather: CurrentWeatherModel){
    this.store.dispatch({
      type: UPDATE_WEATHER,
      payload: {
        id,
        weather
      }
    });
  }
}
