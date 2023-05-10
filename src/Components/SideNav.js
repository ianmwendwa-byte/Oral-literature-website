import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import FitbitIcon from '@mui/icons-material/Fitbit';
function SideNav(props) {
  return (
    <div className='w-72 bg-purple-300 hidden lg:block shadow-md'>
      <nav className='flex flex-col text-white text-lg mt-4'>
        {/* 1 */}
       <div>
        <h1 className='text-xl '><CheckIcon/><span  className='text-lg text-red-500 uppercase'>{props.title}</span></h1>
        <ul className=" flex flex-col list-disc">
        {props.subtopics.map((subtopic, index) => (
           <li key={index} className='text-lg py-2 pl-8 hover:bg-purple-600 flex active:underline' onClick={() => props.onClick(index)}><FitbitIcon className='mt-1'/>{subtopic}</li>
         ))}
      </ul>
     
       </div>
      </nav>
    </div>
  )
}

export default SideNav

