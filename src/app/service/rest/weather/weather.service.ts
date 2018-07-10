import {Injectable} from '@angular/core';
import {CoreService} from '../core/core.service';
import {environment} from '../../../../environments/environment';

@Injectable()
export class WeatherService extends CoreService{
  public getCurrentCityById(cityId: number): Promise<any>{
    return this.getCall(environment.weather.api.url, {units: environment.weather.units, id: cityId});
  }
}
