import React, { FC, useEffect, useState, HTMLAttributes, ReactNode } from 'react'

export interface DarkModeToggleProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
}

export const DarkModeToggle: FC<DarkModeToggleProps> = ({
  className,
  ...props
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>()

  useEffect(() => {
    const initDarkMode =
      window.matchMedia('(prefers-color-scheme: dark)').matches ||
      document.body.classList.contains('dark')

    initDarkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark')

    setIsDarkMode(initDarkMode)

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        const colorScheme = e.matches ? "dark" : "light";
        if (colorScheme === "dark") {
          document.body.classList.add('dark')
          setIsDarkMode(true)
        } else {
          document.body.classList.remove('dark')
          setIsDarkMode(false)
        }
      });



  }, [])

  const handleToggleDarkMode = () => {
    isDarkMode
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark')
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button onClick={handleToggleDarkMode} className={className} {...props}>
      {isDarkMode ? (
        <i className="cursor-pointer text-primary material-icons">
          light_mode
        </i>
      ) : (
        <i className="cursor-pointer text-bright-black material-icons">
          dark_mode
        </i>
      )}
    </button>
  )
}
