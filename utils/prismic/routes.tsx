import Link from 'next/link'
import { HOMEPAGE_UID, PRISMIC_TYPES } from './constants'

import type { FilledLinkToDocumentField } from '@prismicio/types'
import type { Elements, HTMLSerializer } from 'prismic-reactjs'
import type { ReactNode } from 'react'

export const CustomLink: HTMLSerializer<ReactNode> = (
  type: Elements,
  element: { data: FilledLinkToDocumentField },
  content: string,
  children: ReactNode[],
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
