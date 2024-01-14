import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './Menu';

const EKDNavbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setShowMenu(false));
    return () => {
      router.events.off('routeChangeStart', () => setShowMenu(false));
    };
  }, [router.events, showMenu]);

  return (
    <>
      <Menu show={showMenu} onHide={() => setShowMenu(false)} />
      <Container fluid className="pb-3" style={{ zIndex: 10000 }}>
        <Row>
          <Col xs={{ span: 3, order: 0 }} sm={{ span: 2, order: 0 }} className="d-flex align-items-center">
            <Link legacyBehavior href="/">
              <a>
                <img
                  className="hover-brighten"
                  src="/img/logo.png"
                  style={{ width: '50px', borderRadius: '1px' }}
                  alt="Emma Kirby Design Logo"
                />
              </a>
            </Link>
          </Col>
          <Col xs={{ span: 6, order: 1 }} className="d-sm-none d-flex align-items-center justify-content-center">
            <ul className="social-list list-inline text-muted mb-0">
              <li className="list-inline-item">
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
          <Col sm={8} className="d-none d-sm-flex justify-content-center align-items-center">
            <Link legacyBehavior href="/">
              <a>
                <h3 style={{ marginBottom: '0' }} className="fw-bold hover-brighten text-center">
                  <span style={{ fontSize: '30px' }}>E</span>mma
                  <span style={{ fontSize: '30px' }}> K</span>irby
                  <span style={{ fontSize: '30px' }}> D</span>esign
                </h3>
              </a>
            </Link>
          </Col>
          <Col xs={{ span: 3, order: 2 }} sm={2} className="d-flex align-items-center justify-content-end">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={`d-flex align-items-center pb-2 pl-2 pt-2 hamburger hamburger--spin-r ${
                showMenu ? 'is-active' : ''
              }`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EKDNavbar;
