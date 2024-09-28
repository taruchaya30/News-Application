import React, { useState} from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const  App = ()=> {
   let apiKey=process.env.REACT_APP_NEWSAPPLICATION_API
  
  
  const [progress, setprogress] = useState(0);

  const setProgress=(progress)=>{
    setprogress(progress)
  }
  
    return (
      <Router>
         <LoadingBar
        color='blue'
        progress={progress}
        height={4}
        transitionTime={500}
        loaderSpeed={800}
        
      />
          <NavBar/>
      <div>
      <Routes>
            <Route exact path='/general' element={<News setProgress=  {setProgress} apiKey={apiKey}  key="general" pageSize={10} category="general" />} />
            <Route exact path='/business' element={<News setProgress=  {setProgress} apiKey={apiKey}  key="business" pageSize={10} category="business" />} />
            <Route exact path='/science' element={<News setProgress=  {setProgress} apiKey={apiKey}  key="science" pageSize={10} category="science" />} />
            <Route exact path='/technology' element={<News setProgress=  {setProgress} apiKey={apiKey}  key="technology" pageSize={10} category="technology" />} />
            <Route exact path='/entertainment' element={<News setProgress=  {setProgress} apiKey={apiKey}  key="entertainment" pageSize={10} category="entertainment" />} />
            <Route exact path='/sports' element={<News setProgress=  {setProgress} apiKey={apiKey}  key="sports" pageSize={10} category="sports" />} />
            <Route exact path='/health' element={<News setProgress=  {setProgress} apiKey={apiKey}  key="health" pageSize={10} category="health" />} />
          </Routes>
           
        </div> 
         </Router>
      )
  }

export default App