import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {WeatherService} from '../../service/rest/weather/weather.service';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  symbol: string = environment.weather.symbol;
  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.weather.getCurrentCityById(this.id).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

}
