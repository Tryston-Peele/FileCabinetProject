import React, { Component } from 'react';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
 
import Home from './components/Home';
import File from './components/File';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
            <Routes>
             <Route path="/" element={<Home />} />
             <Route path = "/files" element={<File />} />
            </Routes>
      </BrowserRouter>
    );
  }
}
 //////
export default App;
