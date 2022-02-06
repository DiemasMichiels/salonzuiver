import Client from './prismic/client'
import { Route } from './prismic/routes'

// What for ugly code is this, this probably needs changing

// @ts-ignore
export const fetchDocs = async (page = 1, routes: Route[] = []) => {
  const response = await Client().query('', { pageSize: 100, lang: '*', page })
  // @ts-ignore
  const allRoutes = routes.concat(response.results)
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes)
  }
  return [...allRoutes]
}

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
 **/
export const queryRepeatableDocuments = async (
  filter?: (...any: any) => any,
) => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(filter)
}
