import Cover from '../components/Cover';
import Person from '../components/Person';
import { GetStaticProps } from 'next';
import { ContentTypeBase, getCMSTeamMembers, Project, TeamMember } from '../utils/cms';

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
        <Person
          name="Emma Kirby"
          position="Design Director"
          description={
            'Emma started the interiors side of the business over 15 years ago. A passion for houses inherited from her property developing mother, Emma’s earliest memories were of accompanying her to fabric houses and reclamation yards. "I loved watching the transformation of a run down house into a warm, light-filled home. I found it magical. The excitement of that process and the desire to bring out the best of a house remains at the heart of everything we do at Emma Kirby Design."'
          }
          image="/img/people/emma.jpeg"
          socials={{
            mail: 'mailto:emma@emmakirbydesign.co.uk',
            instagram: 'https://instagram.com/emmakirbydesign',
            pinterest: 'https://www.pinterest.co.uk/emmakirbydesign/',
          }}
        />
        <Person
          name="Michael Ergatoudis"
          position="Development Director"
          description={
            "Michael has over 25 years experience directing the design and development of projects in the residential and commercial sector; from extensions and renovations, traditional and contemporary new homes and barn conversions, to hotels and private members clubs. Michael's expertise is in assembling and managing the right team to suit the scale, scope and ambition of the project, maximising planning gain and optimising cost efficiency and build quality."
          }
          image="/img/people/michael.jpeg"
          socials={{ mail: 'mailto:michael@emmakirbydesign.co.uk', twitter: 'https://twitter.com/holmesmike' }}
        />
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
