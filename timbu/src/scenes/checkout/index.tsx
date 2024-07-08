const Checkout = () => {
  return (
    <>
      <section
        className='md:mx-[4rem]  mt-8 md:mt-[5rem]'
        id='checkout'
      >
        <h3 className='hidden md:flex md:text-[4rem] text-[#555555] font-semibold'>
          Check Out
        </h3>
        <div className='flex flex-col items-center md:items-start text-[#555555] text-xl md:text-[2rem] font-semibold mx-0 my-auto md:mx-[18rem]  md:gap-5'>
          {/* first name and last name */}
          <div className='flex flex-col md:flex-row md:gap-10'>
            <div className='flex md:flex-col flex-col md:justify-between'>
              <label
                htmlFor='firstname'
                className='flex-grow'
              >
                First Name
              </label>

              <input
                type='text'
                name='firstname'
                className='outline-none border-b-2 border-b-black w-full max-w-[220px] md:max-w-[320px]'
              />
            </div>

            <div className='flex flex-col justify-between'>
              <label
                htmlFor='surname'
                className='flex-grow'
              >
                LastName/ Surname
              </label>

              <input
                type='text'
                name='surname'
                className='outline-none border-b-2 border-b-black w-full max-w-[320px]'
              />
            </div>
          </div>

          <div className='flex flex-col mt-4'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              className='outline-none border-b-2 border-b-black w-full md:w-[650px]'
            />
          </div>

          {/* div for city and country */}
          <div className='flex flex-col md:flex-row md:gap-10'>
            <div className='flex md:flex-col flex-col md:justify-between'>
              <label
                htmlFor='city'
                className='flex-grow'
              >
                City
              </label>

              <input
                type='text'
                name='city'
                className='outline-none border-b-2 border-b-black w-full max-w-[220px] md:max-w-[320px]'
              />
            </div>

            <div className='flex flex-col justify-between'>
              <label
                htmlFor='country'
                className='flex-grow'
              >
                Country
              </label>

              <input
                type='text'
                name='country'
                className='outline-none border-b-2 border-b-black w-full max-w-[320px]'
              />
            </div>
          </div>

          {/* div for postal and phone number */}
          <div className='flex flex-col md:flex-row md:gap-10'>
            <div className='flex md:flex-col flex-col md:justify-between'>
              <label
                htmlFor='pcode'
                className='flex-grow'
              >
                Postal Code
              </label>

              <input
                type='text'
                name='pcode'
                className='outline-none border-b-2 border-b-black w-full max-w-[220px] md:max-w-[320px]'
              />
            </div>

            <div className='flex flex-col justify-between'>
              <label
                htmlFor='number'
                className='flex-grow'
              >
                Phone Number
              </label>

              <input
                type='number'
                name='number'
                className='outline-none border-b-2 border-b-black w-full max-w-[320px]'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center mt-10 md:mt-20 '>
          <h3 className='text-[#555555] text-2xl md:text-[2.5rem] font-semibold'>
            Payment method
          </h3>
          <div className='flex flex-row justify-center bg-peach-10 mt-5 w-[200px] md:w-[300px] px-4 gap-4 py-2 rounded-md'>
            <img
              src='/assets/visa.png'
              alt='visa'
              className='w-[50px] md:w-[70px]'
            />
            <img
              src='/assets/paypal.png'
              alt='paypal'
              className='w-[50px] md:w-[70px]'
            />
            <img
              src='/assets/mastercard.png'
              alt='mastercard'
              className='w-[50px] md:w-[70px]'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
