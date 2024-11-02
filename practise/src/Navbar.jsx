import React from 'react';
import Logo from  '../src/download.jpeg'
const Navbar = () => {
    return (
        <div className='shadow-sm'>
        <nav className='container mx-auto shadow-sm  bg-gray-100 flex justify-between items-center p-4'>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <ul className='flex gap-6'>
          <li><a href="#" className='hover:text-pink-700'>Home</a>{""}</li>
          <li><a href="#" className='hover:text-pink-700'>About</a>{""}</li>
          <li><a href="#" className='hover:text-pink-700'>Contact</a>{""}</li>
        </ul>
    
    
    
    
        </nav>
      </div>
    );
};

export default Navbar;