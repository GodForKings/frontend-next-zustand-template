import { ENVIRONMENT_CONFIG, SITE_NAME } from '../../config'
import type {
  SchemaBreadcrumbItem,
  SchemaBreadcrumbList,
  SchemaOrganization,
  SchemaWebSite,
} from './types'

const baseUrl = ENVIRONMENT_CONFIG.SITE_URL

/** Генерация разметки организации и веб-сайта для корневого лейаута */
export const generateOrganizationAndWebSiteJsonLd = (): [SchemaOrganization, SchemaWebSite] => {
  const organization: SchemaOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: baseUrl,
    logo: `${baseUrl}/images/og-image.png`,
  }

  const website: SchemaWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return [organization, website]
}

/** Генерация разметки навигационной цепочки хлебных крошек */
export const generateBreadcrumbsJsonLd = (items: SchemaBreadcrumbItem[]): SchemaBreadcrumbList => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const fullUrl = item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: fullUrl,
      }
    }),
  }
}
