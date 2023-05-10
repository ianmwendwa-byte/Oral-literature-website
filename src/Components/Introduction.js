import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
// loader
import CircleLoader from "react-spinners/CircleLoader";

function Introduction() {
  const [isLoading,setIsLoading] =useState();

  // loading
useEffect(()=>{
  setIsLoading(true)
  setTimeout(()=>{
   setIsLoading(false)
  },2000)
},[])

  return (
    <div>
      {isLoading ? <div className='flex  flex-col justify-center items-center bg-purple-600 min-h-screen'> <CircleLoader
        color={'#fff'}
        loading={isLoading}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
       
      />
      <h1 className='text-white text-xl'>Please wait ....</h1>
       </div>
        :
    <div>
      <Header/>
      <section className='container mx-auto'>
        <Paper className='mt-6' elevation={3}>
        <div className='flex justify-center'>
         <div  className="h-60 bg-gradient-to-r from-purple-300 to-purple-600 flex items-center justify-center w-full">

            <h1 className='uppercase text-4xl md:text-6xl text-white text-center animate-bounce'>Introduction</h1>
        </div>
      </div>
      <div className='text-left p-3 text-xl'>
         Oral literature in Kenya is a rich and diverse tradition that has been passed down through generations by word of mouth.
           It encompasses various forms of storytelling, including folktales, proverbs, riddles, myths, legends, and songs.<br/><br/>
        The oral literature of Kenya is deeply rooted in the country's cultural heritage and reflects the beliefs, values, and experiences of its people. 
          These stories and songs often carry important moral lessons and serve as a means of preserving and transmitting cultural knowledge from one generation to the next. <br/><br/>
        Oral narratives, for example, often feature animal characters and illustrate the consequences of certain actions, while proverbs offer wisdom and advice for daily life.
           Riddles and myths also play an important role in Kenyan oral literature, serving to entertain, challenge, and educate listeners.<br/><br/>
       Overall, oral literature in Kenya is a vital part of the country's cultural identity and continues to be an important means of storytelling and cultural transmission in communities throughout the country.
      </div>
      <div className='flex justify-end'>
       
        <Link to='tonguetwister' className=' bg-purple-600 px-6 py-3 m-3 text-white rounded-r-2xl text-2xl hover:bg-white hover:text-purple-600 border-solid border-purple-600 border-2'>Start</Link>
      </div>
      </Paper>
      </section>

      <Footer/>
    </div>
}
    </div>
  )
}

export default Introduction
