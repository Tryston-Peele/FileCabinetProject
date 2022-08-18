import React, { useState } from 'react';
// import '../App.css';
// import './FileStyles.css'
import './FileStyles2.css'
// import './FileStyles3.css'

function FileCard( { name, classStyle,  id, onFolderClick, }) {
    const [isBig, setIsBig] = useState(false)
    

 
    

  return (
    <div className={`defaultNote note${classStyle} ${isBig  ? 'moving' : ''}`}>
        <div onClick={()=>(
           
            setIsBig(!isBig)
        )
           
        }
         className={`defaultHeading heading${classStyle}`}>{name}</div>

        <div className={`defaultTab tab${classStyle} ${isBig ? 'moving' : ''}`}>
            <div className={`paper ${isBig  ? 'moving' : ''}`} 
            ></div>
            {/* <textarea className='the-text' cols="100" rows="10"></textarea> */}
        </div>
    </div>  

    
  )
}

export default FileCard