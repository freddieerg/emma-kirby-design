import Cover from '../components/Cover';
import Quote from '../components/Quote';

const WhatWeDo = (): JSX.Element => {
  return (
    <>
      <Cover
        title="What We Do"
        subtitle={
          <>
            Emma Kirby Design is able to either work as an interior design studio, an architectural design practice or
            together as a multi-disciplined in-house team. Emma Kirby (interiors) and Michael Ergatoudis (planning and
            architecture) bring with them years of knowledge.
            <br />
            <br />
            Having built and renovated many of their own homes as well as those of their clients, they know every detail
            of the process and have formed strong working relationships with many trusted and talented people.
          </>
        }
        image="/img/projects/winter-and-summer-barns-with-pool/c8DQ7kLU.jpg"
      />
      <Quote
        quote="Interiors are a key part of what we do and whether your home is a country house, an urban apartment, a ski chalet or a house by the coast, if it needs a total redesign to make the most of light and space or simply to redecorate and breathe new life into tired interiors we will handle every detail. Building each layer from electrical and lighting design to furniture, fabrics, floor and wall coverings, we deliver a scheme that will both comfort and inspire."
        author="Emma Kirby"
        subtitle="Design Director"
      />
      <Cover
        flip
        title="Interior Design"
        subtitle={
          <>
            Emma creates beautiful, inspiring and inviting interiors by sourcing and blending the very best of antique,
            vintage and modern design as well as developing her own bespoke pieces.
            <br />
            <br />
            The layering of texture, colour and lighting deliver perfectly balanced rooms where form and function work
            seamlessly together giving the client a space in which they can feel comfortable and relaxed.
          </>
        }
        image="/img/projects/soho-farmhouse/BizpASHX.jpeg"
      />
      <Quote quote="Home is the comfiest place to be." author="Winnie the Pooh" subtitle="" />
      <Cover
        title="Planning Consultancy"
        subtitle={
          <>
            As well as architectural and interior design experts, we have planning consultants who can advise on the
            best achievable planning outcome for your home or site and the safest strategy to gain permission.
            <br />
            <br />
            Time and again, our planning advice has exceeded the hopes and expectations of our clients and opened their
            eyes to new possibilities of what can be achieved.
          </>
        }
        image="/img/projects/winter-and-summer-barns-with-pool/7zSYs8PQ.jpg"
      />
      <Quote
        quote="The houses we live in should be both uplifting and comforting; a sanctuary from the outside world and a place to relax and revive. We demand a great deal from where we live, so it is important that the right decisions are made to avoid a waste of both time and money."
        author="Michael Ergatoudis"
        subtitle="Development Director"
      />
      <Cover
        flip
        title="Construction"
        subtitle={
          <>
            Emma Kirby Design can take your project from concept to completion. We have some of the best Project
            Managers in the business to expertly oversee our team of builders and contractors.
            <br />
            <br />
            The Construction and Studio Teams work closely together to manage programme schedules and costs, keeping in
            close contact with the client so every aspect is clear and transparent.
          </>
        }
        image="/img/misc/construction.jpg"
      />
    </>
  );
};

export default WhatWeDo;
