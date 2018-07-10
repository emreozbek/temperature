import { Component, OnInit } from '@angular/core';
import {CitiesService} from '../../service/cities/cities.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  constructor(public cities: CitiesService) { }

  ngOnInit() {
  }

}
