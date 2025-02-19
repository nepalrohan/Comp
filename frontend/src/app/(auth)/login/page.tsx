import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center items-center h-screen'>
<div className='w-[550px] bg-white rounded-xl shadow-md px-10 py-5'>
<h1 className='text-4xl text-center font-extrabold bg-gradient-to-r from-cyan-700 to-purple-500 text-transparent bg-clip-text '>Compare</h1>
<h1 className='text-3xl font-bold mt-2'>Login</h1>
<p className='text-sm font-bold text-gray-600'>Welcome back!</p>


<form>
    <div className='mt-4'>

        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' name='email' placeholder='Enter your email...' />
    </div>

    <div className='mt-4'>

<Label htmlFor='password'>Password</Label>
<Input id='password' name='password' type='password' placeholder='Enter your password...' />

<div className='text-right font-medium text-blue-500 mt-1 hover:underline'>
<Link href='/forget-password' >Forgot Password?</Link>

</div>
</div>


<div className='mt-4'>
    <Button className='w-full  text-white  bg-gradient-to-r from-cyan-700 to-purple-500 hover:bg-gradient-t0-r hover:from-cyan-600 hover:to-purple-400 transition-all duration-300 ease-in-out text-xl font-medium'>Login</Button>
</div>
</form>

<p className='mt-2 text-center '>Don't have an account ? <span className='text-blue-500 ml-1 hover:underline'><Link href='/register'>Register</Link></span></p>
</div>


    </div>
  )
}

export default page