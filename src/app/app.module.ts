import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './component/app-component/app.component';
import { CityListComponent } from './component/city-list/city-list.component';
import { HistoryListComponent } from './component/history-list/history-list.component';
import { CityItemComponent } from './component/city-item/city-item.component';
import {CitiesService} from './service/cities/cities.service';
import {CoreService} from './service/rest/core/core.service';
import {WeatherService} from './service/rest/weather/weather.service';
import {currentWeatherReducer} from './store/reducer/weather.reducer';
import {WeatherAction} from './store/action/weather.action';
import {DateUtilService} from './util/date/date.service';


@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    HistoryListComponent,
    CityItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({weather: currentWeatherReducer}),
  ],
  providers: [CitiesService, CoreService, WeatherService, WeatherAction, DateUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
