'use client'

import type { FC } from 'react'
import { resolveValue, type Toast, toast } from 'react-hot-toast'
import { Angry, CheckCircle2, Info, Loader2, X } from 'lucide-react'
import { motion } from 'motion/react'

import { cn } from '@/shared'
import { Button } from '@/shared/ui/shadcn'

interface ToastCardProps {
  t: Toast
}

export const ToastCard: FC<ToastCardProps> = (props) => {
  const { t } = props
  const messageText = resolveValue(t.message, t)

  const getToastStyles = () => {
    switch (t.type) {
      case 'success':
        return {
          icon: <CheckCircle2 className='h-5 w-5 text-green-600' />,
          iconBg: 'bg-green-600/10 dark:bg-green-600/20',
          border: 'border-green-600/20 dark:border-green-600/30',
          shadow: 'shadow-green-600/5',
        }
      case 'error':
        return {
          icon: <Angry className='h-5 w-5 text-destructive' />,
          iconBg: 'bg-destructive/10 dark:bg-destructive/20',
          border: 'border-destructive/20 dark:border-destructive/30',
          shadow: 'shadow-destructive/5',
        }
      case 'loading':
        return {
          icon: <Loader2 className='h-5 w-5 animate-spin text-muted-foreground' />,
          iconBg: 'bg-muted',
          border: 'border-border',
          shadow: 'shadow-black/5',
        }
      default:
        return {
          icon: <Info className='h-5 w-5 text-info' />,
          iconBg: 'bg-info/10 dark:bg-info/20',
          border: 'border-info/20 dark:border-info/30',
          shadow: 'shadow-info/5',
        }
    }
  }

  const styles = getToastStyles()

  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{
        opacity: t.visible ? 1 : 0,
        y: t.visible ? 0 : -16,
      }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className={cn(
        'pointer-events-auto flex items-center gap-3',
        'min-w-xs max-w-lg rounded-lg border p-4',
        'bg-background/80 backdrop-blur-md dark:bg-card/90 text-foreground',
        'shadow-lg transition-all duration-300',
        styles.border,
        styles.shadow,
      )}
    >
      <div
        className={cn('flex items-center justify-center rounded-lg p-1.5 shrink-0', styles.iconBg)}
      >
        {styles.icon}
      </div>

      <div className='flex-1 text-sm font-medium leading-snug wrap-break-word'>{messageText}</div>

      {t.type !== 'loading' && (
        <Button
          variant='outline'
          size='icon-sm'
          onClick={() => toast.dismiss(t.id)}
          className='shrink-0'
          aria-label='Закрыть уведомление'
        >
          <X className='aspect-square' />
        </Button>
      )}
    </motion.div>
  )
}
