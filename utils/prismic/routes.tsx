import Link from 'next/link'

import type { PrismicDocument } from '@prismicio/types'

export const PRISMIC_TYPES = {
  DYNAMIC_PAGE: 'dynamic-page',
}

export const customLink = (
  element: { data: PrismicDocument },
  content: string,
  index: number | string,
) => (
  <Link key={index} href={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
)

export const linkResolver = (doc: PrismicDocument) => {
  if (doc.type === PRISMIC_TYPES.DYNAMIC_PAGE) {
    return `/${doc.uid}`
  }
  return '/'
}

export type Route = {
  type: string
  path: string
}

export type RouteResolver = { routes: Route[] }

export const routeResolver = {
  routes: [
    {
      type: PRISMIC_TYPES.DYNAMIC_PAGE,
      path: '/:uid',
    },
  ],
}
