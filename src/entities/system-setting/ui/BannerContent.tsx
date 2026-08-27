import type { FC } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

import { cn } from '@/shared'

interface BannerContentProps {
  text: string
  link?: string | null
}

export const BannerContent: FC<BannerContentProps> = (props) => {
  const { text, link } = props

  if (!link) {
    return (
      <div
        aria-label='Сообщение в баннере'
        className='text-xs sm:text-sm tracking-wide'
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  }

  const isExternal = link.startsWith('http://') || link.startsWith('https://')
  const linkClassName = cn(
    'group flex items-center justify-center gap-2',
    'text-xs sm:text-sm font-medium tracking-wide',
    'w-full',
  )

  const content = (
    <>
      <div dangerouslySetInnerHTML={{ __html: text }} />

      <ExternalLink
        className={cn(
          'shrink-0 size-4 transition duration-300',
          'group-hover:text-muted-foreground group-active:scale-94',
        )}
      />
    </>
  )

  if (isExternal) {
    return (
      <a href={link} target='_blank' rel='noopener noreferrer' className={linkClassName}>
        {content}
      </a>
    )
  }

  return (
    <Link href={link} className={linkClassName}>
      {content}
    </Link>
  )
}
