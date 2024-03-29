import React, { FC, HTMLAttributes, ReactNode } from 'react'

type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warn'
  | 'danger'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({
  children,
  theme,
  onClick,
  ...props
}) => {
  let foreground: string
  switch (theme) {
    case 'primary':
    case 'secondary':
    case 'danger':
      foreground = 'white'
      break
    default:
      foreground = 'black'
  }
  return (
    <button
      className={`py-3 text-${foreground} px-7 bg-${theme}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
Button.defaultProps = {
  theme: 'primary',
}
