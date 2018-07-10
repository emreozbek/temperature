import { Component, OnInit } from '@angular/core';
import {CitiesService} from '../../service/cities/cities.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  symbol: string = environment.weather.symbol;

  constructor(public cities: CitiesService) { }

  ngOnInit() {
  }

  selectedCity() {

  }
}
