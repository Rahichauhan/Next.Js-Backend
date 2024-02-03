import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link href={"/"} className='font-bold text-white'>RCcoding
        </Link>
        <Link href={"/addTopic"}className='bg-white p-2 font-bold rounded-lg'>Add Topic</Link>

    </nav>
  )
}

export default Navbar