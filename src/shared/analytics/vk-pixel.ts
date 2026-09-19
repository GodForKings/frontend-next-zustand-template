import { ENVIRONMENT_CONFIG } from '../config/environment'
import { isBrowser } from '../utils'

export const getVkPixelId = (): string | null => {
  const rawId = ENVIRONMENT_CONFIG.VK_PIXEL_ID?.trim()
  return rawId ? rawId : null
}

export const vkHit = (): void => {
  if (!isBrowser()) return
  if (typeof window.VK?.Retargeting?.Hit === 'function') {
    window.VK.Retargeting.Hit()
  }
}

export const trackVkEvent = (eventName: string): void => {
  if (!isBrowser()) return
  if (typeof window.VK?.Retargeting?.Event === 'function') {
    window.VK.Retargeting.Event(eventName)
  }
}
