import { useEffect, useState } from 'react';
import './App.css';
import FileCard from './components/FileCard';






function App() {
  const folders = [
    {name: 'Dad', classStyle: '1', Default: true, id: 123 },
    {name: 'Kendall', classStyle: '2', Default: false, id: 153 },
    {name: 'Cat', classStyle: '3', Default: false, id: 133 }
  ]


  // function myTest(folders){
  //  let newFolders = folders.map((folder) => {
  //   folder.name = 'test'
  //    return folder
  //  })
  //  console.log(newFolders)
  // }
  

  return (
  
    <div className="App">
      
     <div className='container' >
         
      <div className='container-rim'>

    {
      folders.map((folder)=> {
        return <FileCard 
        
        
        onFolderClick={(id)=> console.log(id)}
        name={folder.name} 
        classStyle={folder.classStyle} 
        Default={folder.Default} 
        id={folder.id}/>
      })
    }

     {/* <FileCard noteNum='1'/>
     <FileCard noteNum='2'/>
     <FileCard noteNum='3'/> */}



     </div>
     </div>
     
    
    </div>
    
    
    
  );
}

export default App;
