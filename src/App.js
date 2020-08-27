import React, { useState, useEffect } from 'react'; 
import './App.css'; 
import Header from './components/Header'; 
import Search from './components/Search'; 
import Jobs from './components/jobs'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Weather from './components/Weather'; 
function App() { 
 
 
  const initjobs = [] 
  const [jobs, setJobs] = useState(initjobs); 
   
  const [filterText], setFilterText] = useState(''); 
  const [showAll, setShowAll] = useState(true) 
 
 
 
  const handleFilter = (filteringText) => { 
    setFilterText(filteringText); 
    if(filteringText === ''){ 
      console.log('true') 
    } 
    else{ 
      setShowAll(false); 
      console.log('tuli app.js:n filteriin: ' + filteringText) 
    } 
     
  } 
 
 const handComplete = (job)
const jobstoShow = showAll 
  ? jobs 
  : jobs filter(job => job.tyotehtava.toUpperCase().includes(filterText.toUpperCase())) 
 
 
  useEffect(() => { 
  fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki') 
    .then(response => response.json()) 
    .then(json => setJobs([...json])); 
  },[]); 
  return ( 
    <Router> 
      <div className="App"> 
        <Header /> 
        <Switch> 
          <Route path="/weather"> 
            <Weather /> 
          </Route> 
          <Route path="/"> 
            <Search onFilter={handleFilter}/> 
            <Jobs onCompleted= {handleComplete} jobs={jobstoshow} /> 
          </Route> 
        </Switch> 
      </div> 
    </Router> 
  ); 
} 
 
 
export default App; 