export interface SchemaOrganization {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo?: string
  sameAs?: string[]
}

export interface SchemaWebSite {
  '@context': 'https://schema.org'
  '@type': 'WebSite'
  name: string
  url: string
  potentialAction?: {
    '@type': 'SearchAction'
    target: string
    'query-input': string
  }
}

export interface SchemaBreadcrumbItem {
  name: string
  url: string
}

export interface SchemaBreadcrumbList {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }>
}

export type SchemaJsonLdData =
  | SchemaOrganization
  | SchemaWebSite
  | SchemaBreadcrumbList
  | Array<SchemaOrganization | SchemaWebSite | SchemaBreadcrumbList>
