import React, { FC, HTMLAttributes, ReactNode } from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
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
      <>{children}</>
    </p>
  );
};
