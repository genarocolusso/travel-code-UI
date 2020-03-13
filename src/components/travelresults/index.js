 

import React from 'react';
import './styles.css'


function TravelResults(props){ 
  const { travelHourstart, 
    travelCitystart, 
    travelDatestart, 
    duration, 
    stop, 
    travelHourend,
    travelCityend, 
    travelDateend,
    price
  }= props;


  const listStops = stop.split(',').map((stop) =>
    
    <div key={stop.toString()} className="stop">{stop.trim()}</div>
  );
  

  return (
    <div className="travel-wrapper">
        <div className="startTravel">
          <div className="airports">
            <div className="airport"></div>

          </div>
        <div className="startInfos">
           <p className="travelHour">
              {travelHourstart}
           </p>
           <p className="travelCity">
           {travelCitystart}
           </p>
           <p className="travelDate">
           {travelDatestart}
           </p>
      
        </div>

        </div>

        <div className="travelLine">
          <p className="duration">    {duration}</p>
          <div class="line">
            <div className="stops"> 
         {listStops}
         </div>
          </div> 
        </div>

        <div className="endTravel">
          
        <div className="endInfos">
           <p className="travelHour">
             {travelHourend}
           </p>
           <p className="travelCity">
             {travelCityend}
           </p>
           <p className="travelDate">
           {travelDateend}
           </p>
      
        </div>
        
        </div>
        
        <div className="priceSelect">
        <div className="price">
         <span>$</span>{price} <span class="small">USD</span>
       </div>
       <button className="btn selectPrice">
         Select
       </button>
        </div>
  </div>
  )
}

export default TravelResults;

