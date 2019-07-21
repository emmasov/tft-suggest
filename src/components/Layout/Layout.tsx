import * as React from "react";
import "./Layout.scss";
interface Props {}

const Layout: React.FC<Props> = props => {
  return <div className={"Layout"}>{props.children}</div>;
};

export default Layout;
