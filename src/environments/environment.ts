export const environment = {
  production: false,
  weather: {
    api: {
      url: 'https://api.openweathermap.org/data/2.5/weather/',
      key: '05dea44a3b9a0f96bf3d862fcb033548'
    },
    cdn: 'https://openweathermap.org/img/w/',
    iconExtension: '.png',
    units: 'metric',
    symbol: '°C',
    refreshTime: 1000 * 10
  }
};
