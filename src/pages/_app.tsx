import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RootLayout } from 'modules/layouts';
import { type AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { STAGES, env } from 'shared/constants/environments';
import '../../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: unknown }>) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retryDelay: 1250,
            staleTime: 1000 * 60 * 10,
          },
        },
      })
  );

  return (
    <React.Fragment>
      <Head>
        <title>bossROD TV | CLI - Create App</title>

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* <!--  Primary --> */}
        <meta name="title" content="bossROD TV | CLI - Create App" />
        <meta
          name="description"
          content="Introducing bossROD TV's versatile CLI tool, simplifying the process of creating cutting-edge applications like Next.js, React, and Serverless Framework. Benefit from built-in TypeScript, ESLint, Prettier, and more, as you streamline your development experience with this powerful, user-friendly command-line interface crafted by a passionate Pinoy programmer behind bossROD TV."
        />
        <meta name="application_name" content="bossROD TV | CLI - Create App" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="bossROD TV | CLI - Create App" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="bossROD TV | CLI - Create App" />
        <meta property="og:url" content="https://create.bossrod.tv" />
        <meta property="og:image" content="https://create.bossrod.tv/banner.png" />
        <meta
          property="og:description"
          content="Introducing bossROD TV's versatile CLI tool, simplifying the process of creating cutting-edge applications like Next.js, React, and Serverless Framework. Benefit from built-in TypeScript, ESLint, Prettier, and more, as you streamline your development experience with this powerful, user-friendly command-line interface crafted by a passionate Pinoy programmer behind bossROD TV."
        />

        {/* <!--  Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="banner_description" />

        {/* <!--  For Analytics --> */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@username" />

        {/* <!--  Favicon --> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
          {env.STAGE === STAGES.Dev && <ReactQueryDevtools initialIsOpen={false} />}
        </Hydrate>
      </QueryClientProvider>
    </React.Fragment>
  );
}
