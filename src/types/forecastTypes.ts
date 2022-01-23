export type MainWeather =
  | "Clear"
  | "Clouds"
  | "Rain"
  | "Snow"
  | "Drizzle"
  | "Thunderstorm"
  | "Mist";

export type DescriptionWeather =
  | "clear sky"
  | "few clouds"
  | "scattered clouds"
  | "broken clouds"
  | "overcast clouds"
  | "shower rain"
  | "rain"
  | "thunderstorm"
  | "snow"
  | "mist";

export type IconWeather =
  | "01d.png"
  | "01n.png"
  | "02d.png"
  | "02n.png"
  | "03d.png"
  | "03n.png"
  | "04d.png"
  | "04n.png"
  | "09d.png"
  | "09n.png"
  | "10d.png"
  | "10n.png"
  | "11d.png"
  | "11n.png"
  | "13d.png"
  | "13n.png"
  | "50d.png"
  | "50n.png";

export type WeatherType = {
  id: number;
  main: MainWeather;
  description: DescriptionWeather;
  icon: IconWeather;
};

export type CurrentWeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherType[];
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
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
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
  cod: number;
};

export type OneCallResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: WeatherType[];
  };
  daily: DailyForecastType[];
};

export type ForecastType = {
  id: number;
  temperature: number;
  weather: MainWeather;
  weatherDescripton: DescriptionWeather;
};

export type DailyForecastType = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherType[];
  clouds: number;
  pop: number;
  uvi: number;
};
