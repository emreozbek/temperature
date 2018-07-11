import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatIconModule, MatListModule, MatSelectModule} from '@angular/material';

import { HistoryListComponent } from './history-list.component';
import {CitiesService} from '../../service/cities/cities.service';
import {DateUtilService} from '../../util/date/date.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {currentWeatherReducer} from '../../store/reducer/weather.reducer';

describe('HistoryListComponent', () => {
  let component: HistoryListComponent;
  let fixture: ComponentFixture<HistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryListComponent ],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatListModule,
        StoreModule.forRoot({weather: currentWeatherReducer})
      ],
      providers: [CitiesService, DateUtilService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
