import Link from 'next/link'

import type { FilledLinkToDocumentField } from '@prismicio/types'

export const HOMEPAGE_UID = 'home'
export const PRISMIC_TYPES = {
  DYNAMIC_PAGE: 'dynamic-page',
}

export const customLink = (
  element: { data: FilledLinkToDocumentField },
  content: string,
  index: number | string,
) => (
  <Link key={index} href={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
)

export const linkResolver = (doc: FilledLinkToDocumentField) => {
  if (doc.isBroken) {
    return '/404'
  }

  if (doc.type === PRISMIC_TYPES.DYNAMIC_PAGE && doc.uid !== HOMEPAGE_UID) {
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
