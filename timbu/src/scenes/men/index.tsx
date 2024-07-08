import { useState } from 'react';
import Scroll from '@/components/Scroll';
import useMediaQuery from '@/hooks/UseMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

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
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const flexBetween = 'flex items-center justify-between ';
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  return (
    <>
      <section
        className='bg-pink-20'
        id='men'
      >
        {/* Taskbar */}
        {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full py-3`}>
            <div className={`${flexBetween} mx-16 w-11/12`}>
              <div>
                <p className='text-[#555555] text-[4rem] font-roboto font-semibold'>
                  Men's Collection
                </p>
              </div>
              {/* Search and icons */}
              <div className='flex flex-row gap-6'>
                <div className='relative'>
                  <input
                    type='text'
                    className='rounded-md  mr-2 py-2 bg-peach-10 w-[215px]'
                  />
                  <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'>
                    <img
                      src='assets/searchIcon.svg'
                      alt='search'
                      className='w-8'
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
          <div className='flex justify-between w-full '>
            <div className='flex justify-start'>
              <p className='font-roboto text-[#5555] font-medium text-[2.5rem] uppercase'>
                Men's Collection
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
          <div className='fixed left-0 top-0 z-40 h-full w-[300px] bg-peach-10 drop-shadow-xl transition-transform transform translate-x-0'>
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
