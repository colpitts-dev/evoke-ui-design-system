import React, { FC, HTMLAttributes } from 'react'

type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warn'
  | 'danger'

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  labelOne?: string
  labelTwo?: string
  theme?: ThemeColor
}

/**
 * Logo component
 */
export const Logo: FC<LogoProps> = ({
  labelOne = 'evoke',
  labelTwo = 'ui',
  theme = 'primary',
  ...props
}) => {
  const textColor = `text-${theme}`
  return (
    <h2
      className="text-3xl text-black font-secondary dark:text-off-white"
      {...props}
    >
      {labelOne}
      <span className={textColor}>[</span>
      <span className="text-bright-black dark:text-bright-white">
        {labelTwo}
      </span>
      <span className={textColor}>]</span>
    </h2>
  )
}
