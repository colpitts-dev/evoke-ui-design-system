import * as React from "react";

type ButtonTheme = "primary" | "secondary";
export interface ButtonProps {
  children: React.ReactNode;
  theme: ButtonTheme;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={`py-3 text-white px-7 bg-${
        props.theme === "primary" ? "accent" : "cyan"
      }`}
    >
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
Button.defaultProps = {
  theme: "primary",
};
