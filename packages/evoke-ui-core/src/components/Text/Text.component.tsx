import React, { FC, HTMLAttributes, ReactChild } from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactChild;
  className?: string;
  size?: "sm" | "base" | "lg";
}

/**
 * Text component
 */
export const Text: FC<TextProps> = ({ size="base",className, children, ...props }) => {
  return (
    <p
      className={`font-secondary text-dark dark:text-white ${size !== "base" ? `text-${size}` : ""} ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </p>
  );
};
