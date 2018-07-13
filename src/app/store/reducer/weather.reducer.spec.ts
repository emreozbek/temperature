import {currentWeatherReducer} from './weather.reducer';
import {UPDATE_WEATHER} from '../constant/weather.constant';
import {CurrentWeatherModel} from '../../model/weather/current.model';
import {WeatherActionModel} from '../../model/weather/action.model';

describe('WeatherReducer', () => {

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

  it('should handle initial State', () => {
    expect(currentWeatherReducer(undefined, <WeatherActionModel>{ })).toEqual({});
  });

  it('should handle UPDATE_WEATHER', () => {
    const store = currentWeatherReducer(undefined, <WeatherActionModel>{
      type: UPDATE_WEATHER,
      payload: {
        id: data.id.toString(),
        weather: data
      }
    });
    expect(store[data.id.toString()]).toBeDefined();
    expect(store[data.id.toString()].length).toBeGreaterThan(0);
  });
});
