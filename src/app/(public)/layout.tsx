import type { PropsWithChildren } from 'react'

export default function PublicLayout({ children }: PropsWithChildren) {
  return <div className='flex min-h-dvh flex-col bg-background'>{children}</div>
}
