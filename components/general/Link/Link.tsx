import { default as NextLink } from 'next/link'
import { linkResolver } from '@utils/prismic/routes'
import type {
  FilledLinkToDocumentField,
  FilledLinkToWebField,
  LinkField,
} from '@prismicio/types'
import type { ReactNode } from 'react'

type Props = {
  href: LinkField | string
  children: ReactNode
  target?: '_blank' | string
  className?: string
}

const Link = ({ href, children, target, className }: Props) => {
  let actualHref = '#'
  let actualTarget = target

  if (typeof href === 'string') {
    actualHref = href
  } else if ((href as FilledLinkToDocumentField).uid !== undefined) {
    actualHref = linkResolver(href as FilledLinkToDocumentField)
  } else if ((href as FilledLinkToWebField).url !== undefined) {
    actualHref = (href as FilledLinkToWebField).url
    actualTarget = (href as FilledLinkToWebField).target
  }

  return (
    <NextLink href={actualHref}>
      <a
        className={className}
        target={actualTarget}
        rel={actualTarget === '_blank' ? 'noreferrer noopener' : undefined}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
