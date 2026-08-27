import type { MetadataRoute } from 'next'

import { ENVIRONMENT_CONFIG } from '@/shared'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = ENVIRONMENT_CONFIG.SITE_URL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/profile/', '/login', '/registration', '/reset-password', '/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
