import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';

const Home = (): JSX.Element => {
  const [bgImg, setBgImg] = useState('');

  useEffect(() => {
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
    ];

    setBgImg(imagePool[Math.floor(Math.random() * imagePool.length)]);
  }, []);

  return (
    <Container fluid className="d-flex" style={{ marginBottom: '15px' }}>
      <div
        className="d-flex flex-grow-1 rounded"
        style={{
          background: `url("/img/projects/${bgImg}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      />
    </Container>
  );
};

export default Home;
