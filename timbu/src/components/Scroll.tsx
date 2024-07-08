import ClothingItem from './ClothingItem';

interface ScrollableSectionProps {
  items: { image: string; description: string; price: string }[];
}
const Scroll = ({ items }: ScrollableSectionProps) => {
  const overlayStyles = `p-0 pt-4 pl-0 md:pl-[67rem] flex
   w-full flex-col items-center justify-center
  whitespace-normal  text-center gap-8
   transition duration-500 `;

  return (
    <div className={`${overlayStyles} `}>
      <div className='flex gap-8 flex-col items-center  md:flex-row'>
        {items.map((item, index) => (
          <div
            key={index}
            className='w-[350px] whitespace-nowrap '
          >
            <ClothingItem
              image={item.image}
              description={item.description}
              price={item.price}
              cartIcon='/assets/cartIcon.svg'
              loveIcon='/assets/loveIcon.svg'
              imageBgColor='bg-peach-10'
              iconBgColor='bg-pink-20'
              textColor='text-[#555555]'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
