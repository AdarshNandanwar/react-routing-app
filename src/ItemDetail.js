import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Item({ match }) {
  useEffect(() => {
      fetchItem();
      // console.log(match);
  }, []);

  const [item, setItem] = useState({
  });

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
      const item = await fetchItem.json();
      setItem(item);
      console.log(item.game_indices[0].game_index);
  }

  const itemStyle = {
    textTransform: 'capitalize'
  };

  return (
    <div style={itemStyle}>
      <h1>{item.name}</h1>
      {item.game_indices && <img className="pokemonImg" src={ "https://pokeres.bastionbot.org/images/pokemon/"+item.game_indices[0].game_index+".png"} alt=""/>}
      <div className="pokemonDesc">
        <h2>Element Type:</h2>
        <div className="pokemonTypes">
          {item.types ? item.types.map(itemType => <p>{itemType.type.name}</p>): null}
        </div>
      </div>
    </div>
  );
}

export default Item;
