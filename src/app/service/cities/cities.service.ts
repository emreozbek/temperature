import { Injectable } from '@angular/core';
import {CityModel} from '../../model/city.model';

@Injectable()
export class CitiesService {
  cities: CityModel[] = [{
    id: 3871336,
    name: 'Santiago'
  }, {
    id: 3435910,
    name: 'Buenos Aires'
  }, {
    id: 3936456,
    name: 'Lima'
  }, {
    id: 3448439,
    name: 'Sao Paulo'
  }];
}
