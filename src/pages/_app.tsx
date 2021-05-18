import type { AppProps } from 'next/app';

import Layout from '../components/Layout';

import NextNprogress from 'nextjs-progressbar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'socicon/css/socicon.css';
import '../scss/style.scss';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <NextNprogress
        color="#B4B0A6"
        startPosition={0.3}
        stopDelayMs={300}
        height={2}
        options={{ showSpinner: false }}
      />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
