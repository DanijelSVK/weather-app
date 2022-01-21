import { Component } from "react";
import { CitiesType } from "../../App";

type TabsType = {
  cities: CitiesType;
};

export default class Tabs extends Component<TabsType> {
  render() {
    const { cities } = this.props;

    return (
      <nav className="navigation">
        <ul>
          {cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </nav>
    );
  }
}
