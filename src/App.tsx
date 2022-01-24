import { Component, ElementType } from "react";
import Card from "./components/card/Card";
import Container from "./components/container/Container";
import Navigation from "./components/navigation/Navigation";

export const CITIES = ["Ottawa", "London", "Sydney"] as const;
export type CitiesType = typeof CITIES;

type AppState = {
  cities: typeof CITIES;
  selectedCity: typeof CITIES[number];
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      cities: CITIES,
      selectedCity: CITIES[0],
    };
  }

  handleCityChange = (city: typeof CITIES[number]) => {
    this.setState({
      selectedCity: city,
    });
  };

  render() {
    return (
      <Container>
        <Navigation
          cities={CITIES}
          handleCityChange={this.handleCityChange}
          selectedCity={this.state.selectedCity}
        />
        <Card city="Zilina" />
      </Container>
    );
  }
}

export default App;
