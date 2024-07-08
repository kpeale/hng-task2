import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };
  return (
    <>
      <section
        className='md:mx-[4rem] mt-0 md:mt-[5rem] bg-pink-20 md:bg-white'
        id='cart'
      >
        <h3 className='text-[#555555] text-2xl md:text-[4rem] md:mb-10 font-semibold'>
          Cart
        </h3>
        {/* parent div */}
        <div className='relative flex  flex-col md:flex-row items-center w-full gap-2 md:gap-14'>
          {/* first div */}
          <div className='relative flex flex-col md:flex-row w-[50%]'>
            {/* image div */}
            <div>
              <img
                src='/assets/arrival/image 31.png'
                alt='woman'
                className='  w-[394px] h-[304px] md:w-[380px] md:h-[550px] object-cover bg-white md:bg-pink-20 rounded-lg'
              />

              <div className='absolute bottom-[8rem] md:bottom-4 gap-4 right-2 md:right-[14rem] flex flex-col space-x-2'>
                <button className='bg-peach-10 pt-2 rounded-full w-10 h-10 flex justify-center'>
                  <img
                    src='/assets/cartIcon.svg'
                    alt='trolley'
                    className='w-6'
                  />
                </button>
                <button className='bg-peach-10 pt-3 rounded-full w-10 h-10 flex justify-center'>
                  <img
                    src='/assets/loveIcon.svg'
                    alt='love'
                    className='w-6'
                  />
                </button>
              </div>
            </div>
            {/* price div */}
            <div className=' pt-4 md:pt-32 pl-0 md:pl-5 text-[#555555] text-xl md:text-[1.8rem] font-semibold font-roboto'>
              <div className=' flex flex-row gap-3 md:gap-0 md:flex-col'>
                <p>Women heel</p>
                <p>$100</p>
              </div>
              {/*  size div */}
              <div className='flex flex-row gap-4 md:gap-4 pt-2 md:pt-10'>
                <div>
                  <p>Size</p>
                  <p>Large</p>
                </div>
                {/* color div */}
                <div>
                  <p>color</p>
                  <p>brown</p>
                </div>
              </div>
            </div>
          </div>
          {/* second div */}
          <div className='relative flex  flex-col md:flex-row w-[50%] mb-4 md:mb-0'>
            {/* image div */}
            <div>
              <img
                src='/assets/womenSection/image 28.png'
                alt='woman'
                className=' w-[394px] h-[304px]  md:w-[438px] md:h-[550px] object-cover bg-white md:bg-pink-20 rounded-lg'
              />

              <div className='absolute bottom-[8rem] md:bottom-4 gap-4 right-2 md:right-[13rem] flex flex-col space-x-2'>
                <button className='bg-green-40 pt-2 rounded-full w-10 h-10 flex justify-center'>
                  <img
                    src='/assets/cartIcon.svg'
                    alt='trolley'
                    className='w-6'
                  />
                </button>
                <button className='bg-green-40 pt-3 rounded-full w-10 h-10 flex justify-center'>
                  <img
                    src='/assets/loveIcon.svg'
                    alt='love'
                    className='w-6'
                  />
                </button>
              </div>
            </div>
            {/* price div */}
            <div className='md:pt-32 md:pl-5 text-[#555555] text-xl md:text-[1.8rem] font-semibold font-roboto'>
              <div className='flex flex-row md:flex-col gap-3 md:gap-0'>
                <p>Red Jacket</p>
                <p>$100</p>
              </div>
              {/*  size div */}
              <div className='flex flex-row gap-3 md:gap-4 pt-4 md:pt-10'>
                <div>
                  <p>Size</p>
                  <p>Large</p>
                </div>
                {/* color div */}
                <div>
                  <p>color</p>
                  <p>brown</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prices */}
        <div className='md:pt-32 px-4 md:px-0 py-4 md:py-0 flex flex-col mx-auto my-0 md:mx-[24rem] text-xl md:text-[2rem] text-[#555555] font-semibold gap-3 bg-white w-[394px] rounded-md'>
          {/* subtotal */}
          <div className='flex flex-row justify-between'>
            <p>Subtotal</p>
            <p>$300</p>
          </div>

          {/* shipping */}
          <div className='flex flex-row justify-between'>
            <p>Shipping</p>
            <p>$10</p>
          </div>

          {/* subtotal */}
          <div className='flex flex-row justify-between border-b-2 border-black'>
            <p>Tax</p>
            <p>$10</p>
          </div>

          {/* total */}
          <div className='flex flex-row justify-between'>
            <p>Total</p>
            <p>$320</p>
          </div>
        </div>
        <div className='flex flex-row justify-center mt-5 '>
          <button
            className='bg-green-40 text-[#FCF8F3] rounded-md px-10 py-2  mb-10'
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
