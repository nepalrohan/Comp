import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center '>
<div>
    <Image src='/banner.svg' alt='banner' width={500} height={500} />
</div>
<div className='text-center mt-4'>
    <h1 className='text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-cyan-700 to-purple-500 text-transparent bg-clip-text '>Compare</h1>
    <p className='text-2xl md:text-3xl lg:text-4xl font-bold '>Discover the better choice, together!</p>
  <Link href="/login">
    <Button className='font-bold px-10 rounded-3xl  py-5 bg-gradient-to-r from-cyan-700 to-purple-500 text-white text-lg mt-4 '>Start free</Button>
    </Link>
</div>
    </div>
  )
}

export default HeroSection