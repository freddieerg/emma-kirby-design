import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface CoverProps {
  title: string;
  subtitle: JSX.Element;
  image: string;
  flip?: boolean;
}

const Cover = ({ title, subtitle, image, flip }: CoverProps): JSX.Element => {
  return (
    <Container fluid className="d-flex w-auto px-sm-0 cover">
      <Row className="no-gutter">
        <Col className="d-flex cover-img px-0" lg={6} md={{ span: 4, order: flip ? 1 : 0 }}>
          <Image src={image} layout="fill" objectFit="cover" alt="cover-img" />
        </Col>
        <Col
          lg={6}
          md={8}
          className="d-flex flex-column justify-content-center py-5 px-4 px-sm-5"
          style={{ background: '#333' }}
        >
          <h1>{title}</h1>
          <hr className="mx-0" />
          <p style={{ opacity: 0.8, fontSize: '18px' }}>{subtitle}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cover;
