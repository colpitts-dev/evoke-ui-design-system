import * as React from "react";

type ButtonTheme =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warn"
  | "danger";
export interface ButtonProps {
  children: React.ReactNode;
  theme: ButtonTheme;
}

export function Button(props: ButtonProps) {
  let foreground: string;
  switch (props.theme) {
    case "primary":
    case "secondary":
    case "danger":
      foreground = "white";
      break;
    default:
      foreground = "black";
  }
  return (
    <button className={`py-3 text-${foreground} px-7 bg-${props.theme}`}>
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
Button.defaultProps = {
  theme: "primary",
};
