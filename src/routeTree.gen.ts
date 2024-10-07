/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const InputsLazyImport = createFileRoute('/inputs')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const InputsLazyRoute = InputsLazyImport.update({
  path: '/inputs',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/inputs.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/inputs': {
      id: '/inputs'
      path: '/inputs'
      fullPath: '/inputs'
      preLoaderRoute: typeof InputsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/inputs': typeof InputsLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/inputs': typeof InputsLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/inputs': typeof InputsLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/inputs'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/inputs'
  id: '__root__' | '/' | '/inputs'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  InputsLazyRoute: typeof InputsLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  InputsLazyRoute: InputsLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/inputs"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/inputs": {
      "filePath": "inputs.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
