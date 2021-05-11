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
      style={{ background: 'rgb(18,18,18)' }}
      dialogClassName="modal-fullscreen"
      contentClassName="bg-transparent border-0 h-100 pt-5"
    >
      <Modal.Body className="d-flex justify-content-center align-items-center">
        <ul className="list-inline d-inline-block text-center h3 py-4">
          <Link href="/">
            <a>
              <li className="py-1">Home</li>
            </a>
          </Link>
          <Link href="/about-us">
            <a>
              <li className="py-1">About Us</li>
            </a>
          </Link>
          <li className="py-1">What We Do</li>
          <li className="py-1">Projects</li>
          <li className="py-1">Contact Us</li>
        </ul>
      </Modal.Body>
      <Modal.Footer className="border-0 justify-content-center text-center">
        <p className="text-muted small">
          <span className="h5">Terms & Conditions · Privacy Policy</span>
          <br />© 2021 Emma Kirby Design | Designed by Freddie Ergatoudis
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default Menu;
