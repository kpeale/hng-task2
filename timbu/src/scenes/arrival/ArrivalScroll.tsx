import ClothingItem from '@/components/ClothingItem';
interface ScrollableSectionProps {
  items: { image: string; description: string; price: string }[];
}

const ArrivalScroll = ({ items }: ScrollableSectionProps) => {
  const overlayStyles = `p-6 pl-0 md:pl-[67rem] flex
   w-full flex-col items-center justify-center
  whitespace-normal  text-center gap-8
   transition duration-500 `;
  return (
    <div className={`${overlayStyles} `}>
      <div className='flex gap-8 flex-col md:flex-row'>
        {items.map((item, index) => (
          <div
            key={index}
            className='w-[350px] whitespace-nowrap '
          >
            <ClothingItem
              image={item.image}
              description={item.description}
              price={item.price}
              imageBgColor='bg-white'
              iconBgColor='bg-peach-10'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrivalScroll;
