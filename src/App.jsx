

import { useState } from 'react'
import './App.css'
import Blocs from './Components/Blocs/Blocs'
import Bookmark from './Components/bookmarkblock/Bookmark'

function App() {
  const [Boomark , SetBookmark]=useState([]);

const handeleBookmark=(blockName)=>{

SetBookmark(blockName);
}
  return (
    <>
   <body className=' bg-[#F3F3F3]'>
   <section className='mx-auto container '>
    <h1 className='text-center font-bold text-4xl'>Course Registration</h1>
  
      <div className='flex gap-7 my-7'>
        
<Blocs
handeleBookmark ={handeleBookmark}
></Blocs>   
<Bookmark
name= {Boomark}></Bookmark>
       
      </div>
      </section>
   </body>
    </>
  )
}

export default App
