class Project {
  public id: string;
  public title: string;
  public subtitle: string;
  public description: string;
  public thumbnail: string;

  constructor(url: string, title: string, subtitle: string, description: string, thumbnail: string) {
    this.id = url;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.thumbnail = thumbnail;
  }
}

const projects = [
  new Project(
    'winter-and-summer-barns-with-pool',
    'Winter & Summer Barns With Pool',
    'Oxfordshire',
    'Working closely with our clients, we designed an area which incorporated a new oak framed summer barn, a swimming pool and a renovated party barn. We reconfigured the internal layout of the existing barn to create a new kitchen, wine cellar and large double height room. This houses a bar, dining and seating areas on the ground floor and a guest bedroom with a shower room and home office above. It is the perfect place for cosy family film nights thanks to a hidden screen or big parties with its long dining table, bar and state of the art sound system.\n\n' +
      "For the warmer months, we designed and built a beautiful barn with the help of master craftsmen using traditional methods of oak framing for the structure. The plant room, shower and changing rooms sit at one end of the barn with an open summer kitchen, bespoke bar with zinc worktop and a 5 metre dining table takes up the middle section. A cosy, underfloor heated television room means younger children can relax when the sun goes down after a full day's swimming. Reclaimed clay tiles and wooden cladding help to give an aged feel to the barn and metal framed doors matching those of the party barn unify both buildings.",
    '7zSYs8PQ.jpg',
  ),
  new Project(
    'soho-farmhouse',
    'Soho Farmhouse',
    'Great Tew',
    'Lying in 100 acres of rolling Oxfordshire countryside, Soho Farmhouse is a private members club just 90 minutes but a world away from London. It was such a pleasure to be part of this hugely exciting project and collaborate with the amazing Soho House team.',
    'QRNsiUjo.jpeg',
  ),
  new Project(
    'village-house-interiors-pool-and-pool-house',
    'Village House Interiors, Pool & Pool House',
    'Oxfordshire',
    'The owners of this beautiful Georgian village house wanted us to redecorate the master and guest bedrooms as well as create a pool and pool house to replace a rather unloved walled vegetable garden. New life has been brought into the formerly neglected area which is now used all summer long. On cooler evenings, meals can be eaten inside the pool house which also features a kitchen, wood burning stove, shower and changing areas which make it completely self-contained.',
    'u0xthdMZ.jpeg',
  ),
  new Project(
    'listed-village-house-extension-and-pool',
    'Listed Village House Extension & Pool',
    'Oxfordshire',
    'Opening up a dark, small kitchen and utility room was the brief from the clients. Years earlier, we had worked with them to build a pool in a walled rose garden. It was a beautiful part of the property but the young family never used it and it was a waste of precious space. Enclosed on all four sides by barns and Cotswold walling, it made the perfect suntrap for the pool. Additionally, we created a seating area around an outdoor fireplace for when the nights turn cooler.\n\n It was lovely to be invited back to help with the house a few years later. The redecoration of the sitting room, master bedroom with dressing room and bathroom were first, followed by the extension design. A new kitchen with a 4m long island and new Aga were the main focus of the space but also allowed for a seating corner with fireplace, breakfast area, pantry and boot room.',
    'rbbqkM-X.jpeg',
  ),
  new Project(
    'contemporary-london-duplex',
    'Contemporary London Duplex',
    'Primrose Hill, London',
    'A single, young professional bought a rundown duplex in Primrose Hill and wanted a light filled, contemporary home. Take a look on our Instagram page for the before and after photos.',
    'yBoPaiMj.jpg',
  ),
];

export default Project;
export { projects };
