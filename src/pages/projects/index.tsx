import Link from 'next/link';
import Cover from '../../components/Cover';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { ContentTypeBase, getCMSProjects, Project } from '../../utils/cms';

const Projects = ({ projects }: { projects: ContentTypeBase<Project>[] }): JSX.Element => {
  const projectMap = projects.map((project) => (
    <Col md={4} key={project.attributes.projectId} className="text-center mb-4">
      <Link className="position-relative" legacyBehavior href={`projects/${project.attributes.projectId}`}>
        <a>
          <div
            className="rounded mb-4 shadow img-link position-relative overflow-hidden"
            style={{
              width: '100%',
              paddingTop: '56.25%',
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CMS_URL}${project.attributes.thumbnail.data.attributes.url}`}
              fill
              objectFit="cover"
              alt={project.attributes.title}
            />
          </div>
        </a>
      </Link>
      <div className="mx-5">
        <h5>{project.attributes.title}</h5>
        <p className="text-muted">{project.attributes.subtitle}</p>
      </div>
    </Col>
  ));

  return (
    <>
      <section>
        <Cover
          title="Projects"
          subtitle={
            <>
              Below is just a sample of some EKD projects. Interiors, new builds, extensions, renovations, conversions,
              pools and potting sheds. A taste of what we do.
            </>
          }
          image="/img/projects/listed-village-house-extension-and-pool/rbbqkM-X.jpeg"
        />
      </section>
      <section className="pt-4 pt-md-5 mt-n4 mt-md-0">
        <Container className="mt-5 p-md-5 p-0 px-4" fluid>
          <Row>{projectMap}</Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getCMSProjects();

  return {
    props: {
      projects: projects.data,
    },
  };
};
