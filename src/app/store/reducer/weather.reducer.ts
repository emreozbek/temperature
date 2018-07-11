import {UPDATE_WEATHER} from '../constant/weather.constant';
import {WeatherStoreModel} from '../../model/weather/store.model';
import {WeatherActionModel} from '../../model/weather/action.model';

export function currentWeatherReducer(state: WeatherStoreModel = {}, action: WeatherActionModel) {
  switch (action.type) {
    case UPDATE_WEATHER:
      if (!state[action.payload.id]) {
        state[action.payload.id] = [action.payload.weather];
      } else {
        state[action.payload.id].unshift(action.payload.weather);
      }
      return state;
    default:
      return state;
  }
}
