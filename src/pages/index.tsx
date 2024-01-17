import Container from 'react-bootstrap/Container';

const Home = ({ backgroundImg }: { backgroundImg: string }): React.JSX.Element => {
  return (
    <Container fluid className="d-flex" style={{ marginBottom: '15px' }}>
      <div
        className="d-flex flex-grow-1 rounded bg-image"
        style={{
          background: `url("/img/projects/${backgroundImg}")`,
        }}
      />
    </Container>
  );
};

const getServerSideProps = (): { props: { backgroundImg: string } } => {
  const imagePool = [
    'winter-and-summer-barns-with-pool/-WHuAFgq.jpg',
    'winter-and-summer-barns-with-pool/c8DQ7kLU.jpg',
    'winter-and-summer-barns-with-pool/5WFU54Oo.jpg',
    'winter-and-summer-barns-with-pool/eLWg40Q1.jpg',
    'winter-and-summer-barns-with-pool/pGa9GPQw.jpg',
    'winter-and-summer-barns-with-pool/y7k8dvwj.jpg',
    'soho-farmhouse/1Sk3gCOZ.jpeg',
    'soho-farmhouse/CM2DAZkL.jpeg',
    'soho-farmhouse/6seWC6EI.jpeg',
    'soho-farmhouse/uXlZjUMM.jpeg',
    'village-house-interiors-pool-and-pool-house/hjtyCIv0.jpeg',
    'village-house-interiors-pool-and-pool-house/u0xthdMZ.jpeg',
    'village-house-interiors-pool-and-pool-house/JASEW__k.jpeg',
    'barn-redesign-and-renovation/EK2-min.jpg',
    'barn-redesign-and-renovation/EK4-min.jpg',
    'barn-redesign-and-renovation/EK5-min.jpg',
    'barn-redesign-and-renovation/EK6-min.jpg',
    'barn-redesign-and-renovation/EK11-min.jpg',
    'barn-redesign-and-renovation/EK12-min.jpg',
    'barn-redesign-and-renovation/EK19-min.jpg',
    'barn-redesign-and-renovation/EK27-min.jpg',
    'barn-redesign-and-renovation/EK30-min.jpg',
    'barn-redesign-and-renovation/EK40-min.jpg',
    'farmhouse-renovation-and-converted-barns-with-pool/0c9675.webp',
    'farmhouse-renovation-and-converted-barns-with-pool/6d8be0.webp',
    'farmhouse-renovation-and-converted-barns-with-pool/7b447a.webp',
    'farmhouse-renovation-and-converted-barns-with-pool/865bf1.webp',
    'farmhouse-renovation-and-converted-barns-with-pool/45920f.webp',
    'farmhouse-renovation-and-converted-barns-with-pool/a5f8ee.webp',
  ];

  return {
    props: {
      backgroundImg: imagePool[Math.floor(Math.random() * imagePool.length)],
    },
  };
};

export default Home;
export { getServerSideProps };
