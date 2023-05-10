import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import MainContent from './MainContent';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// loader
import CircleLoader from "react-spinners/CircleLoader";

function Narratives() {
  const [narratives, setNarratives] = useState([]);
  const [oneNarrative,setOneNarrative] =useState([]);
  const [narrativeId,setNarrativeId] =useState();
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
        const response = await axios.get('https://oral-lierature-api.onrender.com/api/v1/narratives');
        setNarratives(response.data.narrative);
        console.log(response.data.narrative);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  useEffect(() => {
    if (narratives.length > 0) {
        setNarrativeId(0)
      setOneNarrative(narratives[0]);
      console.log(oneNarrative);
    }
  }, [narratives]);

  const handleClick =(id)=>{
    setNarrativeId(id)
   setOneNarrative(narratives[id])
  }
//   for previous
  const previous =()=>{
    setNarrativeId(narrativeId === 0 ? 0 : narrativeId - 1);
   setOneNarrative(narratives[narrativeId === 0 ? 0 : narrativeId - 1]);
  }
// for next
const next = () => {
    const nextNarrativeId = narrativeId + 1;
    if (nextNarrativeId === narratives.length) {
        alert('You have reached the end of the topic')
        navigate('/');
      }
    else{
        setNarrativeId(nextNarrativeId);
        setOneNarrative(narratives[nextNarrativeId]);
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
      <Header />
      <div className='flex'>
        <SideNav 

         title="Oral Narratives"
         subtopics={narratives.map((narrative) => narrative.Subtopic)}
         onClick={(id) => handleClick(id)}
         />
        
        <MainContent 

         title={oneNarrative.Subtopic}
         body={oneNarrative.Content}
         previous={()=>previous()} 
         next={()=>next()} 
        />
      </div>
      <Footer />
    </div>
}
    </div>
  );
}

export default Narratives;
