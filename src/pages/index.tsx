import Container from 'react-bootstrap/Container';

const Home = (): JSX.Element => {
  return (
    <Container fluid className="d-flex" style={{ marginBottom: '15px' }}>
      <div
        className="d-flex flex-grow-1 rounded"
        style={{
          background: 'url("/img/projects/winter-and-summer-barns-with-pool/y7k8dvwj.jpg") no-repeat center center',
          backgroundSize: 'cover',
        }}
      />
    </Container>
  );
};

export default Home;
