import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
// search bar
function SearchBar() {
const [search ,setSearch] =useState()
const [searchRes,setSearchRes] =useState([])
  const handleSubmit = async (event)=>{
    event.preventDefault();
try{

const response = await axios.get(`https://oral-lierature-api.onrender.com/api/v1/Search/${search}`)
setSearchRes(response.data)

}catch(error){
console.error(error)
}
  }

const handleChange=(event)=>{
  setSearch(event.target.value);
}


    return (
      <div >
        <form method="GET" onSubmit={handleSubmit} className='mb-3 flex justify-center' >
        <input type="text" placeholder="Search..."  className='w-9/12 border-solid border-2 border-purple-600 rounded-2xl p-1 lg:w-2/4'
        value={search}
        onChange={handleChange}
        />
        <button type='submit' className=' px-4 ml-2 bg-stone-600'><svg  className='bg-white'
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</button>
</form>
<div  className='absolute z-30 top-12  bg-white w-full shadow-lg '>
<ul className='m-4'>
  {searchRes.narratives && searchRes.narratives.map((narrative, index) => (
    <li key={index} className="text-lg"><h3 className='text-red-500'>{narrative.Subtopic}</h3>
    <p>{narrative.Content}</p>
    </li>
  ))}
</ul>

<ul className='m-4'>
  {searchRes.twisters && searchRes.twisters.map((twister, index) => (
    <li key={index} className="text-lg"><h3 className='text-red-500'>{twister.Subtopic}</h3>
    <p>{twister.Content}</p>
    </li>
  ))}
</ul>
<ul className='m-4'>
  {searchRes.riddles && searchRes.riddles.map((riddle, index) => (
    <li key={index} className="text-lg"><h3 className='text-red-500'>{riddle.Subtopic}</h3>
    <p>{riddle.Content}</p>
    </li>
  ))}
</ul>
<ul className='m-4'>
  {searchRes.proverbs && searchRes.proverbs.map((proverb, index) => (
    <li key={index} className="text-lg"><h3 className='text-red-500'>{proverb.Subtopic}</h3>
    <p>{proverb.Content}</p>
    </li>
  ))}
</ul>



</div>
      </div>
    );
  }
 //consts
 const [burger,setBurger]= useState(false);

  return (
    <div>
    <header className='mt-3 hidden lg:block'>
        <SearchBar/>
      <nav className='bg-purple-600 flex  justify-between text-white items-center'>
        {/* ---logo--- */}
         <div>
         <Link to='/'> <h1 className='text-2xl animate-pulse font-semibold cursor-pointer ml-3'  style={{animationDuration: '2s'}}>ORAL LITERATURE</h1></Link>

         </div>
        {/* ---links--- */}
         <div className='flex '>
         <Link  to='/' className='text-xl p-3 hover:bg-purple-950'>Introduction</Link>
         <Link  to='/tonguetwister' className='text-xl p-3 hover:bg-purple-950'>Tongue Twisters</Link>
         <Link to='/riddles' className='text-xl p-3 hover:bg-purple-950'>Riddles</Link>
         <Link to='/proverbs' className='text-xl p-3 hover:bg-purple-950'>Proverbs</Link>
         <Link  to='/narratives' className='text-xl p-3 hover:bg-purple-950'>Oral Narratives</Link>
        </div>
      </nav>
    </header>

    <header className='mt-3 block lg:hidden'>
        <SearchBar/>
      <nav className='bg-purple-600 flex  justify-between text-white items-center'>
        {/* ---logo--- */}
         <div>
          <h1 className='text-2xl animate-pulse font-semibold cursor-pointer ml-3 p-3'  style={{animationDuration: '2s'}}>ORAL LITERATURE</h1>

         </div>
        {/* ---links--- */}
        <svg  onClick={()=>{setBurger(true)}} className='w-10 mr-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </nav>
      <div className='bg-purple-50  absolute top-0  w-3/4 z-50 h-full transition-all ease-in-out ' style={{right:burger?'0px':'-5120px'}}>
        <div className='flex justify-end mr-5 mt-4 '>
      <svg   onClick={()=>{
        setBurger(false)
      }} className='w-10' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>

      <div className='flex flex-col '>
      <Link to='/' className='text-xl p-3 hover:bg-purple-200'>Introduction</Link>
         <Link  to='tonguetwister' className='text-xl p-3 hover:bg-purple-200'>Tongue Twisters</Link>
         <Link to='/riddles' className='text-xl p-3 hover:bg-purple-200'>Riddles</Link>
         <Link to='/proverbs' className='text-xl p-3 hover:bg-purple-200'>Proverbs</Link>
         <Link to='/narratives'  className='text-xl p-3 hover:bg-purple-200'>Oral Narratives</Link>
        </div>
      </div>
    </header>


    </div>
  )
}
