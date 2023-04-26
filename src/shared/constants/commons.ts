export const ROUTES = {
  SAMPLES: '/samples',
  CSR: '/csr',
  SSR: '/ssr',
  SSG: '/ssg',
  TODOS: '/todos',

  LOGIN: '/login',

  HOME: '/',
  ABOUT: '/about',
} as const;

export const isServer = typeof window === 'undefined';

export const DEFAULT_ASSET_DOMAIN = '/assets' as const;

/**
 * *Increment this version number when you update the production assets.
 */
export const DEFAULT_ASSET_VERSION = '1.0.0' as const;
