export interface BannerStore {
  dismissBanner: (text: string) => void
  dismissedBannerText: string | null
}
