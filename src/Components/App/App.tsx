import React, { useEffect } from 'react';
import {useState} from 'react'
import './App.css';
//import SearchBar from '../SearchBar';
import SubmitButton from '../SubmitButton';
import InputBox from '../InputBox';
import ResultsDisplay from '../ResultsDisplay';
export type onClickType = {onClick: (e: React.MouseEvent<HTMLButtonElement>) => void}
export type onChangeType = {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}

function App() {
const [weatherData, setWeatherData] = useState({})
const [city, setCity] = useState("London")
const [search, setSearch] = useState("")

function onChange(e: React.ChangeEvent<HTMLInputElement>): void{
  setSearch(e.target.value)
}

function onClick (e: React.MouseEvent<HTMLButtonElement>):void{
  setCity(search)
  fetchData()

}

const fetchData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&uk&appid=${process.env.REACT_APP_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  } catch (error) {
    console.log('error', error);
  }
}

useEffect(()=>{
fetchData()
 },[] )



  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Type Script</h1>
      </header>
      <InputBox onChange={onChange}/>
      <SubmitButton onClick={onClick}  />
      <ResultsDisplay data={weatherData}/>
      
    </div>
  );
}

export default App;
