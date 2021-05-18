import Link from 'next/link';

import Cover from '../../components/Cover';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { projects } from '../../data/projects';

const Projects = (): JSX.Element => {
  const projectMap = projects.map((project) => (
    <Col md={6} key={project.id} className="text-center mb-4">
      <Link href={`projects/${project.id}`}>
        <a>
          <div
            className="rounded mb-4 shadow img-link"
            style={{
              width: '100%',
              paddingTop: '56.25%',
              background: `url("img/projects/${project.id}/${project.thumbnail}") no-repeat center center`,
              backgroundSize: 'cover',
            }}
          />
        </a>
      </Link>
      <h5>{project.title}</h5>
      <p className="text-muted">{project.subtitle}</p>
    </Col>
  ));

  return (
    <>
      <section className="pb-5">
        <Cover
          title="Projects"
          subtitle={
            <>
              Below is just a sample of some EKD projects. Interiors, new builds, extensions, renovations, conversions,
              pools and potting sheds. A taste of what we do.
            </>
          }
          image="img/projects/listed-village-house-extension-and-pool/rbbqkM-X.jpeg"
        />
      </section>
      <section>
        <Container className="mt-5">
          <Row>{projectMap}</Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
