import { Component } from "react";
import { CitiesType } from "../../App";

type TabsProps = {
  cities: CitiesType;
  handleCityChange: (city: CitiesType[number]) => void;
  selectedCity: CitiesType[number];
};

export default class Tabs extends Component<TabsProps> {
  render() {
    const { cities, handleCityChange, selectedCity } = this.props;

    return (
      <nav className="navigation">
        <ul>
          {cities.map((city) => (
            <li key={city}>
              <button
                className={selectedCity === city ? "active" : ""}
                onClick={() => handleCityChange(city)}>
                {city}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
