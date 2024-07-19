'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ChooseRegion = () => {
  const [region, setRegion] = useState('الخوض السادسة');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function getRegion(e) {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/chooseType?region=${region}`);
  }

  return (
    <div className='flex justify-center items-center'>
    <div className='text-2xl border w-11/12 h-[32rem] mt-16 shadow-lg px-4 bg-white border-1 rounded-3xl flex flex-col justify-center items-center'>
      <form onSubmit={getRegion} className='w-10/12 m-4 mb-12'  >
        <label>
          <h1 className='mb-20'>أكتب إسم المنطقة:</h1>
          <input className='block border-2 rounded-xl px-6 py-2  w-full'
            type="text"
            onChange={(e) => setRegion(e.target.value)}
            placeholder='الخوض السادسة'
          />
        </label>
        <button type='submit' disabled={isLoading}>
          {isLoading ? <span>...لحظات</span> : <span>التالي</span>}
        </button>
      </form>
    </div>
    </div>
  );
}

export default ChooseRegion;
