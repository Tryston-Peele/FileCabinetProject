import React, { useState } from "react";
import "./SideBar.css";

function SideBar() {
  const [name, setName] = useState("");

  function handleSetName(e) {
    setName(e.target.value);
  }

  return (
    <></>
    // <div className='side-container'>
    //     <h1 className='input-heading'>Folder Name</h1>
    //     <div className='input-container'>
    //         <input type="text" className='input-text' onChange={handleSetName} />
    //     </div>
    //     <h1>Folder Color</h1>
    //     <div className='colors'>
    //         <div className='pink'></div>
    //         <div className='green'></div>
    //         <div className='blue'></div>
    //         <div className='yellow'></div>
    //     </div>
    //     <div className='add-btn'><h1>Create Folder</h1></div>
    // </div>
  );
}

export default SideBar;
