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
    <h2
      className="font-sans text-3xl text-black dark:text-off-white"
      {...props}
    >
      {labelOne}
      <span className="font-sans text-primary">[</span>
      <span className="font-sanstext-bright-black dark:text-bright-white">
        {labelTwo}
      </span>
      <span className="font-sans text-primary">]</span>
    </h2>
  );
};
