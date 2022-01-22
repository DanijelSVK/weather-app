import { Component, FC, SVGAttributes, HTMLAttributes } from "react";
import * as Icons from "./iconsList";
import { IconTypes } from "./iconTypes";

type BaseIconType = {
  name: IconTypes;
  className?: string;
  rest?: HTMLAttributes<{}>;
};

export interface TIconList {
  [key: string]: FC<SVGAttributes<SVGElement>> | undefined;
}

export default class BaseIcon extends Component<BaseIconType> {
  render() {
    const { name, className = "", rest } = this.props;

    const iconsList: TIconList = Icons;

    const Component = iconsList[name];

    if (!Component) return null;

    return (
      <Component className={`weather-icon ${className}`} {...rest}></Component>
    );
  }
}
