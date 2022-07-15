import React from 'react';

export default function ResultsDisplay({data}:any){
console.log({data})
  return  <>
  <h2>Weather for {data.name} </h2>
  <p>Temp {data.main.temp}</p>
  <p>Wind Speed {data.wind.speed}</p>
  
  </>

}