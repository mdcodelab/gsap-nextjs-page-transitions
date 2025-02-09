import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="w-full h-[5rem] flex items-center 
    justify-between pl-4 pr-4 bg-gray-200">
    <div className="logo">
        <h1 className="text-2xl">Logo</h1>
    </div>
    <div className="text-2xl">
    <Link href="/" className="mr-2">Home</Link>
      <Link href="/about" className="mr-2">About</Link>
      <Link href="/work">Work</Link>
    </div>
    </div>
  )
}

export default Navbar
