import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaComment, FaUserAlt } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
//import { Typewriter } from 'react-simple-typewriter';



// const community =   fetch('/highlights.json').then(res => res.json())
//         //axios('/highlights.json').then(res => res.json())
// const Highlights = () => {
//     const tips = use(community)

const Highlights = () => {
  const [tips, setTips] = useState(null);

  useEffect(() => {
    axios('/highlights.json')
      .then(res => setTips(res.data))
      .catch(err => console.error("Error loading JSON:", err));
  }, []);

  if (!tips) return <p>Loading...</p>;
    return (
        <div className='w-11/12 mx-auto bg-[#ddd] rounded-2xl  my-30'>
            <Fade direction="left" triggerOnce>
             <h1 className='text-2xl md:text-4xl font-bold text-center mx-auto py-10 md:py-15 flex justify-center dark:text-black  gap-2 '><FaComment className='text-[#d319a4] text-center ml-5 mt-1 ' />{" "}
                         <span className="">
                           <Typewriter
                             words={["Community Highlights"]}
                             loop={true}
                             cursor
                             cursorStyle="|"
                             typeSpeed={100}
                             deleteSpeed={70}
                             delaySpeed={1500}
                           />
                         </span>
                         </h1>
                       </Fade>
              
             
                    
                     
                   
          <div className='grid grid-cols-1 md:grid-cols-4 gap-5 px-5 pb-20'>
             <div className=' gap-5 text-sm'>
             <div className='mt-8 bg-white p-6 rounded-xl space-y-3'>
         <h2 className='font-bold text-xl  dark:text-black flex items-center gap-2'>{tips.communityHighlights.artworkTipsAndTricks
.digitalArt.title}</h2>
            <ol className='dark:text-black'>
                {
                tips.communityHighlights.artworkTipsAndTricks.digitalArt.tips.map((tip, i)=>(<p key={i}>{tip}</p>) )
            }
            </ol>
            
            
        </div>
       
           </div>
           <div className=' gap-5 text-sm'>
             <div className='mt-8 bg-white p-6 rounded-xl space-y-3'>
         <h2 className='font-bold text-xl  dark:text-black flex items-center gap-2'>{tips.communityHighlights.artworkTipsAndTricks
.painting.title}</h2>
            <ol className='dark:text-black'>
                {
                tips.communityHighlights.artworkTipsAndTricks.painting.tips.map((tip, i)=>(<p key={i}>{tip}</p>) )
            }
            </ol>
            
            
        </div>
       
           </div>
           <div className=' gap-5 text-sm'>
             <div className='mt-8 bg-white p-6 rounded-xl space-y-3'>
         <h2 className='font-bold text-xl  dark:text-black flex items-center gap-2'>{tips.communityHighlights.artworkTipsAndTricks
.colorTheory.title}</h2>
            <ol className='dark:text-black'>
                {
                tips.communityHighlights.artworkTipsAndTricks.colorTheory.tips.map((tip, i)=>(<p key={i}>{tip}</p>) )
            }
            </ol>
            
            
        </div>
       
           </div>
           <div className='gap-5 text-sm'>
             <div className='mt-8 bg-white p-6 rounded-xl space-y-3'>
        <h2 className='font-bold text-xl  dark:text-black flex items-center gap-2'>{tips.communityHighlights.artworkTipsAndTricks
.artPresentation.title}</h2>
            <ol className='dark:text-black'>
                {
                tips.communityHighlights.artworkTipsAndTricks.artPresentation.tips.map((tip, i)=>(<li key={i}>{tip}</li>) )
            }
            </ol>
            
            
        </div>
       
           </div>
          </div>
          
        </div>
    );
};

export default Highlights;