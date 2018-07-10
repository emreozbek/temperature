
export interface WeatherModel {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface WeatherMainModel {
  temp: number;
  humidity: number;
  pressure: number;
  temp_min: number;
  temp_max: number;
}
export interface WeatherWindModel {
  speed: number;
  deg: number;
}
