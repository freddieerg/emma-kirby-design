import { GetStaticPaths, GetStaticProps } from 'next';
import { Background, Parallax } from 'react-parallax';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { ContentTypeBase, getCMSProject, getCMSProjects, Project } from '../../utils/cms';

interface ProjectPageProps {
  project: ContentTypeBase<Project>;
}

const ProjectPage = ({ project }: ProjectPageProps): JSX.Element => {
  return (
    <>
      <section>
        <Parallax className="mx-sm-n3" strength={100} style={{ height: '75vh' }}>
          <Background>
            <div className="d-flex" style={{ height: '80vh', width: '100vw' }}>
              <Image
                src={`${process.env.NEXT_PUBLIC_CMS_URL}${project.attributes.thumbnail.data.attributes.url}`}
                alt={project.attributes.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Background>
          <div
            className="d-flex text-center justify-content-center align-items-center flex-column"
            style={{ height: '75vh', background: 'rgba(16,16,16,0.7)' }}
          >
            <h1>{project.attributes.title}</h1>
            <h4>{project.attributes.subtitle}</h4>
          </div>
        </Parallax>
      </section>
      {project.attributes.about && (
        <section className="mt-5">
          <Container>
            <h2>About the Project</h2>
            <hr />
            <p style={{ lineHeight: 1.5, fontSize: 18, whiteSpace: 'pre-wrap' }}>{project.attributes.about}</p>
          </Container>
        </section>
      )}
      <section className="mt-5">
        <Container>
          <h2>Gallery</h2>
          <hr />
          <Row>
            <Gallery options={{ showAnimationDuration: 0, hideAnimationDuration: 0, bgOpacity: 1 }}>
              {project.attributes.gallery.data.map((image) => (
                <Item
                  key={image.attributes.url}
                  height={image.attributes.height}
                  width={image.attributes.width}
                  original={`${process.env.NEXT_PUBLIC_CMS_URL}${image.attributes.url}`}
                >
                  {({ ref, open }) => (
                    <Col md={6} lg={4} ref={ref} onClick={open} style={{ cursor: 'pointer' }}>
                      <div
                        className="rounded my-3 project-img position-relative overflow-hidden"
                        style={{
                          width: '100%',
                          paddingTop: '80%',
                        }}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CMS_URL}${image.attributes.url}`}
                          alt={project.attributes.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(min-width: 808px) 50vw, 100vw"
                        />
                      </div>
                    </Col>
                  )}
                </Item>
              ))}
            </Gallery>
          </Row>
        </Container>
      </section>
    </>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getCMSProjects();
  const paths = projects.data.map((project) => `/projects/${project.attributes.projectId}`);
  return { paths, fallback: false };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getCMSProject(params.id as string);

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
export { getStaticPaths, getStaticProps };
