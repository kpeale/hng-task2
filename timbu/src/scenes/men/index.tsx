import Scroll from '@/components/Scroll';

const firstRowItems = [
  {
    image: '/assets/men section/image 4.png',
    description: 'Long sleeves Denim',
    price: '$100',
  },
  {
    image: '/assets/men section/image 5.png',
    description: 'Mle Jean Jacket',
    price: '$100',
  },
  {
    image: '/assets/men section/image 8.png',
    description: 'Men suit blue color',
    price: '$300',
  },
  {
    image: '/assets/men section/image 16.png',
    description: 'Joggers green',
    price: '$50',
  },
  {
    image: '/assets/men section/image 18.png',
    description: 'Checkers for men',
    price: '$400',
  },
  {
    image: '/assets/men section/image 20.png',
    description: 'Face cap in black',
    price: '$20',
  },
];

// second row
const secondRowItems = [
  {
    image: '/assets/men section/image 10.png',
    description: 'Sport Wear',
    price: '$100',
  },
  {
    image: '/assets/men section/image 11.png',
    description: 'Brown Blazzer',
    price: '$100',
  },
  {
    image: '/assets/men section/image 12.png',
    description: 'Plain white shirt',
    price: '$100',
  },
  {
    image: '/assets/men section/image 14.png',
    description: 'Black wear two pair',
    price: '$100',
  },
  {
    image: '/assets/men section/image 5.png',
    description: 'Mle Jean Jackect',
    price: '$100',
  },
  {
    image: '/assets/men section/image 8.png',
    description: 'Mle Jean Jackect',
    price: '$100',
  },
];
const Men = () => {
  return (
    <>
      <section
        className='bg-pink-20'
        id='men'
      >
        {/* Scroll Section */}
        <div className=' h-full w-full overflow-x-auto overflow-y-hidden'>
          <div className='mb-12'>
            <Scroll items={firstRowItems} />
          </div>
          {/* Second Row with margin top */}
          <div className='mt-12'>
            <Scroll items={secondRowItems} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Men;
