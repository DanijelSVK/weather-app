import { Component } from "react";
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
          <p>weather</p>
        </Container>
      </div>
    );
  }
}

export default App;
