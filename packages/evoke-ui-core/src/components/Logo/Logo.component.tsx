import React, { FC, HTMLAttributes } from "react";

type ThemeColor =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warn"
  | "danger";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  labelOne?: string;
  labelTwo?: string;
  theme?: ThemeColor;
}

/**
 * Logo component
 */
export const Logo: FC<LogoProps> = ({
  labelOne = "evoke",
  labelTwo = "ui",
  theme = "primary",
  ...props
}) => {
  return (
    <h2
      className="font-secondary text-3xl text-black dark:text-off-white"
      {...props}
    >
      {labelOne}
      <span className={`text-${theme}`}>[</span>
      <span className="text-bright-black dark:text-bright-white">
        {labelTwo}
      </span>
      <span className={`text-${theme}`}>]</span>
    </h2>
  );
};
