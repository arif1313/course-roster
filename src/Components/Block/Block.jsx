


import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';

const Block = block => {
 const {course_name,img,details,price,credit}=block.block
   
    return (
       <div className='bg-yellow-100 p-4 rounded-xl' >
         
            <img className='h-36 w-full rounded-lg' src={img} alt="" />
            <h3 className='text-lg font-semibold pt-3'>{course_name} </h3>
            <p className='my-3 text-justify '>{details} </p>
            <p className='my-3'><span> price: {price}</span> <span> credit: {credit}</span></p>
            <button className='bg-[#2F80ED] rounded-lg w-full p-2 text-white font-semibold'>select</button>
            
        
       </div>
    );
};

Block.propTypes = {
    block:PropTypes.object
};

export default Block;