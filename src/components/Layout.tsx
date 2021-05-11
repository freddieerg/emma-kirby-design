import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <div className="d-flex flex-column pt-3 p-sm-3" style={{ minHeight: '100vh' }}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          />
          <title>Emma Kirby Design</title>
        </Head>
        <Navbar />
        <main className={`${router.pathname === '/' ? 'd-flex flex-grow-1' : ''}`}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
