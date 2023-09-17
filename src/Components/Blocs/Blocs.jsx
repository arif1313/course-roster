import { useEffect } from "react";
import { useState } from "react";
import Block from "../Block/Block";
import PropTypes from 'prop-types';


const Blocs = ({handeleBookmark}) => {
const [Blocs ,setBlocks]=useState([]);
useEffect(()=>{

    fetch('data.json')
    .then(res => res.json())
    .then(data=> setBlocks(data))
},[])
    return (
      
        <div className="w-3/4">
           
           <div className="grid grid-cols-3 gap-7"> {
              Blocs.map((block,ind)=><Block
              handeleBookmark={handeleBookmark}
              block={block}
              key={ind}
              ></Block>
            )}</div>
        </div>
    );
};
Blocs.propTypes = {
    handeleBookmark:PropTypes.func
};
export default Blocs;