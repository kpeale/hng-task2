import { useState } from 'react';
import useMediaQuery from '@/hooks/UseMediaQuery';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

interface NavbarProps {
  logoText: string;
  backgroundColor: string;
  mdBackgroundColor: string;
  textColor: string;
  showLinks: boolean;
  fontStyle: string;
  searchIcon: string;
  inputBgColor: string;
  mobileLogo: string;
  mobileFontStyle:string;
}

const Navbar = ({
  logoText,
  backgroundColor,
  textColor,
  showLinks,
  mdBackgroundColor,
  fontStyle,
  searchIcon,
  inputBgColor,
  mobileLogo,
  mobileFontStyle,
}: NavbarProps) => {
  const flexBetween = 'flex items-center justify-between ';
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  const bgColor = isAboveMediumScreens ? mdBackgroundColor : backgroundColor;

  return (
    <nav style={{ backgroundColor: bgColor }}>
      <div
        className={`${flexBetween} top-0 z-30 w-full py-3`}
        style={{ color: textColor }}
      >
        <div className={`${flexBetween} mx-16 w-11/12`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {showLinks && (
                  <div
                    className={`${flexBetween} gap-10 text-sm font-roboto font-semibold`}
                  >
                    <Link to='/men'>Men</Link>
                    <Link to='/women'>Women</Link>
                    <Link to='/arrival'>New Arrival</Link>
                  </div>
                )}

                <div>
                  <p
                    className={`${fontStyle} font-normal text-[2.5rem] uppercase`}
                  >
                    {logoText}
                  </p>
                </div>

                <div className={`${flexBetween} gap-8 text-sm`}>
                  <div className='relative '>
                    <input
                      type='text'
                      className={`rounded-md pl-10 pr-3 py-2 ${inputBgColor}`}
                    />
                    <span className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'>
                      <img
                        src={searchIcon}
                        alt='search'
                        className='w-8'
                      />
                    </span>
                  </div>
                  <div className='ml-4'>
                    <Link to='/cart'>
                      <img
                        src='assets/cartIcon.svg'
                        alt='cart'
                      />
                    </Link>
                  </div>
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
                  <p
                    className={`${mobileFontStyle} text-2xl uppercase text-black font-medium`}
                  >
                    {mobileLogo}
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

      {!isAboveMediumScreens && menuToggle && (
        <div className='fixed left-0 top-0 z-40 h-full w-[300px] bg-pink-20 drop-shadow-xl transition-transform transform translate-x-0'>
          <div className='flex justify-end p-4'>
            <button onClick={() => setMenuToggle(!menuToggle)}>
              <XMarkIcon className='h-6 w-6 text-[#555555]' />
            </button>
          </div>
          <div className='flex flex-col items-start pl-8 pt-2 pb-8 text-2xl text-[#555555]'>
            <Link
              to='/men'
              className='py-4 w-full border-b border-[#555555]'
            >
              Men
            </Link>
            <Link
              to='/women'
              className='py-4 w-full border-b border-[#555555]'
            >
              Women
            </Link>
            <Link
              to='/arrival'
              className='py-4 w-full border-b border-[#555555]'
            >
              New Arrival
            </Link>
            <Link
              to='/cart'
              className='py-4 w-full border-b border-[#555555]'
            >
              Cart
            </Link>
            <Link
              to='/profile'
              className='py-4 w-full border-b border-[#555555]'
            >
              Profile
            </Link>
            <Link
              to='/checkout'
              className='py-4 w-full border-b border-[#555555]'
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
