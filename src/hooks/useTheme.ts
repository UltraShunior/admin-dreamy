import { useState, useEffect } from 'react'

const useTheme = (): [string, (theme: string) => void] => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, setTheme]
}

export default useTheme;
