import { useState } from 'react';
import useMediaQuery from '@/hooks/UseMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const flexBetween = 'flex items-center justify-between ';
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <nav>
      <div className={`${flexBetween} top-0 z-30 w-full py-3 bg-pink-20`}>
        <div className={`${flexBetween} mx-16 w-11/12`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div
                  className={`${flexBetween} gap-10 text-sm font-roboto font-semibold`}
                >
                  <AnchorLink href='men'>Men</AnchorLink>
                  <AnchorLink href='women'>Women</AnchorLink>
                  <AnchorLink href='arrival'>New Arrival</AnchorLink>
                </div>

                <div>
                  <p className='font-satisfy font-normal text-[2.5rem] uppercase'>
                    clarahavens
                  </p>
                </div>

                <div className={`${flexBetween} gap-8 text-sm`}>
                  <div className='relative '>
                    <input
                      type='text'
                      className='rounded-md pl-10 pr-3 py-2 bg-peach-10'
                    />
                    <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'>
                      <img
                        src='assets/searchIcon.svg'
                        alt='search'
                        className='w-8'
                      />
                    </span>
                  </div>
                  {/* icons */}
                  <div className='ml-4'>
                    <img
                      src='assets/cartIcon.svg'
                      alt='cart'
                    />
                  </div>
                  {/* icons */}
                  <div className='ml-4'>
                    <img
                      src='assets/profileIcon.svg'
                      alt='profile'
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex justify-between w-full'>
                <div className='flex justify-start'>
                  <p className='font-satisfy font-normal text-[2.5rem] uppercase'>
                    clarahavens
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
          </div>
        </div>
      </div>

      {/* mobile menue modal */}
      {!isAboveMediumScreens && menuToggle && (
        <div className='fixed left-0 top-0 z-40 h-full w-[300px] bg-pink-20 drop-shadow-xl transition-transform transform translate-x-0'>
          <div className='flex justify-end p-4'>
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <XMarkIcon className='h-6 w-6 text-[#555555]' />
            </button>
          </div>
          <div className='flex flex-col items-start pl-8 pt-2 pb-8 text-2xl text-[#555555]'>
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
    </nav>
  );
};

export default Navbar;
