import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'
import MainContent from './MainContent'


// loader
import { DotLoader } from 'react-spinners'


function Riddles() {
  const [isLoading,setIsLoading] =useState();
  const [three,setThree] =useState([]);
  const [threeId,setThreeId] =useState(0);
  const [riddles,setRiddles] =useState([]);


  // data
const  fetchedRiddles = [
        {
            id: "64578495e98332712b21540d",
            Subtopic: "RIDDLES",
            Content:(
              <div>
              <p>
                Riddles have long been a popular form of traditional entertainment, used to challenge people's intellect and provide a source of amusement. In many Kenyan cultures, riddles are used as a way of transmitting knowledge and wisdom from one generation to the next.
              </p>
              <br/>
              <p>
                Riddles are typically short, humorous, and often incorporate elements of local culture and language. They are often presented in a question-and-answer format, with the answer being a pun or a play on words. Many riddles also contain moral lessons and cultural values.
              </p>
              <br/>
              <p>
                Some popular Kenyan riddles include:
              </p>
              <br/>
              <ol className='list-decimal pl-4'>
                <li>What goes up and never comes down? <strong className='px-4 text-purple-600 '>Age</strong></li><br/>
                <li>What has a neck but no head? <strong className='px-4 text-purple-600 ' >A bottle</strong></li><br/>
                <li>What is always in front of you but can't be seen? <strong className='px-4 text-purple-600 '>The future</strong></li><br/>
                <li>What is black when it's clean and white when it's dirty? <strong className='px-4 text-purple-600 '>A chalkboard</strong></li><br/>
                <li>What is always coming but never arrives? <strong className='px-4 text-purple-600 '>Tomorrow</strong></li><br/>
                <li>What has a mouth but can't speak? <strong className='px-4 text-purple-600 '>A river</strong></li><br/>
                <li>What is full of holes but still holds water? <strong className='px-4 text-purple-600 '>A sponge</strong></li><br/>
                <li>What is easy to get into but hard to get out of? <strong className='px-4 text-purple-600 '>Trouble</strong></li><br/>
              </ol>
              <p>
                Riddles continue to be a popular form of entertainment and education in Kenya, with many children and adults still enjoying them today.
              </p>
            </div>
            )
        },
        {
            id: "645784cde98332712b21540e",
            Subtopic: "Features of riddles ",
            Content:(
              <div>
              <p>
                Riddles have several features that make them unique and challenging:
              </p>
              <br/>
              <ul>
                <li> <h3 className='text-xl font-semibold  text-purple-600'>Wordplay</h3> Riddles often use wordplay, including puns, homophones, and other linguistic tricks, to create confusion and misdirection. For example, a riddle might use a word that has multiple meanings or sounds like another word to create ambiguity.</li>
               <br/>
                <li> <h3 className='text-xl font-semibold  text-purple-600'>Metaphors and symbolism</h3> Many riddles use metaphors and symbolism to describe the answer, often using comparisons or analogies to create a mental image. For example, a riddle might describe an object as "a key that unlocks no doors" to hint at the answer being a musical instrument like a guitar.</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Double meanings</h3> Riddles often contain double meanings, with the words and phrases used having both a literal and figurative interpretation. This can make them challenging to decipher and require a bit of creative thinking to solve.</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Context</h3> Riddles are often culturally specific, with references to local customs, traditions, and values. Understanding the cultural context of a riddle can be important for solving it.</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Playfulness</h3> Riddles are often playful and whimsical, with a touch of humor that makes them enjoyable to solve. This playful element can also make them more memorable and engaging.</li>
              </ul>
            </div>
            )
        },
        {
            id: "64578503e98332712b21540f",
            Subtopic: "Examples of riddles",
            Content:(
              <div>
              <ol>
                <li>What is it that runs without legs and never gets tired?<br/> <strong>Answer:</strong> <span>Water</span></li><br/>
                <li>What is it that you can catch but never throw?<br/> <strong>Answer:</strong> <span>A cold</span></li><br/>
                <li>What is it that has a heart that doesn't beat?<br/> <strong>Answer:</strong> <span>An artichoke</span> </li><br/>
                <li>What is it that always goes to bed with its shoes on?<br/> <strong>Answer:</strong> <span>A horse</span> </li><br/>
                <li>What is it that is always in front of you but can't be seen?<br/> <strong>Answer:</strong> <span>The future</span> </li><br/>
                <li>What has four legs in the morning, two legs in the afternoon, and three legs in the evening?<br/> <strong>Answer:</strong> <span>A human being (crawls as a baby, walks as an adult, and uses a cane in old age)</span> </li><br/>
                <li>What is it that starts with an E, ends with an E, but only contains one letter?<br/> <strong>Answer:</strong>  <span>An envelope</span></li><br/>
              </ol>
            </div>
            )
        },
        {
            id: "64578532e98332712b215410",
            Subtopic: "Answer the following questions",
            Content:(
              <div>
              <ol className='list-decimal ml-2'>
                <li>
                  What is a riddle?<br/>
                  <div className='p-4'>
                  <label>A. A short puzzle or problem that is meant to be solved</label><br/>
                  <label> B. A long story with a moral lesson</label><br/>
                  <label> C. A type of poetry that has a specific rhyme scheme</label><br/>
                  <label> D. A type of food that is often eaten for breakfast</label>
                  </div>
                </li>
                <li>
                  What are some common features of riddles?<br/>
                  <div className='p-4'>
                  <label> A. They are meant to be solved</label><br/>
                  <label>B. They are usually short and concise</label><br/>
                  <label> C. They often use figurative language or wordplay</label><br/>
                  <label> D. All of the above</label>
                  </div>
                </li>
                <li>
                  Which of the following is an example of a riddle?<br/>
                  <div className='p-4'>
                  <label> A. A story about a princess who was cursed by a witch</label><br/>
                  <label> B. A math problem that asks you to find the value of x</label><br/>
                  <label> C. A question that asks "What has a head, a tail, is brown, and has no legs?"</label><br/>
                  <label> D. A recipe for making chocolate chip cookies</label>
                  </div>
                </li>
                <li>
                  What is the purpose of a riddle?<br/>
                  <div className='p-4'>
                  <label> A. To entertain and challenge the listener</label><br/>
                  <label> B. To provide a moral lesson</label><br/>
                  <label> C. To teach a historical event or fact</label><br/>
                  <label> D. To advertise a product or service</label>
                  </div>
                </li>
                <li>
                  Which of the following is an example of a riddle that uses wordplay?<br/>
                  <div className='p-4'>
                  <label> A. What is black and white and read all over?</label><br/>
                  <label> B. What has a neck but no head, two arms but no hands?</label><br/>
                  <label> C. What is always in front of you but can't be seen </label><br/>
                  <label> D. All of the above </label>   
                  </div>
                </li>  
                </ol>      
                </div> 
            )
        }
    ]


    // loading
useEffect(()=>{
  setIsLoading(true)
  setTimeout(()=>{
   setIsLoading(false)
  },2000)
},[])

useEffect(()=>{
setRiddles(fetchedRiddles)
setThree(fetchedRiddles[0])
},[])
  
  //side bar onclick
  const handleClick =(id)=>{
    setThreeId(id)
   setThree(riddles[id])
  }
//   for previous
  const previous =()=>{
    setThreeId(threeId === 0 ? 0 : threeId - 1);
   setThree(riddles[threeId === 0 ? 0 : threeId - 1]);
  }
// for next
const next = () => {
    const nextOneId = threeId + 1;
    if (nextOneId=== riddles.length) {
        alert('You have reached the end of the topic')
       
      }
    else{
        setThreeId(nextOneId);
        setThree(riddles[nextOneId]);
    }
    
    
  };



  return (
    <div>
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
     title="Riddles"
     subtopics={riddles.map((riddle) => riddle.Subtopic)}
     onClick={(id) => handleClick(id)}
     
     />
     <MainContent
     title={three.Subtopic}
     body={three.Content}
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

export default Riddles
