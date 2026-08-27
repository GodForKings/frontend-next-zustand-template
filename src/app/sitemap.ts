import type { MetadataRoute } from 'next'

import { ENVIRONMENT_CONFIG } from '@/shared'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = ENVIRONMENT_CONFIG.SITE_URL

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Динамические маршруты сущностей проекта добавляются здесь
  ]
}
