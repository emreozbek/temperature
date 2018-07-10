import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './component/app-component/app.component';
import { CityListComponent } from './component/city-list/city-list.component';
import { HistoryListComponent } from './component/history-list/history-list.component';
import { CityItemComponent } from './component/city-item/city-item.component';
import {CitiesService} from './service/cities/cities.service';
import {CoreService} from './service/rest/core/core.service';
import {WeatherService} from './service/rest/weather/weather.service';


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
    MatIconModule
  ],
  providers: [CitiesService, CoreService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
