import * as React from "react";
import "./Button.scss";

interface Props {}

const Button: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = props => {
  return (
    <button {...props} className={"Button"}>
      {props.children}
    </button>
  );
};

export default Button;
