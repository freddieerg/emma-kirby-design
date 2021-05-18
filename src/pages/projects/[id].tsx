import { GetStaticPaths, GetStaticProps } from 'next';

import { Parallax } from 'react-parallax';
import { Gallery, Item } from 'react-photoswipe-gallery';

import ProjectClass, { projects } from '../../data/projects';

import fs from 'fs';
import sizeOf from 'image-size';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MutableRefObject } from 'react';

interface ProjectPropsImage {
  src: string;
  meta: {
    height: number;
    width: number;
    type: string;
  };
}

interface ProjectProps {
  project: ProjectClass;
  images: ProjectPropsImage[];
}

const Project = ({ project, images }: ProjectProps): JSX.Element => {
  return (
    <>
      <section>
        <Parallax
          className="mx-sm-n3"
          bgImage={`/img/projects/${project.id}/${project.thumbnail}`}
          bgImageAlt="the dog"
          strength={100}
          bgImageStyle={{ bottom: '-20%' }}
        >
          <div
            className="d-flex text-center justify-content-center align-items-center flex-column"
            style={{ height: '500px', background: 'rgba(16,16,16,0.7)' }}
          >
            <h1>{project.title}</h1>
            <h4>{project.subtitle}</h4>
          </div>
        </Parallax>
      </section>
      <section className="mt-5">
        <Container>
          <h2>About the Project</h2>
          <hr />
          <p style={{ lineHeight: 1.5, fontSize: 18, whiteSpace: 'pre-wrap' }}>{project.description}</p>
        </Container>
      </section>
      <section className="mt-5">
        <Container>
          <h2>Gallery</h2>
          <hr />
          <Row>
            <Gallery options={{ showAnimationDuration: 0, hideAnimationDuration: 0 }}>
              {images.map(({ src, meta }) => (
                <Item
                  key={src}
                  original={`/img/projects/${project.id}/${src}`}
                  width={meta.width}
                  height={meta.height}
                  thumbnail={`/img/projects/${project.id}/${src}`}
                >
                  {({ ref, open }) => (
                    <Col
                      md={6}
                      lg={4}
                      ref={ref as MutableRefObject<HTMLInputElement>}
                      onClick={open}
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        className="rounded my-3"
                        style={{
                          width: '100%',
                          paddingTop: '80%',
                          background: `url("/img/projects/${project.id}/${src}") no-repeat center center`,
                          backgroundSize: 'cover',
                        }}
                      />
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
  const paths = projects.map(({ id }) => `/projects/${id}`);
  return { paths, fallback: false };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((project) => project.id === params.id);
  const imageDirs = await fs.promises.readdir(`public/img/projects/${project.id}`);

  const images = imageDirs.map((image) => ({
    src: image,
    meta: sizeOf(`public/img/projects/${project.id}/${image}`),
  }));

  return {
    props: { project: JSON.parse(JSON.stringify(project)), images },
  };
};

export default Project;
export { getStaticPaths, getStaticProps };
