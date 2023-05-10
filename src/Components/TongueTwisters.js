import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'
import MainContent from './MainContent'
import { useNavigate } from 'react-router-dom/dist'
import axios from 'axios'
// loader
import CircleLoader from "react-spinners/CircleLoader";

function TongueTwisters() {
  const [twisters, setTwisters] = useState([]);
  const [oneTwister,setOneTwister] =useState([]);
  const [twisterId,setTwisterId] =useState();
  const [isLoading,setIsLoading] =useState();
  const navigate = useNavigate();

// loading
useEffect(()=>{
  setIsLoading(true)
  setTimeout(()=>{
   setIsLoading(false)
  },2000)
},[])




  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://oral-lierature-api.onrender.com/api/v1/twister');
        setTwisters(response.data.twisters);
        console.log(response.data.twisters);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  useEffect(() => {
    if (twisters.length > 0) {
        setTwisterId(0)
        setOneTwister(twisters[0]);
      console.log(oneTwister);
    }
  }, [twisters]);

  const handleClick =(id)=>{
    setTwisterId(id)
   setOneTwister(twisters[id])
  }
//   for previous
  const previous =()=>{
    setTwisterId(twisterId === 0 ? 0 : twisterId - 1);
   setOneTwister(twisters[twisterId === 0 ? 0 : twisterId - 1]);
  }
// for next
const next = () => {
    const nextTwisterId = twisterId + 1;
    if (nextTwisterId=== twisters.length) {
        alert('You have reached the end of the topic')
        navigate('/');
      }
    else{
        setTwisterId(nextTwisterId);
        setOneTwister(twisters[nextTwisterId]);
    }
    
    
  };



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
      <div className='flex '>
     <SideNav
     title="Tongue Twisters"
     subtopics={twisters.map((twister) => twister.Subtopic)}
     onClick={(id) => handleClick(id)}
     
     />
     <MainContent
     title={oneTwister.Subtopic}
     body={oneTwister.Content}
     previous={()=>previous()} 
     next={()=>next()} 
     
     />
      </div>
      <Footer/>
    </div>
}
    </div>
  )
}

export default TongueTwisters
