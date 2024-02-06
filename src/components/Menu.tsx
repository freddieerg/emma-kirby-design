import Link from 'next/link';

import Modal from 'react-bootstrap/Modal';

interface MenuProps {
  show: boolean;
  onHide(): void;
}

const Menu = ({ show, onHide }: MenuProps): JSX.Element => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-fullscreen"
      contentClassName="border-0 modal-bg-dark pt-5"
    >
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <ul className="list-inline d-inline-block text-center h3 py-4">
          <Link legacyBehavior href="/">
            <a>
              <li className="py-1">Home</li>
            </a>
          </Link>
          <Link legacyBehavior href="/about-us">
            <a>
              <li className="py-1">About Us</li>
            </a>
          </Link>
          <Link legacyBehavior href="/what-we-do">
            <a>
              <li className="py-1">What We Do</li>
            </a>
          </Link>
          <Link legacyBehavior href="/projects">
            <a>
              <li className="py-1">Projects</li>
            </a>
          </Link>
          <Link legacyBehavior href="/contact-us">
            <a>
              <li className="py-1">Contact Us</li>
            </a>
          </Link>
        </ul>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center text-center">
        <p className="small">
          <span className="h5">
            <Link legacyBehavior href="/privacy">
              <a>Privacy Policy</a>
            </Link>{' '}
            ·{' '}
            <Link legacyBehavior href="/terms">
              <a>Terms & Conditions</a>
            </Link>
          </span>
          <div className="mt-3">© {new Date().getFullYear()} Emma Kirby Design</div>
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default Menu;
