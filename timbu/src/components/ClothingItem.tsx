interface ClothingItemProps {
  image: string;
  description: string;
  price: string;
  imageBgColor?: string;
  iconBgColor?: string;
  cartIcon?: string;
  loveIcon?: string;
  textColor?: string;
}

const ClothingItem = ({
  image,
  description,
  price,
  imageBgColor,
  iconBgColor,
  cartIcon = '/assets/cartWomen.svg',
  loveIcon = '/assets/loveWomen.svg',
  textColor = 'text-white',
}: ClothingItemProps) => {
  return (
    <div className='relative w-full md:w-auto'>
      <img
        src={image}
        alt={description}
        className={`md:w-full w-[394px] h-[304px] md:h-[500px] ${imageBgColor} object-cover rounded-lg`}
      />
      <div className='absolute  bottom-24  gap-4 right-2 flex flex-col space-x-2'>
        <button
          className={` ${iconBgColor} pt-2 rounded-full w-10 h-10 flex justify-center`}
        >
          <img
            src={cartIcon}
            alt='trolley'
            className='w-6'
          />
        </button>
        <button
          className={` ${iconBgColor} pt-3 rounded-full w-10 h-10 flex justify-center`}
        >
          <img
            src={loveIcon}
            alt='love'
            className='w-6'
          />
        </button>
      </div>
      <div
        className={`${textColor} mt-2 font-roboto text-2xl md:text-[2rem] font-semibold  flex flex-col items-start`}
      >
        <p className=''>{description}</p>
        <p className=''>{price}</p>
      </div>
    </div>
  );
};

export default ClothingItem;
