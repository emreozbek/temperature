# Temperature Application

It is showing some cities(Santiago, Buenos Aires, Lima, Sao Paulo) temperatures. The data provider is [OpenWeathereMap](https://openweathermap.org). 

# Using Technologies

1. Angular 5.2
2. Ngrx
3. Angular Material UI
4. Normalize.css

# About Application

... There is have city list service in app. The cities id's are in there. The weather data is taking from API and writing to store. I used [ngrx](https://github.com/ngrx/store) library for store. There is have json property for every city id in the store. For example ["id"]: [weather,weather...]. The weather information is refreshing every 3 minutes and every when new data came, according to id into in the store. In this way is keeping history.

[Preview link](https://emreozbek.github.io/temperature/)
