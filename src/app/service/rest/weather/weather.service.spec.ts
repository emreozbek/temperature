import {TestBed, inject, async} from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {HttpClientModule} from '@angular/common/http';
import {DateUtilService} from '../../../util/date/date.service';

describe('WeatherService', () => {
  const cityId = 1851632;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService, DateUtilService ],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('should have get current weather from the rest api', async(
    inject([WeatherService, DateUtilService], (service: WeatherService, date: DateUtilService) => {
      service.getCurrentCityById(cityId).then((response) => {
        expect(response.name).toBeDefined();
        expect(response.weather.length).toBeGreaterThan(0);
        expect(response.weather[0].icon).toBeDefined();
        expect(response.weather[0].description).toBeDefined();
        expect(response.dt).toBeDefined();
        expect(response.dt).toEqual(jasmine.any(Number));
        expect(date.UTCSecondsToDate(response.dt)).toEqual(jasmine.any(Date));
      });
    })
  ));
});
