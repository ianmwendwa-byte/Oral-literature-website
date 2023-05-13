import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import MainContent from './MainContent';
// loader
import { DotLoader } from 'react-spinners';
// icons
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function Narratives() {
  const [isLoading,setIsLoading] =useState();
  const [one,setOne] =useState([]);
  const [oneId,setOneId] =useState(0);
//data



const narratives = [
      {
          id: "64577b60e98332712b2153f3",
          Subtopic: 'Introduction to oral narratives',
          Content: (
            <div>
              <p>Oral narratives refer to the various forms of storytelling that have been passed down orally from generation to generation. These narratives include myths, legends, among others.</p>
              <br/>
              <p>Myths often explain the origins of things, such as the creation of the world or the explanation of natural phenomena. Legends describe the deeds of heroes and heroines or supernatural beings. These stories are often used to convey moral lessons and cultural values, and are an important means of preserving and transmitting cultural knowledge.</p>
              <br/>
              <p>Generally, oral narratives in Kenya are a rich and diverse tradition that continues to be an important means of storytelling, entertainment, and cultural transmission in communities throughout the country.</p>
            </div>
          )
      },
      {
          id: "64577d66e98332712b2153f4",
          Subtopic: "Features of oral narratives ",
          Content: (
            <div className=''>
              <p>There are several common features of oral narratives that are found across many cultures and traditions. These include:</p>
              <ul className='p-3'>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Performance</h3> Oral narratives are often performed in front of an audience, and are designed to be engaging and entertaining. The storyteller uses various techniques, such as voice modulation and gestures, to captivate the audience and bring the story to life.</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Repetition</h3> Oral narratives often use repetition to reinforce key themes and ideas. This can include repeated phrases or motifs that serve to emphasize important elements of the story.</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Imagery</h3>  Oral narratives often use vivid imagery to help the audience visualize the characters and events of the story. This can include descriptions of settings, characters, and actions that help to create a rich and immersive world for the listener.</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Symbolism</h3>  Oral narratives often use symbols to represent larger ideas or concepts. These symbols may be repeated throughout the story and can serve to reinforce important themes and messages.</li>
                <br/>
                <li><h3 className='text-xl font-semibold  text-purple-600'>Morality</h3> Many oral narratives have a moral or lesson at the end, teaching the listener about the consequences of certain actions or behaviors. This moral or lesson is often conveyed through the actions and decisions of the characters in the story.</li>
              </ul>
            </div>
          )
      },
      {
          id: "64577dabe98332712b2153f5",
          Subtopic: "OGRE NARRATIVES",
          Content: (
            <div>
              <p>Ogre narratives are a type of oral narrative that are found in many cultures around the world. These stories feature ogres, which are typically depicted as large, powerful, and often malevolent creatures that prey on humans.</p>
              <br/>
              <p>In ogre narratives, the ogre is usually portrayed as a villain or antagonist, and is often depicted as a symbol of greed, corruption, and excess. The ogre is typically associated with negative traits such as gluttony, aggression, and cruelty, and is often used to teach important moral lessons about the consequences of these behaviors.</p>
              <br/>
              <p>Many ogre narratives also feature a hero or protagonist who must confront and overcome the ogre in order to achieve some goal or objective. This hero may be a human or animal character and often demonstrates qualities such as bravery, intelligence, and resourcefulness.</p>
              <br/>
              <p>Ogre narratives serve as a means of exploring complex moral issues and teaching important lessons about the human condition. They often feature vivid imagery and memorable characters and are designed to engage and entertain audiences while conveying important cultural values and beliefs.</p>
            </div>
          )
        },
      {
          id: "64577de6e98332712b2153f6",
          Subtopic: "Features of ogre narratives ",
          Content: (
            <div>
              <p>Ogre narratives are a type of oral narrative that are found in many cultures around the world. These stories feature ogres, which are typically depicted as large, powerful, and often malevolent creatures that prey on humans.</p>
              <br/>
              <p>In ogre narratives, the ogre is usually portrayed as a villain or antagonist, and is often depicted as a symbol of greed, corruption, and excess. The ogre is typically associated with negative traits such as gluttony, aggression, and cruelty, and is often used to teach important moral lessons about the consequences of these behaviors.</p>
              <br/>
              <p>Many ogre narratives also feature a hero or protagonist who must confront and overcome the ogre in order to achieve some goal or objective. This hero may be a human or animal character and often demonstrates qualities such as bravery, intelligence, and resourcefulness.</p>
              <br/>
              <p>Ogre narratives serve as a means of exploring complex moral issues and teaching important lessons about the human condition. They often feature vivid imagery and memorable characters and are designed to engage and entertain audiences while conveying important cultural values and beliefs.</p>
            </div>
          )
        },
        {
          id: "64577e2fe98332712b2153f7",
          Subtopic: "Ogre narrative example",
          Content: (
            <div>
              <p>A long long time ago before the age of Ndemi and Mathathi, a man dwelt with his newly married wife on the edge of the forest. The man was a member of the Smith Guild, Aturi, a group in Gikuyu Society whose profession was extracting iron from the earth, smelting it and fashioning it into such implements as spears, swords, knives, bracelets, and such. </p>
             <br/>
              <p>This was a highly protected craft and one had to be inducted through a long and expensive apprenticeship as well as complicated esoteric rituals.The smiths, Aturi, usually conducted their work in a consecrated place, Kiganda, far away from their homes. This place was given a wide berth by ordinary mortals and no one could approach it without requisite purification.It was out of bounds to women and un-initiated men.</p>
              <br/>
              <p>Our newly married smith left his young wife alone and pregnant at home and went to join his fellow smiths a long way from home.  In due time, his wife was delivered of a baby. The manner of Gikuyu maternity services then was for a professional midwife to be called and together with some chosen assistants, she would perform the delivery inside the woman’s hut, Nyumba.</p>
              <br/>
              <p>Once a woman was delivered of a baby, she was nursed for several weeks so that she could get her strength back. It was not uncommon for the happy father to slaughter a goat for the woman.  The soup was believed to be very ideal for quickly reviving the woman. This was called 'warming up' kūhiūhīria.</p>
              <br/>
              <p>This particular poor woman was delivered and nursed by an ogre. Every time the ogre came back from collecting firewood from the forest, it would let the firewood drop from its back and say, 'newly delivered, (Wagaciairi) may you fall with that sound!' Wagaciairi ūrogwa na mūgambo ucio! After heating some leftovers, the ogre would pass some to the woman, saying, 'Wagaciairi have some,' but before she could reach it, the ogre would snap it back, saying, 'Ahh! You have refused? Let me eat it for you.'</p>
              <br/>
              <p>This went on until the woman became so frail that she was about to die.A dove used to perch on a tree just outside the woman’s Nyumba and could observe all this.This dove used to be fed with chaise castor oil seeds by the woman before she became bedridden. The dove after deciding enough was enough flew off all the way to the distant smithy where the man was working. </p> 
              <br/>
              <p>It perched on a tree near the smithy and began to sing:</p>
              <br/>
                <div className='text-center text-purple-600'>
                <p>Mūturi ūgūtura-ī – Cangarara-īca </p> 
                <p>Tura tura narua-ī – Cangarara-īca</p>
                <p>Mūkaguo anaciara-ī – Cangarara-īca</p>
                <p>Aciarithio nī irimù-ī – Cangarara-īca </p>
                 <p>Akerwo ndūke tūhiūhio-ī – Cangarara-īca </p>
                 <p>Na warega Ngarīa-ī – Cangarara-īca </p> 
                 <p>Smith that smith smith – too comfy, Oh! no.</p>
                 <p>Smith faster faster – too comfy, Oh! no.</p>
                 <p>Your wife has been delivered – too comfy, Oh!</p>
                  </div>
                </div>
          )
          },
      {
          id: "64577e85e98332712b2153f8",
          Subtopic: "Answer the following exercise",
          Content:(
            <div>
              <ol className='list-decimal p-3'>
                <li>How does the story use imagery to create a vivid and engaging world for the listener?</li>
               <br/>
               <li>What is the moral lesson that the story is trying to teach, and how do the characters and events in the story contribute to this message?</li>
               <br/>
                <li>In what ways does the story use repetition to reinforce important themes and motifs?</li>
                <br/>
                <li>How does the hero of the story demonstrate qualities such as bravery and resourcefulness? What can we learn from his character and actions?</li>
                <br/>
                <li>How does the storyteller use language and tone to engage and captivate the listener?</li>
              </ol>
          </div>
          )
      },
      {
          id: "64577ed2e98332712b2153f9",
          Subtopic: "TRICKSTER NARRATIVES",
          Content:(
          <div>
              Trickster narratives are a type of oral narrative found in many cultures around the world. These stories feature a trickster character, who is often a mischievous or cunning figure who uses their wit and intelligence to outsmart others and achieve their goals.<br/><br/>
              Tricksters are often seen as outsiders or rebels who challenge authority and upset the status quo. They may be animal or human characters, and are often associated with chaos, disruption, and creativity.<br/><br/>
              Trickster narratives typically involve a series of clever tricks or deceptions that the trickster uses to gain an advantage over others. These tricks may involve stealing, lying, or manipulating others, but they are almost always done with a sense of humor and playfulness.<br/><br/>
              Trickster narratives are often used to teach important moral lessons about the consequences of greed, dishonesty, and selfishness. They also serve as a means of exploring complex social issues such as power, authority, and inequality.<br/><br/>
              Overall, trickster narratives are a vibrant and entertaining form of storytelling that continue to captivate audiences around the world. They offer a unique perspective on the human condition and provide valuable insights into the nature of power, identity, and social change.
          </div>
          )
      },
      {
          id: "64577f17e98332712b2153fa",
          Subtopic: "Trickster narrative example",
          Content:(
            <div>
                One of the most famous trickster narratives in Kenya is the story of Anansi the Spider, which originated in West Africa but has spread throughout many parts of the continent. In the Kenyan version of the story, Anansi is a clever and mischievous spider who is always getting into trouble.<br/><br/>
                One day, Anansi decides to steal a bag of food from a neighboring village. He sneaks into the village at night and finds the bag, but as he is making his escape, he is caught by the village chief. The chief is furious and demands that Anansi return the food, but Anansi refuses and instead challenges the chief to a game of wits.<br/><br/>
                The chief agrees, and Anansi suggests a game of hide and seek. Anansi tells the chief to close his eyes and count to ten while he hides. The chief agrees, but when he opens his eyes, Anansi is nowhere to be seen.<br/><br/>
                As it turns out, Anansi has hidden himself inside the bag of food. When the chief finds the bag, he assumes that Anansi has escaped and begins to eat the food. But Anansi has a plan - he begins to tickle the chief's nose from inside the bag, causing him to sneeze uncontrollably.<br/><br/>
                Eventually, the chief becomes so annoyed that he throws the bag of food into the river, and Anansi is able to escape. From that day on, Anansi becomes a beloved figure in the village, known for his cleverness and wit.<br/><br/>
                The story of Anansi the Spider is a classic example of a trickster narrative, featuring a clever and resourceful protagonist who uses his intelligence to outsmart his opponents. It also highlights important themes such as power, authority, and the consequences of greed and dishonesty.
            </div>
          )
      },
      {
          id: "64577f88e98332712b2153fc",
          Subtopic: "Features of trickster narrative found in the story",
          Content:(
            <div>
              The story of Anansi the Spider is a classic example of a trickster narrative, which is a type of oral narrative that features a cunning and mischievous protagonist who uses his wit and intelligence to outsmart his opponents. Here are some of the key features of the narrative:<br/><br/>
              <strong>Protagonist:</strong> The protagonist of the story is Anansi, a spider who is known for his cleverness and wit. He is portrayed as a trickster who enjoys playing pranks on others and is always looking for a way to gain an advantage.<br/><br/>
              <strong>Antagonist:</strong> The antagonist of the story is the village chief, who catches Anansi stealing a bag of food and demands that he return it. The chief is portrayed as a stern and powerful figure who represents authority and order.<br/><br/>
              <strong>Conflict:</strong> The conflict in the story arises when Anansi is caught stealing and must use his wits to outsmart the village chief and keep the food for himself.<br/><br/>
              <strong>Trickery:</strong> The main theme of the story is trickery, which is demonstrated by Anansi's clever plan to hide in the bag of food and tickle the chief's nose from inside. The story emphasizes the importance of wit and intelligence over physical strength and power.<br/><br/>
              <strong>Humor:</strong> The story is told with a sense of humor, as Anansi's pranks and tricks are portrayed in a lighthearted and playful manner. The use of humor helps to engage the listener and make the story more memorable.<br/><br/>
              <strong>Moral Lesson:</strong> The story has a moral lesson about the consequences of greed and dishonesty. Anansi's actions ultimately lead to his own success, but the story also highlights the negative consequences of his dishonest behavior and the importance of treating others with respect and honesty.<br/><br/>
              Overall, the story of Anansi the Spider is a classic example of a trickster narrative that uses humor and wit to teach an important moral lesson. It highlights the importance of intelligence and resourcefulness over physical strength and power and demonstrates the value of honesty and respect in human relationships.
            </div>
          )
      },
      {
          id: "64577fcee98332712b2153fd",
          Subtopic: "Answer the following questions",
          Content:(<div>
          <ol className='list-decimal p-3'>
            <li>Who is the protagonist of the story, and how is he described?</li>
            <br/>
            <li>What is the conflict in the story, and how does the protagonist try to resolve it?</li>
            <br/>
            <li>What is the main theme of the story, and how is it demonstrated?</li>
            <br/>
            <li>How does the use of humor in the story help to engage the listener and make the story more memorable?</li>
            <br/>
            <li>What is the moral lesson of the story, and how is it demonstrated through the actions of the protagonist?</li>
            <br/> 
            <li>How does the story of Anansi the Spider fit into the larger tradition of trickster narratives, and what are some of the common features of this type of oral narrative?</li>
            <br/>
            <li>How does the story challenge traditional ideas of power and authority, and what does it suggest about the role of intelligence and resourcefulness in achieving success?</li>
            <br/>
            <li>What is the significance of the spider as the protagonist of the story, and how does this choice of animal contribute to the overall meaning of the narrative?</li>
            <br/>
            <li>How might the story of Anansi the Spider be interpreted in different cultural contexts, and what are some of the universal themes and values that it communicates?</li>
            <br/>
            <li>How does the story of Anansi the Spider exemplify the unique qualities?</li>
          </ol>
        </div>) 
        },
      {
          id: "64578007e98332712b2153fe",
          Subtopic: "MYTHS",
          Content:(
            <div>
            <p>
              Myths are traditional stories or legends that explain the beliefs, practices, and values of a culture. These stories are often passed down through generations and may be rooted in historical events, but they often incorporate supernatural or mythical elements that cannot be explained by logic or science. Myths are an important part of human culture, and they can be found in almost every society throughout history. They serve as a way for people to understand their place in the world and to connect with their cultural heritage.
            </p>
            <br/>
            <p>
              Myths often feature gods, goddesses, heroes, monsters, and other supernatural beings, and they may address themes such as creation, death, love, and the afterlife. Some well-known examples of myths include Greek myths, Norse myths, and Egyptian myths.
            </p>
          </div>
          )
      },
      {
          id: "64578060e98332712b2153ff",
          Subtopic: "Features of myths",
          Content:(
            <div>
            Myths are traditional stories that typically include a variety of distinctive features that help distinguish them from other forms of storytelling. Here are some common features of myths:<br/><br/>
            <strong>Mythical Characters:</strong> Myths often include gods, goddesses, heroes, monsters, and other supernatural beings that are often larger-than-life and possess extraordinary abilities or traits.<br/><br/>
            <strong>Explanatory Nature:</strong> Myths are often used to explain the origins of the natural world, social customs, and cultural values.<br/><br/>
            <strong>Timeless Themes:</strong> Myths deal with themes and issues that are fundamental to human existence, such as love, death, power, and the afterlife.<br/><br/>
            <strong>Symbolism:</strong> Myths often use symbolism to convey deeper meanings and messages. Symbols can be used to represent abstract concepts, values, or ideas.<br/><br/>
            <strong>Oral Tradition:</strong> Myths are typically passed down orally from one generation to the next, which can lead to variations and adaptations over time.<br/><br/>
            <strong>Universality:</strong> Myths can be found in cultures all over the world and can share similar themes and motifs, such as flood stories or tales of creation.<br/><br/>
            <strong>Use of Archetypes:</strong> Myths often feature archetypal characters or situations that are familiar and recognizable across cultures, such as the hero's journey or the trickster figure.
          </div>
          )
        },
      {
          id: "6457808ae98332712b215400",
          Subtopic: "Example of a myth",
          Content:(
            <div>
            One famous myth from Kenya is the story of how the Maasai people obtained fire from the gods. According to the myth, the Maasai lived in darkness until the god Enkai sent down lightning bolts to strike a tree and create fire. However, Enkai did not want to give the Maasai direct access to the fire, so he gave it to the chameleon to bring to the people.<br/><br/>
            The chameleon set out with the fire, but it moved so slowly that by the time it arrived at the Maasai camp, the fire was almost extinguished. To prevent this from happening again, Enkai gave the fire to the hare, who was known for its speed. The hare set out with the fire and ran as fast as it could, but it became tired and stopped to rest, and the fire was almost lost again.<br/><br/>
            Finally, Enkai gave the fire to the bat, who was known for its intelligence. The bat wrapped the fire in leaves and carried it safely to the Maasai, who were overjoyed to finally have access to this powerful tool. As a reward for its success, Enkai gave the bat the ability to fly at night and to hang upside down, which is why bats are known to be nocturnal animals that sleep in caves during the day.<br/><br/>
            This myth not only explains the Maasai's relationship with fire but also highlights the importance of persistence, speed, and intelligence in overcoming challenges.
          </div>
          )
        },
      {
          id: "645780bce98332712b215401",
          Subtopic: "Features of myths found in the story above",
          Content:(
            <div>
            Mythical Characters: The story features gods, including Enkai, who sends down lightning bolts to create fire, and animals, such as the chameleon, hare, and bat, who play important roles in delivering the fire to the Maasai people.<br/><br/>
            Explanatory Nature: The story explains how fire came to be available to the Maasai people, and why certain animals have certain characteristics or abilities.<br/><br/>
            Timeless Themes: The story addresses themes that are fundamental to human existence, including the importance of persistence, speed, and intelligence in overcoming obstacles.<br/><br/>
            Symbolism: The bat's reward of being able to fly at night and hang upside down could symbolize qualities such as adaptability, resourcefulness, and the ability to see in the dark.<br/><br/>
            Oral Tradition: The story is likely to have been passed down through generations orally, with variations and adaptations possible.<br/><br/>
            Universality: Although this is a specific myth from Kenya, it is possible that similar stories exist in other cultures that explain the origin of fire.<br/><br/>
            Use of Archetypes: The story includes archetypal characters such as the trickster (the chameleon) and the hero (the bat) who use their wit and skill to achieve a desired outcome.<br/><br/>
            In summary, the myth of the Maasai obtaining fire from the gods contains several features that are commonly found in myths from different cultures around the world.
          </div>
          )
      },
      {
          id: "645780f0e98332712b215402",
          Subtopic: "Exercise",
          Content:(
            <ol>
              <li>What are some common themes found in myths from different cultures?</li>
              <br/>
              <li>How do myths use symbolism to convey deeper meanings and messages?</li>
              <br/>
              <li>How do myths differ from other forms of storytelling, such as legends?</li>
              <br/>
              <li>What are some examples of mythical characters that appear in different cultures, and what are their defining traits and abilities?</li>
              <br/>
              <li>How do myths explain natural phenomena, such as the creation of the world or the origin of certain animals?</li>
              <br/>
              <li>What are some examples of universal myths, and how do they reflect the shared human experience?</li>
            </ol>
          )
      },
      {
          id: "64578137e98332712b215403",
          Subtopic: " LEGENDS",
          Content:(
            <div>
            <p>Legends are traditional stories that have been passed down from generation to generation, usually orally, and are often based on historical events or figures. They are similar to myths in that they are part of a culture's folklore, but they tend to be more closely tied to a specific time and place.</p>
           <br/>
            <p>Legends often involve a mixture of fact and fiction, and may be embellished over time as they are retold. They can be used to explain the origins of certain customs or practices, to honor a particular hero or leader, or to warn against certain behaviors or actions.</p>
            <br/>
            <p>Some famous examples of legends include the story of King Arthur and the Knights of the Round Table, the legend of Robin Hood, and the legend of Beowulf. Legends can be found in cultures all around the world and often play an important role in shaping a culture's identity and values.</p>
          </div>
          )
        },
      {
          id: "6457816be98332712b215404",
          Subtopic: "Features of legends",
          Content:(
            <div>
              <p>Legends are a type of traditional story that share certain features with other forms of folklore, but also have some distinct characteristics.</p>
              <br/>
                
               <strong className='text-2xl font-semibold'>Common features of legends:</strong>
                <ol>
                  <li><h3 className='text-xl font-semibold  text-purple-600'>Historical basis</h3> Legends are often based on historical events or figures, and may contain elements of fact as well as fiction.</li>
                  <br/>
                  <li><h3  className='text-xl font-semibold  text-purple-600'>Cultural significance</h3> Legends are typically associated with a particular culture or community, and often reflect that group's values, beliefs, and customs.</li>
                  <br/>
                  <li><h3  className='text-xl font-semibold  text-purple-600'>Oral tradition</h3> Legends are usually passed down orally from one generation to the next, which can lead to variations and adaptations over time.</li>
                  <br/>
                  <li><h3  className='text-xl font-semibold  text-purple-600'>Heroic figures</h3>Many legends feature a heroic or exceptional figure, such as a warrior, leader, or saint, who embodies the virtues of the culture and serves as a role model.</li>
                  <br/>
                  <li><h3  className='text-xl font-semibold  text-purple-600'>Moral lessons</h3> Legends often contain a moral lesson or message, such as the consequences of disobedience or the importance of loyalty and bravery.</li>
                  <br/>
                  <li><h3  className='text-xl font-semibold  text-purple-600'>Supernatural elements</h3> Legends may include supernatural or miraculous elements, such as ghosts, spirits, or divine intervention.</li>
                  <br/>
                  <li><h3  className='text-xl font-semibold  text-purple-600'>Time and place</h3> Legends are often closely associated with a particular time and place, such as a specific historical era or geographical region.</li>
                  <br/>
                  <li><h3  className='text-xl font-semibold  text-purple-600'>Embellishment</h3>Legends may be embellished or exaggerated over time as they are retold, leading to variations and different versions of the same story.</li>
                </ol>
              
            
          </div>
          )
      },
      {
          id: "6457819de98332712b215405",
          Subtopic: "Example of a legend",
          Content:(
            <div>
            <p>One of the most famous legends in Kenya is the legend of Luanda Magere, a warrior of the Luo tribe who lived in the 14th century. The legend goes that Luanda Magere was a skilled fighter who was invincible in battle because of a secret that he kept from everyone else.</p>
            <p>One day, the neighboring Kipsigis tribe attacked the Luo people, and Luanda Magere was called upon to defend his tribe. He fought bravely, but was eventually struck by a Kipsigis warrior's spear. To everyone's amazement, the spear simply bounced off Luanda Magere's body, leaving him unscathed.</p>
            <p>The Kipsigis warriors were shocked and terrified by this display of invincibility, and retreated from the battle. Luanda Magere's secret was finally revealed: he had made a pact with the local river god, and in exchange for his invincibility, he had promised to sacrifice the most important thing in his life to the river.</p>
            <p>Luanda Magere kept his promise, and threw himself into the river, where he was never seen again. The Luo people mourned his loss, but honored him as a hero who had protected them from their enemies.</p>
            <p>The legend of Luanda Magere is still celebrated today by the Luo people, who see him as a symbol of courage, sacrifice, and loyalty. The story has also been adapted into plays, songs, and other forms of art, and is an important part of Kenya's cultural heritage.</p>
          </div>
          )
      },
      {
          id: "645781cbe98332712b215406",
          Subtopic: "Features of legends found in the story",
          Content:(
            <div>
              <p>The legend of Luanda Magere exhibits several features that are common in legends. Here are some of the features found in this story:</p>
              <ol className='list-decimal p-3'>
                <li><h3  className='text-xl font-semibold  text-purple-600'>Historical basis</h3> The legend of Luanda Magere is based on a historical figure who lived in the 14th century and was a warrior of the Luo tribe.</li>
               <br/>
                <li> <h3  className='text-xl font-semibold  text-purple-600'> Cultural significance</h3> The legend is closely tied to the Luo culture, and reflects their values, beliefs, and customs.</li>
                <br/>
                <li> <h3  className='text-xl font-semibold  text-purple-600'>Oral tradition</h3> The story has been passed down orally through generations of Luo people, which has likely led to variations and adaptations over time.</li>
                <br/>
                <li> <h3  className='text-xl font-semibold  text-purple-600'>Heroic figure</h3> Luanda Magere is depicted as a heroic figure who was skilled in battle and willing to make a sacrifice to protect his people.</li>
                <br/>
                <li> <h3  className='text-xl font-semibold  text-purple-600'>Supernatural element</h3> The legend includes a supernatural element, in the form of Luanda Magere's invincibility, which was granted to him by a river god in exchange for a sacrifice.</li>
                <br/>
                <li> <h3  className='text-xl font-semibold  text-purple-600'>Time and place</h3> The legend is set in a specific historical era and geographical region, namely the 14th century and the area where the Luo and Kipsigis tribes lived.</li>
                <br/>
                <li> <h3  className='text-xl font-semibold  text-purple-600'>Embellishment</h3> Like many legends, the story of Luanda Magere may have been embellished over time as it was retold, leading to variations in the details of the story.</li>
              </ol>
            </div>
          )
      },
      {
          id: "64578232e98332712b215407",
          Subtopic: "Exercise",
         Content:(
          <div>
          <ol className='list-decimal p-3'>
            <li>What is a legend and how does it differ from other forms of folklore?</li>
            <br/>
            <li>What are some common features of legends?</li>
            <br/>
            <li>Can you give an example of a famous legend from your culture or country?</li>
            <br/>
            <li>How do supernatural elements in legends help to convey moral or ethical lessons to the audience?</li>
            <br/>
            <li>In what ways do legends serve as a form of entertainment, as well as a means of cultural education and identity-building?</li>
          </ol>
          </div>
         )
      }
  ];

  //side bar onclick
  const handleClick =(id)=>{
    setOneId(id)
   setOne(narratives[id])
  }
//   for previous
  const previous =()=>{
    setOneId(oneId === 0 ? 0 : oneId - 1);
   setOne(narratives[oneId === 0 ? 0 : oneId - 1]);
  }
// for next
const next = () => {
    const nextOneId = oneId + 1;
    if (nextOneId=== narratives.length) {
        alert('You have reached the end of the topic')
       
      }
    else{
        setOneId(nextOneId);
        setOne(narratives[nextOneId]);
    }
    
    
  };
  useEffect(()=>{
    setOne(narratives[0])
    },[])


  // loading
useEffect(()=>{
  setIsLoading(true)
  setTimeout(()=>{
   setIsLoading(false)
  },2000)
},[])

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
      <Header />
      <div className='flex'>
        <SideNav 

         title="Oral Narratives"
         subtopics={narratives.map((narrative) => narrative.Subtopic)}
         onClick={(id) => handleClick(id)}
         />
        
        <MainContent 

         title={one.Subtopic}
         body={one.Content}
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
