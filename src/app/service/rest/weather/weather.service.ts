import {Injectable} from '@angular/core';
import {CoreService} from '../core/core.service';
import {environment} from '../../../../environments/environment';
import {CurrentWeatherModel} from '../../../model/weather/current.model';

@Injectable()
export class WeatherService extends CoreService {
  public getCurrentCityById(cityId: number): Promise<CurrentWeatherModel> {
    return this.getCall(environment.weather.api.url, {units: environment.weather.units, id: cityId});
  }
}
