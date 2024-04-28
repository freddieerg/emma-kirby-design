import Cover from "../components/Cover";
import Quote from "../components/Quote";
import { GetStaticProps } from "next";
import { getCMSWhatWeDoPage } from "../utils/cms";
import { GetValue } from "../../strapi-types/types";
import type { Attribute } from "@strapi/strapi";

interface WhatWeDoPageProps {
  cover: GetValue<Attribute.Component<"components.cover">>;
  content: GetValue<Attribute.DynamicZone<["components.quote", "components.cover"]>>;
}

const WhatWeDoPage = ({ cover, content }: WhatWeDoPageProps): JSX.Element => {
  const contentCover = content.map((comp) => {
    switch (comp.__component) {
      case "components.cover":
        return (
          <Cover
            title={comp.title}
            subtitle={<>{comp.subtitle}</>}
            image={process.env.NEXT_PUBLIC_CMS_URL + comp.coverImage.data.attributes?.url}
            flip={comp.flipped}
          />
        );
      case "components.quote":
        return <Quote quote={comp.quote} author={comp.author} subtitle={comp.subtitle} />;
    }
  });

  return (
    <>
      <Cover
        title={cover.title}
        subtitle={<>{cover.subtitle}</>}
        image={process.env.NEXT_PUBLIC_CMS_URL + cover.coverImage.data.attributes?.url}
      />
      {contentCover}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homePage = await getCMSWhatWeDoPage();
  const { cover, content } = homePage.data.attributes;

  return {
    props: {
      cover,
      content,
    },
  };
};

export default WhatWeDoPage;
