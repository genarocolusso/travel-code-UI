 

import React from 'react';
import './styles.css'


function ResultCard(props){
  const { price, type,active }= props;

  return (
    <div className={"best-results-card"+ (active ? "--active" : '')}>
       <div className="price">
         <span>$</span>{price}
       </div>
       <div className="result-infos"> 
       <div className="title">{type}</div>
       <div class="subtitle">
         2h 37m average
       </div>
       </div>
     </div>
  )
}

export default ResultCard;

