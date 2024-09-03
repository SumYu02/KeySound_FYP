import React from 'react';
import './Popular.css';
import data_product from '../Assets/Frontend_Assets/data'; // Ensure this path is correct
import Item from '../Item/Item'; 

const Popular = () => {
    console.log(data_product);

  return (
    <div className='popular'>
      <h1>POPULAR ITEMS</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image_1} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Popular