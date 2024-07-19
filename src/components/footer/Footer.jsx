import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex flex-col justify-between bottom-0  left-10 right-10 fixed h-[10vh] items-center sm:flex-row border-t-2'>
      <div><Link target="_blank" href='https://www.instagram.com/_5lo_9/'>developed By@AlMardas</Link></div>
      <div><h1>جميع الحقوق محفوظة لـزعتر@٢٠٢٤</h1></div>
      
    </div>
  )
}

export default Footer