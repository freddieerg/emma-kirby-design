import { useState } from 'react';
import Cover from '../components/Cover';
import Button from 'react-bootstrap/Button';
import Message from '../components/Message';
import { GetStaticProps } from 'next';
import { getCMSContactUsPage } from '../utils/cms';
import { GetValue } from '../../strapi-types/types';
import type { Attribute } from '@strapi/strapi';

interface ContactUsPageProps {
  cover: GetValue<Attribute.Component<'components.cover'>>;
}

const ContactUs = ({ cover }: ContactUsPageProps): JSX.Element => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Cover
        title={cover.title}
        subtitle={
          <>
            <>{cover.subtitle}</>
            <div>
              <Button className="mt-3" variant="outline-primary" onClick={() => setShow(true)}>
                Send Us a Message
              </Button>
            </div>
          </>
        }
        image={process.env.NEXT_PUBLIC_CMS_URL + cover.coverImage.data.attributes.url}
      />
      <section className="pt-5">
        <Message show={show} onHide={() => setShow(false)} />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contactUs = await getCMSContactUsPage();
  const { cover } = contactUs.data.attributes;

  return {
    props: {
      cover,
    },
  };
};

export default ContactUs;
