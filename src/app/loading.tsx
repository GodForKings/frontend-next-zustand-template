import { cn, LoadingDots } from '@/shared'

export default function Loading() {
  return (
    <main
      className={cn(
        'fixed inset-0 z-50',
        'grid place-content-center',
        'bg-background/80 backdrop-blur-md',
      )}
    >
      <LoadingDots size='lg' />
    </main>
  )
}
