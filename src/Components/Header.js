import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Header() {

 //consts
 const [burger,setBurger]= useState(false);

  return (
    <div className=' overflow-hidden'>
    <header className='hidden lg:block'>
        
      <nav className='bg-purple-600 flex  justify-between text-white items-center'>
        {/* ---logo--- */}
         <div>
         <Link to='/'> <h1 className='text-2xl animate-pulse font-semibold cursor-pointer ml-3'  style={{animationDuration: '2s'}}>ORAL LITERATURE</h1></Link>

         </div>
        {/* ---links--- */}
         <div className='flex '>
         <Link  to='/tonguetwister' className='text-xl p-3 hover:bg-purple-950'>Tongue Twisters</Link>
         <Link to='/riddles' className='text-xl p-3 hover:bg-purple-950'>Riddles</Link>
         <Link to='/proverbs' className='text-xl p-3 hover:bg-purple-950'>Proverbs</Link>
         <Link  to='/narratives' className='text-xl p-3 hover:bg-purple-950'>Oral Narratives</Link>
        </div>
      </nav>
    </header>

    <header className='block lg:hidden'>
      <nav className='bg-purple-600 flex  justify-between text-white items-center'>
        {/* ---logo--- */}
         <div>
         <Link to='/'> <h1 className='text-2xl animate-pulse font-semibold cursor-pointer ml-2'  style={{animationDuration: '2s'}}>ORAL LITERATURE</h1></Link>

         </div>
        {/* ---links--- */}
        <svg  onClick={()=>{setBurger(true)}} className='w-10 mr-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </nav>
      <div className='bg-purple-50  absolute top-0  w-3/4 z-50 h-full transition-all ease-in-out overflow-hidden right-0' style={{display:burger?'block':'none'}}>
        <div className='flex justify-end mr-5 mt-4 '>
      <svg   onClick={()=>{
        setBurger(false)
      }} className='w-10 m-3' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>

      <div className='flex flex-col '>
         <Link  to='/tonguetwister' className='text-xl p-3 hover:bg-purple-200'>Tongue Twisters</Link>
         <Link to='/riddles' className='text-xl p-3 hover:bg-purple-200'>Riddles</Link>
         <Link to='/proverbs' className='text-xl p-3 hover:bg-purple-200'>Proverbs</Link>
         <Link to='/narratives'  className='text-xl p-3 hover:bg-purple-200'>Oral Narratives</Link>
        </div>
      </div>
    </header>


    </div>
  )
}
