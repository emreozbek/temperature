import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CityListComponent } from './city-list.component';
import {CitiesService} from '../../service/cities/cities.service';
import {CityItemComponent} from '../city-item/city-item.component';
import {WeatherService} from '../../service/rest/weather/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherAction} from '../../store/action/weather.action';
import {StoreModule} from '@ngrx/store';
import {currentWeatherReducer} from '../../store/reducer/weather.reducer';
import {CurrentWeatherModel} from '../../model/weather/current.model';

describe('CityListComponent', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityListComponent, CityItemComponent ],
      providers: [CitiesService, WeatherService, WeatherAction],
      imports: [HttpClientModule, StoreModule.forRoot({weather: currentWeatherReducer})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cities', inject([CitiesService], (cities: CitiesService) => {
    expect(cities).toBeTruthy();
    cities.cities.map(item => {
      expect(item.id).toBeDefined();
      expect(item.name).toBeDefined();
    });
  }));
});
