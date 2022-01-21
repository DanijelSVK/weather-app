import { Component, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default class Container extends Component<ContainerProps> {
  render() {
    const { children } = this.props;

    return <div className="container">{children}</div>;
  }
}
