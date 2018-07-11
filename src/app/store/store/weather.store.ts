import {WeatherStoreModel} from '../../model/weather/store.model';

export interface WeatherStore {
  readonly weather: WeatherStoreModel;
}
