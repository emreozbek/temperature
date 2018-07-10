import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';

import { AppComponent } from './component/app-component/app.component';
import { CityListComponent } from './component/city-list/city-list.component';
import { HistoryListComponent } from './component/history-list/history-list.component';
import { CityItemComponent } from './component/city-item/city-item.component';


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
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
