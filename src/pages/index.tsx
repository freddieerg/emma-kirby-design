import Container from "react-bootstrap/Container";
import { GetStaticProps } from "next";
import { getCMSHomePage } from "../utils/cms";
import Image from "next/image";
import { GetValue } from "../../strapi-types/types";
import type { Attribute } from "@strapi/strapi";

interface HomePageProps {
  carousel: GetValue<Attribute.Media<"images", true>>["data"];
}

const HomePage = ({ carousel }: HomePageProps): React.JSX.Element => {
  const img = carousel[Math.floor(Math.random() * carousel.length)];

  return (
    <Container fluid className="d-flex" style={{ marginBottom: "15px" }}>
      <div className="d-flex flex-grow-1 rounded bg-image position-relative overflow-hidden">
        <Image src={process.env.NEXT_PUBLIC_CMS_URL + img.attributes.url} alt="cover" fill objectFit="cover" />
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homePage = await getCMSHomePage();
  const { carousel } = homePage.data.attributes;

  return {
    props: {
      carousel: carousel.data,
    },
  };
};

export default HomePage;
