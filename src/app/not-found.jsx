import React from 'react'
import Link from 'next/link';
const NotFound = () => {
  return (
    <div><h1>Not found page</h1>
        <Link href={"/"} >Return to home</Link>
     </div>
  )
}

export default NotFound