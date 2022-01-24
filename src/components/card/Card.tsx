import { Component } from "react";
import BaseIcon from "../icon/BaseIcon";
import Loader from "../loader/Loader";
import { dayName, getWeatherIconName, prepareData } from "../../utils/utils";
import { ForecastType } from "../../types/forecastTypes";
import { getCurrentWeather, getForecastForLocation } from "./card.utils";

type CardProps = {
  city: string;
};

export type CardState = {
  isLoading: boolean;
  hasError: boolean;
  forecast: ForecastType[];
  cityCords: {
    lat: number;
    lon: number;
  } | null;
};

export default class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      isLoading: true,
      hasError: false,
      forecast: [],
      cityCords: null,
    };
  }

  async componentDidMount() {
    try {
      const currentWeather = await getCurrentWeather(this.props.city);

      this.setState({
        forecast: [
          {
            id: currentWeather.id,
            temperature: currentWeather.main.temp,
            weather: currentWeather.weather[0].main,
            weatherDescripton: currentWeather.weather[0].description,
          },
        ],
        cityCords: {
          lat: currentWeather.coord.lat,
          lon: currentWeather.coord.lon,
        },
      });

      const forecast = await getForecastForLocation(
        this.state.cityCords?.lon,
        this.state.cityCords?.lat
      );

      if (forecast) {
        this.setState({
          forecast: [...this.state.forecast, ...prepareData(forecast)],
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        hasError: true,
        isLoading: false,
      });
    }
  }

  async componentDidUpdate(prevProps: CardProps) {
    if (prevProps.city !== this.props.city) {
      try {
        const currentWeather = await getCurrentWeather(this.props.city);

        this.setState({
          forecast: [
            {
              id: currentWeather.id,
              temperature: currentWeather.main.temp,
              weather: currentWeather.weather[0].main,
              weatherDescripton: currentWeather.weather[0].description,
            },
          ],
          cityCords: {
            lat: currentWeather.coord.lat,
            lon: currentWeather.coord.lon,
          },
        });

        const forecast = await getForecastForLocation(
          this.state.cityCords?.lon,
          this.state.cityCords?.lat
        );

        if (forecast) {
          this.setState({
            forecast: [...this.state.forecast, ...prepareData(forecast)],
            isLoading: false,
          });
        }
      } catch (error) {
        this.setState({
          hasError: true,
          isLoading: false,
        });
      }
    }
  }

  render() {
    const today = new Date();
    const { hasError, isLoading, forecast } = this.state;
    console.log("card render");

    return (
      <div className="weather-cards">
        {isLoading ? (
          <Loader />
        ) : hasError ? (
          <h2 className="display-error">
            Something went wrong. Try to refresh.
          </h2>
        ) : (
          forecast.map(
            ({ id, weather, weatherDescripton, temperature }, index) => {
              let nextDay = new Date();
              nextDay.setDate(today.getDate() + index);

              return (
                <div
                  key={id}
                  className={`weather-card ${index === 0 ? "main" : ""}`}>
                  <h2>{index === 0 ? "Today" : dayName[nextDay.getDay()]}</h2>
                  <BaseIcon
                    name={getWeatherIconName(weather, weatherDescripton)}
                  />
                  <h3>
                    {Math.round(temperature)}°
                    {index === 0 ? <span>{weather}</span> : null}
                  </h3>
                </div>
              );
            }
          )
        )}
      </div>
    );
  }
}
