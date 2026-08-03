'use client'

import type { FC } from 'react'
import { Moon, Sun } from 'lucide-react'

import { useMounted } from '@/shared'
import { Button } from '@/shared/ui/shadcn'

import { useThemeStore } from '../model/store'

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useThemeStore()
  const mounted = useMounted()

  const isDark = mounted && theme === 'dark'

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
