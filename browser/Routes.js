import React from 'react'
import { useRoutes } from 'hookrouter'
import { IndexPage } from './IndexPage'
import { NotFound } from './NotFound'

const routes = {
  '/': () => <IndexPage />
}

export const Routes = () => {
  const routeResult = useRoutes(routes)

  return routeResult || <NotFound />
}
