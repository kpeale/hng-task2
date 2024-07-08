import WomenScroll from './WomenScroll';

const firstRowItems = [
  {
    image: '/assets/womenSection/image 22.png',
    description: 'Office Straight gown',
    price: '$100',
  },
  {
    image: '/assets/womenSection/image 24.png',
    description: 'Black gown with hat',
    price: '$140',
  },
  {
    image: '/assets/womenSection/image 25.png',
    description: 'Complete suit',
    price: '$300',
  },
  {
    image: '/assets/womenSection/image 26.png',
    description: 'Flair Skirt and tie',
    price: '$100',
  },
  {
    image: '/assets/womenSection/image 28.png',
    description: 'Red Jacket',
    price: '$300',
  },
  {
    image: '/assets/womenSection/image 30.png',
    description: 'Female denim',
    price: '$100',
  },
];

// second row
const secondRowItems = [
  {
    image: '/assets/womenSection/image 26.png',
    description: 'Flair Skirt and tie',
    price: '$100',
  },
  {
    image: '/assets/womenSection/image 28.png',
    description: 'Red Jacket',
    price: '$200',
  },
  {
    image: '/assets/womenSection/image 30.png',
    description: 'Female denim',
    price: '$100',
  },
  {
    image: '/assets/womenSection/image 22.png',
    description: 'Office Straight gown',
    price: '$100',
  },
  {
    image: '/assets/womenSection/image 24.png',
    description: 'Black gown with hat',
    price: '$140',
  },
  {
    image: '/assets/womenSection/image 30.png',
    description: 'Female denim',
    price: '$300',
  },
];
const Women = () => {
  return (
    <>
      <section
        className='bg-green-40'
        id='women'
      >
        {/* Scroll Section */}
        <div className=' h-full w-full overflow-x-auto overflow-y-hidden'>
          <div className='mb-12'>
            <WomenScroll items={firstRowItems} />
          </div>
          {/* Second Row with margin top */}
          <div className='mt-12'>
            <WomenScroll items={secondRowItems} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Women;
