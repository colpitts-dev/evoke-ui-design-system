import React, { FC, HTMLAttributes, ReactChild } from 'react'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactChild
  className?: string
}

/**
 * Text component
 */
export const Text: FC<TextProps> = ({ className, children, ...props }) => {
  return (
    <p
      className={`font-secondary text-black dark:text-off-white ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </p>
  )
}
