import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
      );
    
    const items = await data.json()
    console.log(items.items);
    setItems(items.items);
  }


  return (
    <div>
      <h1>Shop</h1>
      {items.map(item => (
        <h2 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
        
        </h2>
      ))}
    </div>
  );
}

export default Shop;