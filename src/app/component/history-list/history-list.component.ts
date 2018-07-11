import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {CitiesService} from '../../service/cities/cities.service';
import {environment} from '../../../environments/environment';
import {WeatherStoreModel} from '../../model/weather/store.model';
import {WeatherStore} from '../../store/store/weather.store';
import {DateUtilService} from '../../util/date/date.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  selected: string;
  environment: Object = environment.weather;
  weathers: WeatherStoreModel;
  constructor(public cities: CitiesService,
              public dateUtil: DateUtilService,
              private store: Store<WeatherStore>) {
    this.store.subscribe(state => {
      this.weathers = state.weather;
    });
  }
  ngOnInit() {}
}

