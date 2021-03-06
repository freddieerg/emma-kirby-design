import { useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

interface MessageProps {
  show: boolean;
  onHide(): void;
}

interface MessageForm {
  name: string;
  email: string;
  tel: string;
  subject: string;
  message: string;
}

const Message = ({ show, onHide }: MessageProps): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

  const onSubmit = async (data: MessageForm): Promise<void> => {
    setIsSubmitting(true);
    const r = await axios.post('/api/message', data);
    if (r.status === 200) {
      reset();
      setHasSubmit(true);
      setIsSubmitting(false);
    }
  };

  const handleModalHide = (): void => {
    onHide();
    setTimeout(() => setHasSubmit(false), 500);
  };

  return (
    <>
      <Modal
        style={{ zIndex: 10000000000 }}
        show={show}
        onHide={onHide}
        size="lg"
        dialogClassName="modal-fullscreen"
        contentClassName="modal-bg-dark border-0"
      >
        <Modal.Body className="p-0 d-flex align-items-center">
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                <div className={`${hasSubmit ? '' : 'd-none'}`}>
                  <h5>
                    Thanks,
                    <br />
                    <br />
                    We've got your message and a member of our team will get back to you as soon as possible.
                  </h5>
                  <Button className={`px-5 mt-4 ${isSubmitting ? 'disabled' : ''}`} onClick={handleModalHide}>
                    Close
                  </Button>
                </div>
                <fieldset disabled={isSubmitting}>
                  <Form onSubmit={handleSubmit(onSubmit)} className={`${hasSubmit ? 'd-none' : ''}`}>
                    <Row>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label htmlFor="name">Name</Form.Label>
                          <Form.Control {...register('name')} type="text" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label htmlFor="email">Email</Form.Label>
                          <Form.Control {...register('email')} type="email" required />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label htmlFor="tel">Contact Number</Form.Label>
                          <Form.Control {...register('tel')} type="text" required />
                        </Form.Group>
                      </Col>
                      <Col md={8}>
                        <Form.Group>
                          <Form.Label htmlFor="subject">Subject</Form.Label>
                          <Form.Control {...register('subject')} type="text" required />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label htmlFor="message">Your Message</Form.Label>
                          <Form.Control {...register('message')} as="textarea" rows={6} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-md-4">
                      <Col>
                        <Button type="submit" className="mr-3 px-5">
                          {isSubmitting ? <Spinner as="span" animation="border" size="sm" /> : 'Send Message'}
                        </Button>
                        <Button className="px-5" onClick={onHide}>
                          Close
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </fieldset>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Message;
