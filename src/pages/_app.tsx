import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import 'photoswipe/dist/photoswipe.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'socicon/css/socicon.css';
import '../scss/style.scss';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';

const App = ({ Component, pageProps }: AppProps): React.JSX.Element => {
  return (
    <>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
};

export default App;
