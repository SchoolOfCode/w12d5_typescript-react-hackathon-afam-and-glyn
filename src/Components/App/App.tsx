import React from 'react';
import './App.css';
import SearchBar from '../SearchBar';
import ResultsDisplay from '../ResultsDisplay';

function App() {
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
