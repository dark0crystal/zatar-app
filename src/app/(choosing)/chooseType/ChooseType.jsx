'use client';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FoodIcons from '@/components/foodIcons/FoodIcons'

const ChooseType = () => {
  const [foodType, setFoodType] = useState('برجر');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const region = searchParams.get('region');
  console.log(`Received region: ${region}`);

  function getFoodType(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log(`Navigating to /suggest with region: ${region} and foodType: ${foodType}`);
    router.push(`/suggest?region=${region}&foodType=${foodType}`);
  }

  const handleFoodIconClick = (food) => {
    setFoodType(food);
    setIsLoading(true);
    router.push(`/suggest?region=${region}&foodType=${food}`);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='text-2xl border w-11/12 h-[32rem] mt-16 shadow-lg px-4 bg-white border-1 rounded-3xl flex flex-col items-center'>
        <FoodIcons setFoodQuery={setFoodType} setToggle={setIsLoading} search={handleFoodIconClick} />
        <form onSubmit={getFoodType} className='w-10/12 mt-0 mb-6'>
          <label>
            <span>نوع الوجبة:</span>
            <input
              className='block border-2 rounded-xl px-6 py-2 w-full mt-2'
              type="text"
              onChange={(e) => setFoodType(e.target.value)}
              value={foodType}
            />
          </label>
          <button type='submit' disabled={isLoading} className='mt-4'>
            {isLoading ? <span>...لحظات</span> : <span>التالي</span>}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChooseType;



