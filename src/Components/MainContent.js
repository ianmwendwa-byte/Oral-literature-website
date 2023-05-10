import { Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



function MainContent(props) {

  return (
    <section className='ml-5 mt-5 w-full mr-5 '>
      <Paper elevation={3}>
        {/* title starts */}
        <div>
          <h1 className='text-5xl font-bold p-2 font-sans text-center'>{props.title}</h1>
        </div>
        {/* title ends */}
        <div className='p-4'>
          {props.body}
        </div>
   <div className='flex justify-between'>
    <Link className=' bg-purple-600 px-2 md:px-4  py-1 md:py-2 m-3 text-white rounded-l-2xl text-lg md:text-2xl hover:bg-white hover:text-purple-600 border-solid border-purple-600 border-2' onClick={() => props.previous()} >Previous Topic</Link>
    <Link className=' bg-purple-600 px-2 md:px-4  py-1 md:py-2 m-3 text-white rounded-r-2xl text-lg md:text-2xl hover:bg-white hover:text-purple-600 border-solid border-purple-600 border-2' onClick={() => props.next()} >Next Topic</Link>
   </div>
      </Paper>

    </section>
  )
}

export default MainContent