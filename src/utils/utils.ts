import { IconTypes } from "../components/icon/iconTypes";
import {
  DescriptionWeather,
  ForecastType,
  MainWeather,
  OneCallResponse,
} from "../types/forecastTypes";

export const prepareData = (forecast: OneCallResponse): ForecastType[] => {
  let result: ForecastType[] = [];

  const dailyForecasts = forecast.daily.slice(0, 4); // @todo check if first day is today or tomorrow

  dailyForecasts.map((item) => {
    return result.push({
      id: item.dt,
      temperature: item.temp.day,
      weather: item.weather[0].main,
      weatherDescripton: item.weather[0].description,
    });
  });

  return result;
};

export const request = async <TResponse>(url: string): Promise<TResponse> => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const dayName: { [key: number]: string } = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export const weatherIconMap: Partial<{
  [key in MainWeather | DescriptionWeather]: IconTypes;
}> = {
  Clear: "ClearSky",
  "few clouds": "FewClouds",
  "scattered clouds": "ScatteredClouds",
  "broken clouds": "BrokenClouds",
  Drizzle: "ShowerRain",
  Rain: "Rain",
  Snow: "Snow",
  Thunderstorm: "Thunderstorm",
  Mist: "Mist",
};

export const getWeatherIconName = (
  weather: MainWeather,
  description: DescriptionWeather
): IconTypes => {
  if (weather === "Clouds") {
    return weatherIconMap[description] || "FewClouds";
  }

  return weatherIconMap[weather] || "ClearSky";
};
