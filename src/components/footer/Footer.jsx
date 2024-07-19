import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex flex-col justify-between  h-[10vh] items-center  lg:flex-row mt-10 border-t-2'>
      <div><Link target="_blank" href='https://www.instagram.com/_5lo_9/'>developed By@AlMardas</Link></div>
      <div><h1>جميع الحقوق محفوظة لـزعتر@٢٠٢٤</h1></div>
      
    </div>
  )
}

export default Footer