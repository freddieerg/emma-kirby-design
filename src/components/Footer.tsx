import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface FooterProps {
  small?: boolean;
}

const Footer = ({ small = false }: FooterProps): JSX.Element => {
  return (
    <footer className="py-5 px-5 small">
      <div className="d-flex align-items-center flex-column flex-lg-row">
        <Container>
          <Row>
            <Col lg={6} className="text-lg-left">
              <div className="d-flex d-lg-inline justify-content-center justify-content-lg-start">
                <img
                  style={{ maxHeight: "2.5em", borderRadius: "1px" }}
                  alt="Logo"
                  className="me-0 me-lg-4 mb-3 mb-lg-0"
                  src="/img/logo.png"
                />
              </div>
              <ul className="list-inline mt-auto mb-2 d-flex d-lg-inline-block justify-content-center justify-content-lg-start">
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
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center justify-content-lg-end my-3 my-lg-0"
            >
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
          <Row className={`mt-4 ${small ? "d-none" : ""}`}>
            <Col lg={6} className="d-flex justify-content-center justify-content-lg-start text-center text-lg-start">
              <span>
                © {new Date().getFullYear()} Emma Kirby Design
                <span className="d-none d-lg-inline"> | </span>
                <br className="d-lg-none" />
                Designed by <a href="mailto:freddie.erg@outlook.com">Freddie Ergatoudis</a>
              </span>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0 text-center text-lg-end"
            >
              <span>
                The Coach House Studio, Home Farm<span className="d-none d-lg-inline">, </span>
                <br className="d-lg-none" />
                Grafton, Bampton, OX18 2RY
              </span>
            </Col>
          </Row>
        </Container>
        <a
          href="https://thelist.houseandgarden.com/united-kingdom/grafton-oxfordshire/service/emma-kirby-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cms.emmakirbydesign.co.uk/uploads/The_List_Featured_Designer_2024_48932c3732.png"
            style={{ height: 100 }}
            alt="The List: House & Garden 2024 Featured Designer"
            className="mt-4 mt-lg-0 ms-lg-3"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
