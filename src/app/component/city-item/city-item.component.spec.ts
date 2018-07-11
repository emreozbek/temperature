import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CityItemComponent } from './city-item.component';
import {WeatherService} from '../../service/rest/weather/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherAction} from '../../store/action/weather.action';
import {StoreModule} from '@ngrx/store';
import {currentWeatherReducer} from '../../store/reducer/weather.reducer';

describe('CityItemComponent', () => {
  let component: CityItemComponent;
  let fixture: ComponentFixture<CityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityItemComponent ],
      imports: [HttpClientModule, StoreModule.forRoot({weather: currentWeatherReducer})],
      providers: [WeatherService, WeatherAction],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
