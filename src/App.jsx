

import './App.css'
import Blocs from './Components/Blocs/Blocs'
import Bookmark from './Components/bookmarkblock/Bookmark'

function App() {
  

  return (
    <>
   <body className=' bg-[#F3F3F3]'>
   <section className='mx-auto container '>
    <h1 className='text-center font-bold text-4xl'>Course Registration</h1>
  
      <div className='flex gap-7 my-7'>
        
<Blocs></Blocs>   
<Bookmark></Bookmark>
       
      </div>
      </section>
   </body>
    </>
  )
}

export default App
