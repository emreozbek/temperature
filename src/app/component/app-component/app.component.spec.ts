import {TestBed, async} from '@angular/core/testing';
import {MatCardModule, MatTabsModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CityListComponent} from '../city-list/city-list.component';
import {HistoryListComponent} from '../history-list/history-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CityListComponent,
        HistoryListComponent
      ],
      imports: [
        MatCardModule,
        MatTabsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
