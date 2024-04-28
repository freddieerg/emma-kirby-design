import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const title = (): string => {
    let title;
    const id: string = router.query.id as string;

    id ? (title = id) : (title = router.pathname.split("/").pop());

    title = title.split("-").join(" ");
    title = title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
    title = title ? title + " · Emma Kirby Design" : "Emma Kirby Design";

    return title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  };

  return (
    <>
      <div className="d-flex flex-column pt-3 p-sm-3" style={{ minHeight: "100vh" }}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          />
          <link rel="icon" type="image/png" href="/icons/favicon.png" />
          <title>{title()}</title>
          <meta
            name="description"
            content="Design Studio based in Oxfordshire offering Interior Design, Architectural Design, Bespoke Furniture Design, Development Consultancy, Project Management."
          />
        </Head>
        <Navbar />
        <main className={`${router.pathname === "/" ? "d-flex flex-grow-1" : ""}`}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
