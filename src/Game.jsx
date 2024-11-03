import React, { useState } from 'react';
import './Game.css'
import { assets } from './assets/assets';
export const Game = ({ item_img, item_name, item_price,onAdd,onRemove,isDisable, }) => {
  const [count, setCount] = useState(0);
  
  const handleAdd = () => {
    if(!isDisable){
    setCount(count + 1);
    onAdd();
    }
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
      onRemove();
    }
  };

  return (
    <>

<div className="items">
  <div className="item">
    <div className="item-img">
      <img src={item_img} alt='' />
    </div>
    <div className="details">
      <p>₹{item_price}</p>
      <p>{item_name}</p> 
    </div>
    <div className="buttons">
      <h5 onClick={handleRemove}  id='h5'>Sell</h5>
      <span>{count}</span>
        <h5 
    onClick={handleAdd} 
    style={{ 
      backgroundColor: isDisable ? "white" : "rgb(9, 165, 222);",
      cursor: isDisable ? 'not-allowed' : 'pointer' 
    }}
  >
    Buy
</h5>
    </div>
  </div>
</div>
   
    </>
  );
};
