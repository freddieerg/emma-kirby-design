import Cover from '../components/Cover';
import Person from '../components/Person';
import { GetStaticProps } from 'next';
import { ContentTypeBase, getCMSAboutUsPage, getCMSTeamMembers, TeamMember } from '../utils/cms';
import { GetValue } from '../../strapi-types/types';
import type { Attribute } from '@strapi/strapi';

interface AboutUsPageProps {
  cover: GetValue<Attribute.Component<'components.cover'>>;
  teamMembers: ContentTypeBase<TeamMember>[];
}

const AboutUsPage = ({ cover, teamMembers }: AboutUsPageProps): JSX.Element => {
  return (
    <>
      <Cover
        title={cover.title}
        subtitle={<>{cover.subtitle}</>}
        image={process.env.NEXT_PUBLIC_CMS_URL + cover.coverImage.data.attributes?.url}
      />
      <section className="pt-4 pt-md-5 mt-md-5">
        {teamMembers.map((tm) => (
          <Person
            key={tm.id}
            name={tm.attributes.name}
            position={tm.attributes.role}
            description={tm.attributes.description}
            image={process.env.NEXT_PUBLIC_CMS_URL + tm.attributes.photo.data.attributes.url}
            socials={{
              mail: tm.attributes.email,
              instagram: tm.attributes.instagram,
              pinterest: tm.attributes.pinterest,
              twitter: tm.attributes.twitter,
            }}
          />
        ))}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const aboutUs = await getCMSAboutUsPage();
  const teamMembers = await getCMSTeamMembers();

  const { cover } = aboutUs.data.attributes;

  return {
    props: {
      cover,
      teamMembers: teamMembers.data,
    },
  };
};

export default AboutUsPage;
