import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://pokeapi.co/api/v2/pokemon/'
    );
    
    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };

  const shopStyle = {
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    textTransform: 'capitalize'
  };

  return (
    <div>
      <h1>Welcome to PokeShop!</h1>
      <div>
        {items.map(item => (
          <h3 style={shopStyle}>
            <Link to={`/shop/${item.name}`}>{item.name}</Link>
          </h3>
        ))}
      </div>
    </div>
  );
}

export default Shop;
