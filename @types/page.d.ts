import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement, pageProps?: {}) => ReactNode
}
