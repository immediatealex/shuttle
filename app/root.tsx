import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Toaster } from '~/components/ui/toaster';
import type { LinksFunction } from '@remix-run/node';

import mainStylesheetUrl from './styles/main.css';
import tailwindStylesheetUrl from './styles/tailwind.css';

const PREFERS_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const links: LinksFunction = () => [
  { rel: 'icon', href: 'favicon.png' },
  { rel: 'stylesheet', href: mainStylesheetUrl },
  { rel: 'stylesheet', href: tailwindStylesheetUrl },
];

export default function App() {
  return (
    <html suppressHydrationWarning lang="en" className="h-full overflow-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const prefersDarkMode = window.matchMedia(${JSON.stringify(
                PREFERS_DARK_MEDIA_QUERY
              )}).matches
              if (prefersDarkMode) {
                document.documentElement.classList.add('dark')
              }
            `,
          }}
        ></script>
        <Meta />
        <Links />
      </head>
      <body className="h-full dark:bg-zinc-900">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV !== 'production' && <LiveReload />}
        <Toaster />
      </body>
    </html>
  );
}
