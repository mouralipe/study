'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="invisible absolute size-4 dark:visible" />
      <Moon className="absolute size-4 dark:invisible" />
      <span className="sr-only">toggle theme</span>
    </Button>
  )
}
