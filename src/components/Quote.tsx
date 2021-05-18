import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

interface QuoteProps {
  quote: string;
  author: string;
  subtitle: string;
}

const Quote = ({ quote, author, subtitle }: QuoteProps): JSX.Element => {
  return (
    <Container className="text-center font-weight-light my-5 py-5">
      <Row>
        <Col>
          <h4 className="mb-5" style={{ lineHeight: 1.5, opacity: 0.8 }}>
            "{quote}"
          </h4>
          <p className="m-0">{author}</p>
          <p className="text-muted mb-0">{subtitle}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Quote;
