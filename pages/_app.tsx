import 'rsuite/dist/rsuite.min.css';
import '../styles/rsuite.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { CustomProvider as RsuiteProvider } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR';
import { NextUIProvider } from '@nextui-org/react';
import { Layout } from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <RsuiteProvider locale={ptBR} theme="light">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RsuiteProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;