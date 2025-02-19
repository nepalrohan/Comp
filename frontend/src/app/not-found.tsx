import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function NotFound() {
  return (
    <div className='flex items-center flex-col justify-center gap-5'>
       <div>
        <Image src='/pagenotfound.svg' alt='404' width={500} height={500} />
       </div>
        <Link href='/' className='text-lg bg-green-600 text-white font-bold px-8 py-3 rounded-xl'>Return Home</Link>
    </div>
  )
}

export default NotFound;