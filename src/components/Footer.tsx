import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface FooterProps {
  small?: boolean;
}

const Footer = ({ small = false }: FooterProps): JSX.Element => {
  return (
    <footer className="py-5 small">
      <Container>
        <Row>
          <Col md={6} className="text-md-left">
            <div className="d-flex d-md-inline justify-content-center justify-content-md-start">
              <img
                style={{ maxHeight: '2.5em', borderRadius: '1px' }}
                alt="Logo"
                className="me-0 me-md-4 mb-3 mb-md-0"
                src="/img/logo.png"
              />
            </div>
            <ul className="list-inline mt-auto mb-2 d-flex d-md-inline-block justify-content-center justify-content-md-start">
              <li className="list-inline-item">
                <Link legacyBehavior href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link legacyBehavior href="/terms">
                  <a>Terms & Conditions</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={6} className="d-flex justify-content-center justify-content-md-end my-3 my-md-0">
            <ul className="social-list list-inline d-inline-block m-0">
              <li className="list-inline-item d-inline-block">
                <a href="https://www.instagram.com/emmakirbydesign/" target="_blank" rel="noreferrer">
                  <i className="socicon socicon-instagram icon" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.pinterest.co.uk/emmakirbydesign/" target="_blank" rel="noreferrer">
                  <i className="socicon socicon-pinterest icon" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.houzz.co.uk/professionals/interior-designers/emma-kirby-design-pfvwgb-pf~1703863429"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="socicon socicon-houzz icon" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:enquiries@emmakirbydesign.co.uk" target="_blank" rel="noreferrer">
                  <i className="socicon socicon-mail icon" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className={`mt-4 ${small ? 'd-none' : ''}`}>
          <Col md={6} className="d-flex justify-content-center justify-content-md-start text-center text-md-start">
            <span>
              © {new Date().getFullYear()} Emma Kirby Design
              <span className="d-none d-lg-inline"> | </span>
              <br className="d-lg-none" />
              Designed by <a href="mailto:freddie.erg@outlook.com">Freddie Ergatoudis</a>
            </span>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center justify-content-md-end mt-4 mt-md-0 text-center text-md-end"
          >
            <span>
              The Coach House Studio, Home Farm<span className="d-none d-lg-inline">, </span>
              <br className="d-lg-none" />
              Grafton, Bampton, OX18 2RY
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
