

import { useState } from 'react'
import './App.css'
import Blocs from './Components/Blocs/Blocs'
import Bookmark from './Components/bookmarkblock/Bookmark'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [Bookmarks , SetBookmark]=useState([]);
  const [CourseCredit, setCourseCredit]=useState(20);

const handeleBookmark=(course_name, credit)=>{
  const newCredit = CourseCredit - credit;
 
  const selectBookmark =[...Bookmarks];
 if(selectBookmark.includes(course_name)){
  toast('this course added pleace select anothor')
 }
 else{
 
  const newBookmark = [...selectBookmark ,course_name]
  SetBookmark(newBookmark);
  if(newCredit>=0){

    setCourseCredit(newCredit);
  }
  else{
    toast('total reamining creadit less than your limit')
  }
 }

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
bookmarks={Bookmarks}
courseCredit ={CourseCredit} >
  
</Bookmark>
<ToastContainer></ToastContainer>
       
      </div>
      </section>
     
   </body>
    </>
  )
}

export default App
