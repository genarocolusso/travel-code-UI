 

import React from 'react';
import './styles.css'


function Travel(props){ 

  return (
    <div className="where-wrapper">
    <div className="infos">
      <div className="places">
        Barcelona(BCN) - Rome (ROM)
      </div>
      <div className="travel-type">
        1 adult - economy
      </div>
    
    </div>


    <div className="traveldate">
      <form action="">
        <div className="input-group"> 
        <div className="input-block">  
        <input type="text"  placeholder="First Date"  className="firstdate"/>
        </div>
        <div className="input-block">  
        <input type="text" placeholder="one way travel" className="seconddate"/>
        </div>
        </div>

        </form>
    </div>
  </div>
  )
}

export default Travel;

