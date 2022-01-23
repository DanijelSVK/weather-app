import { Component } from "react";
import Card from "./components/card/Card";
import Container from "./components/container/Container";
import Navigation from "./components/navigation/Navigation";

export const CITIES = ["Ottawa", "London", "Sydney"] as const;
export type CitiesType = typeof CITIES;

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navigation cities={CITIES} />
          <Card city="New York" />
        </Container>
      </div>
    );
  }
}

export default App;
