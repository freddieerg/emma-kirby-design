import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface PersonProps {
  name: string;
  position: string;
  description: string;
  image: string;
  socials?: Record<string, string>;
}

const socialBase = {
  mail: 'mailto:',
  instagram: 'https://instagram.com/',
  pinterest: 'https://www.pinterest.co.uk/',
  twitter: 'https://twitter.com/',
};

const Person = ({ name, position, description, image, socials = {} }: PersonProps): JSX.Element => {
  const social = Object.entries(socials).map(
    ([type, url]) =>
      url && (
        <li className="list-inline-item d-inline-block" key={type}>
          <a href={socialBase[type] + url} target="_blank" rel="noreferrer">
            <i className={`socicon socicon-${type} icon`} />
          </a>
        </li>
      ),
  );

  return (
    <Container className="mb-5">
      <Row>
        <Col md={{ span: 6, order: 2 }} className="mb-5 mb-md-0">
          <img alt="About Us" className="rounded" style={{ maxWidth: '100%' }} src={image} />
        </Col>
        <Col md={{ span: 6, order: 1 }} className="pr-md-4 pr-lg-5">
          <div className="position-sticky" style={{ top: 50 }}>
            <h2>{name}</h2>
            <p className="text-muted">{position}</p>
            <p className="text-justify">{description}</p>
            <ul className="social-list list-inline text-muted d-inline-block m-0 mt-2">{social}</ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Person;
