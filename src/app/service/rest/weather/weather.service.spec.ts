import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {HttpClientModule} from '@angular/common/http';
import {CoreService} from '../core/core.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
