import {TestBed, async} from '@angular/core/testing';
import {MatCardModule, MatIconModule, MatListModule, MatSelectModule, MatTabsModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CityListComponent} from '../city-list/city-list.component';
import {HistoryListComponent} from '../history-list/history-list.component';
import {CityItemComponent} from '../city-item/city-item.component';
import {CitiesService} from '../../service/cities/cities.service';
import {DateUtilService} from '../../util/date/date.service';
import {StoreModule} from '@ngrx/store';
import {currentWeatherReducer} from '../../store/reducer/weather.reducer';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CityListComponent,
        HistoryListComponent,
        CityItemComponent
      ],
      imports: [
        MatCardModule,
        MatTabsModule,
        MatSelectModule,
        MatIconModule,
        MatListModule,
        StoreModule.forRoot({weather: currentWeatherReducer})
      ],
      providers: [CitiesService, DateUtilService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
