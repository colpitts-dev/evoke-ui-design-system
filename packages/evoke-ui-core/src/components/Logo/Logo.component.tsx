import React, { FC, HTMLAttributes } from "react";

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  labelOne?: string;
  labelTwo?: string;
}

/**
 * Logo component
 */
export const Logo: FC<LogoProps> = ({
  labelOne = "evoke",
  labelTwo = "ui",
  ...props
}) => {
  return (
    <h2 className="text-3xl text-black dark:text-off-white" {...props}>
      {labelOne}
      <span className="text-primary">[</span>
      <span className="text-bright-black dark:text-bright-white">
        {labelTwo}
      </span>
      <span className="text-primary">]</span>
    </h2>
  );
};
