import type { FC } from 'react'

import type { SchemaJsonLdData } from './types'

interface JsonLdProps {
  data: SchemaJsonLdData
}

export const JsonLd: FC<JsonLdProps> = (props) => {
  const { data } = props

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}
