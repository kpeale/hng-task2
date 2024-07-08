import useMediaQuery from '@/hooks/UseMediaQuery';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/arrival');
  };
  return (
    <section className='bg-peach-10 relative'>
      <div
        className={` pt-10 md:pt-22 px-10 w-full relative ${
          isAboveMediumScreens ? 'flex flex-row' : 'flex flex-col items-center'
        }`}
      >
        {isAboveMediumScreens ? (
          <>
            <img
              src='assets/girlStool.png'
              alt='girl sitting on a stool'
              className='w-[25%]'
            />
            <img
              src='assets/girlFloor.png'
              alt='girl sitting on the floor'
              className='w-[50%] ml-[-2.5rem]'
            />
            <img
              src='assets/boyFly.png'
              alt='boy flying'
              className='w-[25%]'
            />
          </>
        ) : (
          <>
            <img
              src='assets/girlFloor.png'
              alt='girl sitting on the floor'
              className='w-[50%]'
            />
            <img
              src='assets/girlStool.png'
              alt='girl sitting on a stool'
              className='w-[50%] mt-4 opacity-75'
            />
          </>
        )}
      </div>
      {/* the second div */}
      <div className='absolute top-24 left-0 w-full h-full flex flex-col justify-center items-center'>
        <div className='text-center mt-[-8rem] md:mt-0'>
          <p className='font-roboto font-medium text-2xl md:text-[5rem] '>
            <span className='text-white'>Style </span>
            for All: Discover Your
            <span className='text-white'> Unique </span>
          </p>
          <p className='font-roboto font-medium text-2xl md:text-[5rem] mt-0 md:mt-[5rem]'>
            Look with
            <span className='text-white'> Our </span>
            Unisex Fashion
          </p>
        </div>
        <div className='flex justify-center flex-row mt-20 md:mt-16'>
          <button
            className='bg-green-40 text-white-30 md:px-4 px-2 py-1 md:py-4 text-xl md:text-[2rem] font-roboto font-semibold rounded-md'
            id='arrival'
            onClick={handleCheckout}
          >
            Explore New Arrival
            <img
              src='assets/btnIcon.svg'
              alt='icon'
              className='inline-block pl-4 w-10 md:w-16'
            />
          </button>
        </div>
      </div>

      {/* moving texts */}
      <div className='bg-green-40 overflow-hidden py-8 hidden md:flex '>
        <div className='flex flex-row gap-32 px-16 moving-text'>
          {/* point one */}
          <div className='flex flex-row justify-center items-center'>
            <div className='bg-pink-20 w-[20px] h-[20px] rounded-full'></div>
            <p className='font-roboto font-normal text-white-30 text[2.5rem] capitalize px-2'>
              Enjoy 30% discount sales
            </p>
            <div className='bg-pink-20 w-[20px] h-[20px] rounded-full'></div>
          </div>

          {/* point two */}
          <div className='flex flex-row justify-center items-center'>
            <div className='bg-pink-20 w-[20px] h-[20px] rounded-full'></div>
            <p className='font-roboto font-normal text-white-30 text[2.5rem] capitalize px-2'>
              Order For Your Summer Outfit
            </p>
            <div className='bg-pink-20 w-[20px] h-[20px] rounded-full'></div>
          </div>

          {/* point three */}
          <div className='flex flex-row justify-center items-center'>
            <div className='bg-pink-20 w-[20px] h-[20px] rounded-full'></div>
            <p className='font-roboto font-normal text-white-30 text[2.5rem] capitalize px-2'>
              July Awoof sales
            </p>
            <div className='bg-pink-20 w-[20px] h-[20px] rounded-full'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
