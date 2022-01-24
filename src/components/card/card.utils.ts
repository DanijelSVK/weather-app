import {
  CurrentWeatherResponse,
  OneCallResponse,
} from "../../types/forecastTypes";
import { request } from "../../utils/utils";
import { CardState } from "./Card";

export const setFirstForecast = (
  forecasts: CardState,
  forecastToAdd: CurrentWeatherResponse
): Partial<CardState> => {
  return {
    forecast: [
      ...forecasts.forecast,
      {
        id: forecastToAdd.id,
        temperature: forecastToAdd.main.temp,
        weather: forecastToAdd.weather[0].main,
        weatherDescripton: forecastToAdd.weather[0].description,
      },
    ],
    cityCords: {
      lat: forecastToAdd.coord.lat,
      lon: forecastToAdd.coord.lon,
    },
  };
};

export const getCurrentWeather = async (city: string) => {
  return await request<CurrentWeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=5&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
  );
};

export const getForecastForLocation = async (lon?: number, lat?: number) => {
  if (!lon || !lat) return null;

  return await request<OneCallResponse>(
    `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&exclude=minutely,hourly&cnt=5&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
  );
};
