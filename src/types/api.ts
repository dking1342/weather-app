export type Weather = (city: string) => Promise<WeatherObject>;

export type WeatherSubtype = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type WeatherObject = {
  coord: { lon: number; lat: number };
  weather: WeatherSubtype[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: string;
} | null;

export type WeatherForecastList = {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp_kf: number;
    temp_max: number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  wind: { speed: number; deg: number; gust: number };
  weather: WeatherSubtype[];
};

export type WeatherForecastType = {
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: WeatherForecastList[] | null;
  message: number;
} | null;
