import ArrivalScroll from './ArrivalScroll';

const firstRowItems = [
  {
    image: '/assets/arrival/image 31.png',
    description: 'Women heel',
    price: '$100',
  },
  {
    image: '/assets/arrival/image 32.png',
    description: 'Pink shoe',
    price: '$140',
  },
  {
    image: '/assets/arrival/image 34.png',
    description: 'Completejump suit',
    price: '$300',
  },
  {
    image: '/assets/arrival/image 35.png',
    description: 'Brown belt',
    price: '$50',
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
];

const Arrival = () => {
  return (
    <>
      <section
        className='bg-peach-10'
        id='arrival'
      >
        {/* Scroll Section */}
        <div className=' h-full w-full overflow-x-auto overflow-y-hidden'>
          <div className='mb-12'>
            <ArrivalScroll items={firstRowItems} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Arrival;
