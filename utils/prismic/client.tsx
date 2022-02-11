import Prismic from '@prismicio/client'
import { routeResolver, RouteResolver } from './routes'
import type { ApiOptions } from '@prismicio/client/types/Api'

const createClientOptions = (
  req: ApiOptions['req'] = undefined,
  accessToken: ApiOptions['accessToken'] = undefined,
  routeResolver: RouteResolver | undefined = undefined,
) => {
  const options: ApiOptions = {}
  if (req) options.req = req
  if (accessToken) options.accessToken = accessToken
  if (routeResolver) options.routes = routeResolver.routes
  return options
}

// Prismic Client
export const Client = (req?: ApiOptions['req']) =>
  Prismic.client(
    process.env.PRISMIC_API_END_POINT ?? '',
    createClientOptions(req, process.env.PRISMIC_ACCESS_TOKEN, routeResolver),
  )

export default Client
