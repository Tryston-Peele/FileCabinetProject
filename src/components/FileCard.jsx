import React, { useState } from 'react';
// import '../App.css';
// import './FileStyles.css'
// import './FileStyles2.css'
import './FileStyles3.css'

import { useInputValue } from '../hooks/useInputValue'

function FileCard( { name, classStyle, id, onSelected, isActive, body }) {

    
   const theText = useInputValue("")

 
    

  return (
    <div className={`defaultNote note${classStyle} ${isActive  ? 'moving' : ''}`}>
        <div onClick={()=>{
           
            // setIsBig(!isBig)
            if(onSelected) {
                onSelected(id)  
            }
            
        }
           
        }
         className={`defaultHeading heading${classStyle}`}>{name}</div>

        <div className={`defaultTab tab${classStyle} ${isActive ? 'moving' : ''}`}>
            <div className={`paper ${isActive  ? 'moving' : ''}`}>
                 <textarea className={`the-text ${isActive  ? 'moving' : ''}`} {...theText} >{theText.value}</textarea>
            </div>
           
        </div>
    </div>  

    
  )
}

export default FileCard