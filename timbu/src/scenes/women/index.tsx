import WomenScroll from './WomenScroll';
import { useState } from 'react';
import useMediaQuery from '@/hooks/UseMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

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
  const flexBetween = 'flex items-center justify-between ';
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  return (
    <>
      <section
        className='bg-green-40'
        id='women'
      >
        {/* Taskbar */}
        {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full py-3`}>
            <div className={`${flexBetween} mx-16 w-11/12`}>
              <div>
                <p className='text-white text-[4rem] font-roboto font-semibold'>
                  Women's Collection
                </p>
              </div>
              {/* Search and icons */}
              <div className='flex flex-row gap-6'>
                <div className='relative'>
                  <input
                    type='text'
                    className='rounded-md  mr-2 py-2 bg-white w-[215px]'
                  />
                  <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'>
                    <img
                      src='assets/searchWomen.svg'
                      alt='search'
                      className='w-6'
                    />
                  </span>
                </div>
                <div className='ml-4'>
                  <img
                    src='assets/cartIcon.svg'
                    alt='cart'
                  />
                </div>
                <div className='ml-4'>
                  <img
                    src='assets/profileIcon.svg'
                    alt='profile'
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex justify-between w-full bg-white md:bg-green-40'>
            <div className='flex justify-start'>
              <p className='font-roboto text-[#5555] font-medium text-[2.5rem] uppercase'>
                Women's Collection
              </p>
            </div>
            <div className='flex justify-end'>
              <button
                className=''
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <Bars3Icon className='h-6 w-6 text-black' />
              </button>
            </div>
          </div>
        )}
        {!isAboveMediumScreens && menuToggle && (
          <div className='fixed left-0 top-0 z-40 h-full w-[300px] bg-white drop-shadow-xl transition-transform transform translate-x-0'>
            <div className='flex justify-end p-4'>
              <button onClick={() => setMenuToggle(!menuToggle)}>
                <XMarkIcon className='h-6 w-6 text-[#555555]' />
              </button>
            </div>
            <div className='flex flex-col items-start pl-8 pt-10 text-2xl text-[#555555]'>
              <AnchorLink
                href='#men'
                className='py-4 w-full border-b border-[#555555]'
              >
                Men
              </AnchorLink>
              <AnchorLink
                href='#women'
                className='py-4 w-full border-b border-[#555555]'
              >
                Women
              </AnchorLink>
              <AnchorLink
                href='#arrival'
                className='py-4 w-full border-b border-[#555555]'
              >
                New Arrival
              </AnchorLink>

              <AnchorLink
                href='#cart'
                className='py-4 w-full border-b border-[#555555]'
              >
                Cart
              </AnchorLink>

              <AnchorLink
                href='#profile'
                className='py-4 w-full border-b border-[#555555]'
              >
                Profile
              </AnchorLink>

              <AnchorLink
                href='#checkout'
                className='py-4 w-full border-b border-[#555555]'
              >
                Checkout
              </AnchorLink>
            </div>
          </div>
        )}
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
