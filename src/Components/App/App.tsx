import React from 'react';
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
