import { useState } from 'react';

import Cover from '../components/Cover';

import Button from 'react-bootstrap/Button';

import Message from '../components/Message';

const ContactUs = (): JSX.Element => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Cover
        title="Contact Us"
        subtitle={
          <>
            e: enquiries@emmakirbydesign.co.uk
            <br />
            t: +44 13 6781 0575
            <br />
            <br />
            The Coach House Studio
            <br />
            Home Farm, Grafton
            <br />
            Bampton, Oxfordshire
            <br />
            OX18 2RY
            <br />
            <br />
            <Button variant="outline-primary" onClick={() => setShow(true)}>
              Send Us a Message
            </Button>
          </>
        }
        image="img/projects/listed-village-house-extension-and-pool/z-QAOZ4B.jpeg"
      />
      <section className="pt-5">
        <Message show={show} onHide={() => setShow(false)} />
      </section>
    </>
  );
};

export default ContactUs;
