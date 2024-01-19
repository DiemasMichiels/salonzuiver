import { HOMEPAGE_UID, PRISMIC_TYPES } from './constants'
import type { FilledContentRelationshipField } from '@prismicio/client'

export const linkResolver = (
  linkToDocumentField: FilledContentRelationshipField,
) => {
  if (linkToDocumentField.isBroken) {
    return '/404'
  }

  if (
    linkToDocumentField.type === PRISMIC_TYPES.DYNAMIC_PAGE &&
    linkToDocumentField.uid !== HOMEPAGE_UID
  ) {
    return `/${linkToDocumentField.uid}`
  }

  return '/'
}
