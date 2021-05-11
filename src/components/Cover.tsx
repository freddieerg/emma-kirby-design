import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface CoverProps {
  title: string;
  subtitle: string;
  image: string;
}

const Cover = ({ title, subtitle, image }: CoverProps): JSX.Element => {
  return (
    <Container fluid className="w-auto p-0 cover">
      <Row className="no-gutter h-100">
        <Col
          className="d-flex cover-img"
          lg={5}
          md={4}
          style={{
            background:
              'url("https://emmakirbydesign.co.uk/static/img/projects/winter-and-summer-barns-with-pool/y7k8dvwj.jpg") no-repeat center center',
            backgroundSize: 'cover',
          }}
        />
        <Col lg={7} md={8} className="d-flex flex-column justify-content-center p-5" style={{ background: '#333' }}>
          <h2>{title}</h2>
          <hr className="mx-0" />
          <p>{subtitle}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cover;
