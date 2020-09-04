import React, { useState, useEffect } from 'react';
import Header from './components/header.js';
import CharacterGrid from "./components/CharacterGrid.js";
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`);

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [])

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
