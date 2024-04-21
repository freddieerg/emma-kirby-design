import Cover from '../components/Cover';
import Person from '../components/Person';
import { GetStaticProps } from 'next';
import { ContentTypeBase, getCMSTeamMembers, TeamMember } from '../utils/cms';

interface AboutUsPageProps {
  teamMembers: ContentTypeBase<TeamMember>[];
}

const AboutUsPage = ({ teamMembers }: AboutUsPageProps): JSX.Element => {
  return (
    <>
      <Cover
        title="About Us"
        subtitle={
          <>
            At Emma Kirby Design, we help our clients with every stage of creating their home, ensuring that it is
            perfectly suited to their lifestyle demands.
          </>
        }
        image="/img/misc/studio.jpeg"
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
  const teamMembers = await getCMSTeamMembers();

  console.log(teamMembers);

  return {
    props: {
      teamMembers: teamMembers.data,
    },
  };
};

export default AboutUsPage;
