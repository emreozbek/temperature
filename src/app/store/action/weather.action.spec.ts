import {Store, StoreModule} from '@ngrx/store';
import {inject, TestBed} from '@angular/core/testing';

import {currentWeatherReducer} from '../reducer/weather.reducer';
import {WeatherStore} from '../store/weather.store';
import {WeatherAction} from './weather.action';
import {CurrentWeatherModel} from '../../model/weather/current.model';


const data: CurrentWeatherModel = {
  'coord': {'lon': 139, 'lat': 35},
  'sys': {'country': 'JP', 'sunrise': 1369769524, 'sunset': 1369821049},
  'weather': [{'id': 804, 'main': 'clouds', 'description': 'overcast clouds', 'icon': '04n'}],
  'main': {'temp': 289.5, 'humidity': 89, 'pressure': 1013, 'temp_min': 287.04, 'temp_max': 292.04},
  'wind': {'speed': 7.31, 'deg': 187.002},
  'rain': {'3h': 0},
  'clouds': {'all': 92},
  'dt': 1369824698,
  'id': 1851632,
  'name': 'Shuzenji',
  'cod': 200
};

describe('WeatherActionSpec', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Store, WeatherAction],
      imports: [StoreModule.forRoot({weather: currentWeatherReducer})]
    });
  });

  it('should update to store', inject([Store, WeatherAction], (store: Store<WeatherStore>, action: WeatherAction) => {
    action.updateWeather(data.id, data);
    store.subscribe((response) => {
      expect(response.weather[data.id.toString()]).toBeDefined();
    })
  }));
});
