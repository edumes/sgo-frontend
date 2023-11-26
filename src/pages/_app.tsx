import 'rsuite/dist/rsuite.min.css';
import '../styles/rsuite.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import RsuiteThemeProvider from '../components/provider/RsuiteThemeProvider';
import { Layout } from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider locale='pt-BR'>
        <RsuiteThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RsuiteThemeProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;