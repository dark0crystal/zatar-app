import React from 'react'
import Link from 'next/link'
const SuggestButton = () => {
  return (
    <div className='flex justify-center w-full flex-col items-center'>
      <h1 className='text-[4.5vw] md:text-[3vw]  lg:text-[1.5vw]  text-black  text-opacity-70 '>محتار وين تريد تأكل؟ ... نحن هنا عشان نساعدك</h1>
        <Link href="./chooseRegion" className='mt-8'>
        <button className=" bg-[#91bb91] sm:text-2xl lg:text-3xl hover:bg-[#00719c] text-white font-bold py-2 px-4 rounded ">
          إقترح لي 
        </button>
        </Link>
    </div>
  )
}

export default SuggestButton