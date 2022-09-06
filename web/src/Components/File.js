import { useEffect, useState } from 'react';
import './File.css';
import FileCard from './FileCards/FileCard'
import uuid from 'react-uuid';
import axios from 'axios'



function File() {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [deletable, setdeletable] = useState(false)
  const [selectedColor, setSelectedColor] = useState('pink')
  const [styleNum, setStyleNum] = useState(2)

 const fetchFolders = async() => {
   const results = await axios.get('http://localhost:8000/api/files')
   console.log(results.data)
   setTheFolders(results.data)
 }

 const createFolder = async() => {
   try {
   const results = await axios.post('http://localhost:8000/api/files', {
     name: name,
      classStyle: styleNum,
      body: 'kendall',
      folderColor: selectedColor,
      isActive: false
   })

   console.log(results)
   if(results && results.data){
    fetchFolders()
   }
   } catch(error){
    console.log('an error occured while creating a new folder')
   }
 }

  useEffect(()=> {
    fetchFolders()
  }, [])

  function handleSetColor(rgbColor) {
    setColor(rgbColor)
    
  }

  function handleSetName(e) {
  setName(e.target.value)
  }

  const [folders, setTheFolders] = useState([
    {name: 'Dad', classStyle: '1', body:'', isActive: false, id: 123, folderColor: 'rgb(254, 236, 251)', isDeletable: false},
    // {name: 'Kendall', classStyle: '2', body: '', isActive: false, id: 153 },
  ])




  // const folders = [
  //   {name: 'Dad', classStyle: '1', isActive: false, id: 123 },
  //   {name: 'Kendall', classStyle: '2', isActive: false, id: 153 },
  //   {name: 'Cat', classStyle: '3', isActive: false, id: 133 },
  //   {name: 'ok', classStyle: '4', isActive: false, id: 143 },
  //   {name: 'ok', classStyle: '5', isActive: false, id: 142 },
  //   {name: 'ok', classStyle: '6', isActive: false, id: 142 },
  //   {name: 'ok', classStyle: '7', isActive: false, id: 142 },
  //   {name: 'ok', classStyle: '8',isActive: false , id: 142 }
  // ]

  function updateActiveStatus(id) {

   const updatedfolders = folders.map((folder) => {
    if(folder.id === id && folder.isActive === false){
      return {...folder, isActive: true}
    } else if(folder.id === id && folder.isActive === true) {
      return {...folder, isActive: false}
    }
    
    else {
      return {...folder, isActive: false}
    }

   })
   setTheFolders(updatedfolders)
   
  }





  function onAddFolder(){
    if(folders.length > 7) {
      alert('Max folders')
    } else{
    setStyleNum(styleNum + 1)

   console.log(styleNum)
    // const newFolder = {
    //   name: name,
    //   body: '',
    //   id: uuid(),
    //   classStyle: styleNum,
    //   isActive: false,
    //   folderColor: color
    // }
  
    // setTheFolders([ ...folders, newFolder,])
      createFolder()
    setName('')
  }
  }



  return (
  
    <div className="File">
          <div className='side-container'>
        <h1 className='input-heading'>Folder Name</h1>
        <div className='input-container'> 
            <input type="text" className='input-text' onChange={handleSetName} value={name} />
        </div>
        <h1>Folder Color</h1>
        <div className='colors'>
            <div className={`pink ${selectedColor === 'pink' ? 'border' : ''}`} onClick={() => {setSelectedColor('pink'); setColor('rgb(254, 236, 251)')}}></div>
            <div className={`green ${selectedColor === 'green' ? 'border' : ''}`} onClick={()=> {setSelectedColor('green'); setColor('rgb(214, 255, 239)')}}></div>
            <div className={`blue ${selectedColor === 'blue' ? 'border' : ''}`} onClick={()=> {setSelectedColor('blue'); setColor('rgb(217, 240, 255)')}}></div>
            <div className={`yellow ${selectedColor === 'yellow' ? 'border' : ''}`} onClick={()=>{setSelectedColor('yellow'); setColor('rgb(254, 255, 227)')}}></div>
        </div>
        <div className='add-btn' onClick={onAddFolder}><h1>Create Folder</h1></div>
     
    </div>

      
     <div className='container' >
        
      <div className='container-rim'>



   {
     folders.map((folder)=> {
      return <FileCard 
        name={folder.name}
        classStyle={folder.classStyle}
        onSelected={updateActiveStatus}
        id={folder.id}
        isActive={folder.isActive}
        body={folder.body}
        folderColor = {folder.folderColor}
      />

     })
   }

     </div>
     </div>
    </div>
    
    
    
  );
}

export default File;
