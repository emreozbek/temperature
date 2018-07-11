import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {WeatherService} from '../../service/rest/weather/weather.service';
import {CurrentWeatherModel} from '../../model/weather/current.model';
import {WeatherAction} from '../../store/action/weather.action';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  environment: Object = environment.weather;
  actual: CurrentWeatherModel;
  error = false;
  constructor(private service: WeatherService, private actions: WeatherAction) {}
  ngOnInit() {
    this.updateWeather();
    setInterval(this.updateWeather.bind(this), environment.weather.refreshTime);
  }
  updateWeather() {
    this.service.getCurrentCityById(this.id).then(response => {
      this.actual = response;
      this.actions.updateWeather(this.id, response);
      this.error = false;
    }).catch(() => {
      if (!this.actual) {
        this.error = true;
      }
    });
  }
}
