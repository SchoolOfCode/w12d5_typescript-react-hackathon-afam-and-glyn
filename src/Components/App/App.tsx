import React, { useEffect } from 'react';
import {useState} from 'react'
import './App.css';
import SearchBar from '../SearchBar';
import ResultsDisplay from '../ResultsDisplay';

function App() {


const [weatherData, setWeatherData] = useState({})
const [city, setCity] = useState("")
const [search, setSearch] = useState("")


function onChange(e: React.ChangeEvent<HTMLInputElement>): void{
  setSearch(e.target.value)
}

function onClick (e: React.ChangeEvent<HTMLInputElement>):void{
  fetchData()
}

useEffect(()=>{

  const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${process.env.KEY}`;
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
     
  
    } catch (error) {
      console.log('error', error);
    }
}
 }, )





  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Type Script</h1>
      </header>
      <SearchBar />
      <ResultsDisplay/>
    </div>
  );
}

export default App;
