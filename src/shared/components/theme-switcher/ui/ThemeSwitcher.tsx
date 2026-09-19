'use client'

import { type FC, use } from 'react'
import { browser } from 'react-dom'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/shared/ui/shadcn'

import { useThemeStore } from '../model/store'

export const ThemeSwitcher: FC = () => {
  use(browser())
  const theme = useThemeStore((s) => s.theme)
  const toggleTheme = useThemeStore((s) => s.toggleTheme)

  const isDark = theme === 'dark'

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
      title={isDark ? 'Включить светлую тему' : 'Включить темную тему'}
    >
      {isDark ? <Sun className='size-5 text-yellow-500' /> : <Moon className='size-5' />}
    </Button>
  )
}
