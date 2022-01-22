import { Component } from "react";
import BaseIcon from "../icon/BaseIcon";
import Loader from "../loader/Loader";

/**
clear sky
few clouds ok
scattered clouds ok
broken clouds OK
shower rain ok
rain ok
thunderstorm OK
snow OK
mist ok
*/
const MOCK_DATA = [
  {
    id: 1,
    temperature: 19.34,
    weatherIcon: "Clouds",
  },
  {
    id: 2,
    temperature: 4.34,
    weatherIcon: "light rain",
  },
  {
    id: 3,
    temperature: 4.34,
    weatherIcon: "few clouds",
  },
  {
    id: 4,
    temperature: 4.34,
    weatherIcon: "Clouds",
  },
  {
    id: 5,
    temperature: 4.34,
    weatherIcon: "Clouds",
  },
];

const dayName: { [key: number]: string } = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export default class Card extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {}

  render() {
    const today = new Date();
    const { isLoading } = this.state;

    return (
      <div className="weather-cards">
        {MOCK_DATA.map((day, index) => {
          let nextDay = new Date();
          nextDay.setDate(today.getDate() + index);

          return (
            <div
              key={day.id}
              className={`weather-card ${index === 0 ? "main" : ""}`}>
              <h2>{index === 0 ? "Today" : dayName[nextDay.getDay()]}</h2>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <BaseIcon name="Thunderstorm" />
                  <h3>
                    {Math.floor(day.temperature)}°
                    {index === 0 ? <span>Clouds</span> : null}
                  </h3>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
