import React from 'react';
import Image from 'next/image';
import FoodIconsMotion from './FoodIconsMotion';
const FoodIcons = ({ search }) => {
  const foods = [
    'برجر',
    'بيتزا',
    'قهوة',
    'عصير',
    'شاي',
    'رز',
    'سوشي',
    'نودلز',
    'شاورما',
    'فرايز',
    'دونت',
    'بحري',
    'كوكيز',
    'ستيك',
    'كيك',
    'فطيرة',
    'فلافل',
    'تاكو',
    'كباب',
    'برجر-العربات',
  ];

  return (
    <div className="w-full h-full grid grid-rows-2 grid-flow-col overflow-x-scroll overflow-y-hidden pt-10 pl-5 md:pl-10">
      {foods.map((food, index) => (
        <FoodIconsMotion
          initial={{ rotate: 0 }}
          animate={{ rotate: 0 }}
          whileHover={{ rotate: [5, -5, 0], scale: 1.1 }}
          className="w-20 h-20 hover:cursor-pointer hover:bg-blue-50 hover:rounded-2xl p-1 flex flex-col items-center justify-center"
          key={index}
          onClick={() => search(food)}
        >
          <Image
            src={`/${food}.svg`}
            alt={food}
            width={64} // Adjust width as needed
            height={64} // Adjust height as needed
            className="h-full aspect-square"
          />
          <p className="text-sm font-bold">{food}</p>
        </FoodIconsMotion>
      ))}
    </div>
  );
};

export default FoodIcons;

