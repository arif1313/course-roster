


import PropTypes from 'prop-types';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';


const Block = (block,handeleBookmark) => {
 const {course_name,img,details,price,credit}=block.block
   
    return (
       <div className='bg-yellow-100 p-4 rounded-xl' >
         
            <img className='h-36 w-full rounded-lg' src={img} alt="" />
            <h3 className='text-lg font-semibold pt-3'>{course_name} </h3>
            <p className='my-3 text-justify '>{details} </p>
            <div className='my-3 flex justify-around items-center'>
               <div >
               <span className='inline-block'> <BsCurrencyDollar></BsCurrencyDollar></span> price: {price}
               </div>
                 <div >
                 <span className='inline-block mr-3'><GoBook></GoBook> </span>credit: {credit} hr</div>

                 </div>
            <button className='bg-[#2F80ED] rounded-lg w-full p-2 text-white font-semibold' onClick={()=>handeleBookmark(course_name)}>select</button>
            
        
       </div>
    );
};

Block.propTypes = {
    block:PropTypes.object,
    handeleBookmark:PropTypes.func
};

export default Block;