import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SideNav from './SideNav'
import MainContent from './MainContent'

// loader
import { DotLoader } from 'react-spinners';

function TongueTwisters() {

  const [isLoading,setIsLoading] =useState();
  const [one,setOne] =useState([]);
  const [oneId,setOneId] =useState(0);


  // data
const  twisters =[
        {
            id: "6457834ee98332712b215408",
            Subtopic: "TONGUE TWISTERS",
            Content:(
              <div>
              <p>
                Tongue twisters are phrases or sentences that are difficult to say quickly and correctly due to the repetition of certain sounds or letters. They are often used as a fun and challenging way to practice pronunciation and improve speech clarity. Some popular examples of tongue twisters include:
              </p>
              <br/>
              <ul>
                <li>"She sells seashells by the seashore."</li><br/>
                <li>"How much wood would a woodchuck chuck, if a woodchuck could chuck wood?"</li><br/>
                <li>"Peter Piper picked a peck of pickled peppers."</li><br/>
                <li>"Red lorry, yellow lorry."</li><br/>
                <li>"I saw Susie sitting in a shoeshine shop."</li><br/>
                <li>"Unique New York."</li><br/>
                <li>"Toy boat, toy boat, toy boat."</li><br/>
                <li>"Irish wristwatch, Swiss wristwatch."</li><br/>
                <li>"Black bug's blood."</li><br/>
                <li>"Six sick hicks nick six slick bricks with picks and sticks."</li><br/>
              </ul>
              <br/>
              <p>These tongue twisters can be a fun way to challenge yourself and improve your speech clarity.</p>
            </div>
            )
        },
        {
            id: "6457838ee98332712b215409",
            Subtopic: "Features of tongue twisters ",
            Content:(
              <div>
              <p>
                Tongue twisters have several features that make them unique and challenging:
              </p>
              <br/>
              <ul>
                <li> <h3 className='text-xl font-semibold  text-purple-600'>Alliteration</h3> Tongue twisters often use alliteration, which is the repetition of the same sound at the beginning of multiple words in a phrase or sentence. For example, "She sells seashells by the seashore" uses alliteration with the repeated "s" sound.</li>
               <br/>
                <li> <h3 className='text-xl font-semibold  text-purple-600'>Consonant Clusters</h3>Tongue twisters also often contain clusters of consonants that are difficult to pronounce together quickly. For example, "Peter Piper picked a peck of pickled peppers" contains several clusters of p's, k's, and l's.</li>
               <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Repetition</h3> Many tongue twisters repeat sounds, syllables, or words, which can make them more difficult to say quickly and accurately. For example, "Red lorry, yellow lorry" repeats the phrase "lorry" multiple times.</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Rhyme</h3>Some tongue twisters use rhyme to add an additional level of difficulty. For example, "I saw Susie sitting in a shoeshine shop" rhymes "saw" with "shop".</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Length</h3> The length of a tongue twister can also make it more challenging. The longer the phrase or sentence, the more difficult it can be to say quickly and correctly.</li>
              </ul>
              <br/>
              <p>
                Overall, tongue twisters are designed to be challenging and fun, while also helping to improve speech clarity and pronunciation.
              </p>
            </div>
            
            )
        },
        {
            id: "645783cde98332712b21540a",
            Subtopic: "More examples of tongue twisters ",
            Content:(
              <div>
              <ol className='list-decimal ml-3'>
                <li> How much wood would a woodchuck chuck, if a woodchuck could chuck wood?</li><br/>
                <li> She sells seashells by the seashore.</li><br/>
                <li> Peter Piper picked a peck of pickled peppers.</li><br/>
                <li> Unique New York.</li><br/>
                <li> Irish wristwatch, Swiss wristwatch.</li><br/>
                <li> Red lorry, yellow lorry.</li><br/>
                <li> I saw Susie sitting in a shoeshine shop.</li><br/>
                <li> Betty Botter bought some butter, but she said, "This butter's bitter! If I put it in my batter, it will make my batter bitter. But a bit of better butter will make my batter better."</li><br/>
                <li> How can a clam cram in a clean cream can?</li><br/>
                <li> How much ground would a groundhog hog, if a groundhog could hog ground?</li><br/>
                <li> She stood on the balcony, inexplicably mimicking him hiccuping and amicably welcoming him in.</li><br/>
                <li> Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't very fuzzy, was he?</li><br/>
              </ol>
            </div>
            
            )
        },
        {
            id: "64578405e98332712b21540b",
            Subtopic: "Answer the following questions",
           Content:(
            <div>
              <ol className='list-decimal p-4 lg:mb-7'>
                <li>What is a tongue twister?</li><br/>
                <li>What are some features of tongue twisters that make them difficult to say?</li><br/>
                <li>Can you think of a tongue twister that uses alliteration? What is the repeated sound?</li><br/>
                <li>What is the difference between a tongue twister and a regular sentence?</li><br/>
                <li>Why do people practice tongue twisters?</li>
              </ol>
            </div>
           )
        },
    ]



  

  useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
     setIsLoading(false)
    },2000)
  },[])
    
  useEffect(()=>{
    setOneId(0)
    setOne(twisters[0])
   
    },[])

    //side bar onclick
    const handleClick =(id)=>{
      setOneId(id)
     setOne(twisters[id])
    }
  //   for previous
    const previous =()=>{
      setOneId(oneId === 0 ? 0 : oneId - 1);
     setOne(twisters[oneId === 0 ? 0 : oneId - 1]);
    }
  // for next
  const next = () => {
      const nextOneId = oneId + 1;
      if (nextOneId=== twisters.length) {
          alert('You have reached the end of the topic')
         
        }
      else{
          setOneId(nextOneId);
          setOne(twisters[nextOneId]);
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
     title="Tongue Twisters"
     subtopics={twisters.map((twister) => twister.Subtopic)}
     onClick={(id) => handleClick(id)}
     
     />
     <MainContent
     title={one.Subtopic}
     body={one.Content}
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
