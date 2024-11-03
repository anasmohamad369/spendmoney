import React, { useState } from 'react'
import { item_list } from './assets/assets';
import { Game } from './Game';
import './GameDisplay.css'
export const GameDisplay = () => {

  const budget = 10000000000;
  const [spentAmount, setSpentAmount] = useState(0);
    const handleAdd = (price) => {
      if (spentAmount + price <= budget) {
        setSpentAmount(spentAmount + price);
      }    
    };
  
    const handleRemove = (price) => {
      if (spentAmount - price >= 0) {
        setSpentAmount(spentAmount - price);
      }

    };
    

  return (

<>
<div className="budgetdisplay">
<h1> In your Bank Account: {budget-spentAmount}</h1>

</div>
    <div className='list' >
      {item_list.map((item, index) => (
        <Game 
          key={index}
          item_img={item.item_img}
          item_name={item.item_name}
          item_price={item.item_price}
          onAdd={() => handleAdd(item.item_price)}
            onRemove={() => handleRemove(item.item_price)}
            isDisable = {spentAmount+item.item_price>budget}
        />
      ))}
        
      </div>
  
</>

  )
}
