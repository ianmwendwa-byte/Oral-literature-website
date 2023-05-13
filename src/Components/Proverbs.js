import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'
import MainContent from './MainContent'
// loader
import { DotLoader } from 'react-spinners'

function Proverbs() {
 
  const [isLoading,setIsLoading] =useState();
  const [two,setTwo] =useState([]);
  const [twoId,setTwoId] =useState(0);
  const [all,setAll]=useState([]);

  //data
 
 const proverbs= [
        {
            id: "645785ace98332712b215411",
            Subtopic: "PROVERBS",
            Content:(
              <p>
              Proverbs are short, pithy sayings that express a general truth or piece of advice. They are often handed down from generation to generation and are a form of traditional wisdom. Proverbs can be found in many different cultures and languages around the world, and they are often used in everyday speech to communicate a message or offer guidance.
              <br/><br/>
              Proverbs are characterized by their brevity, clarity, and universality. They are often based on observations of human behavior, nature, or society and provide insight into the complexities of life. Proverbs can be serious or humorous, and they are often used to teach a lesson, encourage good behavior, or caution against bad behavior.
              <br/><br/>
              Proverbs are an important part of many cultures and are often used in literature, poetry, and other forms of art. They can be used to illustrate a point, provide a cultural context, or simply to add flavor to a piece of writing. Proverbs can also be used in education to teach students about cultural values and provide them with life skills that can be used in a variety of situations.
              <br/><br/>
            </p>
            
            )
        },
        {
            id: "645785ece98332712b215412",
            Subtopic: "Features of proverbs",
            Content:(
              <ul>
              <li><h3 className='text-xl font-semibold  text-purple-600'>Conciseness</h3> Proverbs are short and to the point. They convey a message or offer advice in just a few words or phrases. This brevity is what makes proverbs easy to remember and use in everyday conversation.</li>
              <br/>
              <li> <h3 className='text-xl font-semibold  text-purple-600'>Figurative language</h3> Proverbs often use figurative language, such as metaphors, similes, or analogies, to convey a message. For example, "Actions speak louder than words" is a proverb that uses a metaphor to convey the idea that what a person does is more important than what they say.</li>
              <br/> 
              <li> <h3 className='text-xl font-semibold  text-purple-600'>Universality</h3>Proverbs often express a universal truth or piece of advice that applies to everyone, regardless of their culture or background. This universality is what makes proverbs so useful and applicable in a variety of situations.</li>
              <br/>
              <li> <h3 className='text-xl font-semibold  text-purple-600'>Poetic quality</h3> Proverbs often have a poetic quality to them, with a rhythmic or lyrical quality that makes them easy to remember and recite. This poetic quality can make proverbs more memorable and effective in conveying a message.</li>
              <br/>
              <li> <h3 className='text-xl font-semibold  text-purple-600'>Practicality</h3> Proverbs are often used to provide practical advice or guidance for everyday life. They can offer solutions to common problems, suggest ways to avoid trouble, or provide insight into human behavior.</li>
            </ul>
            )
          },
        {
            id: "64578629e98332712b215413",
            Subtopic: "Examples of proverbs",
            Content:(
                 <ul className='mt-3'>
                  <li>
                    <strong className=' text-purple-600'>When in Rome, do as the Romans do.</strong><br/>
                    This proverb suggests that when you are in a new place, it is important to follow the customs and traditions of that place.
                  </li>
                  <br/>
                  <li>
                    <strong className=' text-purple-600'>A stitch in time saves nine.</strong><br/>
                    This proverb suggests that it is better to fix a problem early on, before it becomes bigger and more difficult to solve.
                  </li>
                  <br/>
                  <li>
                    <strong className=' text-purple-600'>Actions speak louder than words.</strong><br/>
                    This proverb suggests that what a person does is more important than what they say.
                  </li>
                  <br/>
                  <li>
                    <strong className=' text-purple-600'>All's fair in love and war.</strong><br/>
                    This proverb suggests that in certain situations, it is acceptable to do whatever it takes to achieve your goals.
                  </li>
                  <br/>
                  <li>
                    <strong className=' text-purple-600'>When the going gets tough, the tough get going.</strong><br/>
                    This proverb suggests that in difficult situations, strong and determined people will persevere and succeed.
                  </li>
                  <br/>
                  <li>
                    <strong className=' text-purple-600'>An apple a day keeps the doctor away.</strong><br/>
                    This proverb suggests that if you eat healthy foods and take care of yourself, you will be less likely to get sick.
                  </li>
                  
                </ul>
            )
        },
        {
            id: "64578660e98332712b215414",
            Subtopic: "Exercise",
            Content:(
              <ol className='list-decimal p-4'>
               <li >What is the meaning of the proverb "A penny saved is a penny earned"?</li>
               <br/>
              <li >How might the proverb "Don't put all your eggs in one basket" apply to investing?</li>
              <br/>
              <li >What does the proverb "Practice makes perfect" suggest about the importance of hard work?</li>
              <br/>
              <li>How does the proverb "Birds of a feather flock together" relate to social relationships?</li>
              <br/>
              <li>What is the message behind the proverb "Every cloud has a silver lining"?</li>
              <br/>
              <li>How might the proverb "Actions speak louder than words" apply to leadership?</li>
              <br/>
              <li>What does the proverb "There's no place like home" suggest about the importance of family and community?</li>
              <br/>
              <li>How does the proverb "Where there's smoke, there's fire" relate to rumors and gossip?</li>
              <br/>
              <li>What is the meaning of the proverb "The squeaky wheel gets the grease"?</li>
              <br/>
              <li>How might the proverb "When the going gets tough, the tough get going" apply to overcoming challenges in life?</li>
            </ol>
            )
        },
    ]




   // loading
useEffect(()=>{
  setIsLoading(true)
  setTimeout(()=>{
   setIsLoading(false)
  },2000)
},[])

useEffect(()=>{
  setAll(proverbs)
  setTwo(proverbs[0])
  console.log(proverbs)
  },[])
  //side bar onclick
  const handleClick =(id)=>{
    setTwoId(id)
   setTwo(all[id])
  }
//   for previous
  const previous =()=>{
    setTwoId(twoId === 0 ? 0 : twoId - 1);
   setTwo(all[twoId === 0 ? 0 : twoId - 1]);
  }
// for next
const next = () => {
    const nextOneId = twoId + 1;
    if (nextOneId=== all.length) {
        alert('You have reached the end of the topic')
       
      }
    else{
        setTwoId(nextOneId);
        setTwo(all[nextOneId]);
    }
    
    
  };

  


  return (<div>
      {isLoading ? <div className='flex  flex-col justify-center items-center bg-white min-h-screen'> <DotLoader 
        color={'#a855f7'}
        loading={isLoading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
       
      />
      <h1 className='text-purple-600 text-xl'>Please wait ....</h1>
       </div>
        :


    <div>
      <Header/>
      <div className='flex '>
     <SideNav
     title="Proverbs"
     subtopics={all.map((all) => all.Subtopic)}
     onClick={(id) => handleClick(id)}
     
     />
     <MainContent
     title={two.Subtopic}
     body={two.Content}
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

export default Proverbs
