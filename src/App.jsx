

import { useState } from 'react'
import './App.css'
import Blocs from './Components/Blocs/Blocs'
import Bookmark from './Components/bookmarkblock/Bookmark'

function App() {
  const [Bookmarks , SetBookmark]=useState([]);

const handeleBookmark=(course_name)=>{
const newBookmark = [...Bookmarks,course_name]
SetBookmark(newBookmark);
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
bookmarks={Bookmarks}></Bookmark>
       
      </div>
      </section>
   </body>
    </>
  )
}

export default App
