import React from 'react'; 
import Travel from './components/travel'
import ResultCard from './components/resultcard'
import TravelResults from './components/travelresults'
import './App.css';
import './Global.css';

function App() {
  return ( <>
    <div className="travel-container">
    <Travel></Travel>
      <div className="profile-card">
        <div className="user-info-card"> 
        <div className="user-avatar">
        <img alt="profile" src="https://www.vagalume.com.br/john-mayer/images/john-mayer.jpg"
        /></div>
        <div className="user-names"> 
        <div className="greetings">
          Hello,
        </div>
        <div className="name">
          Genaro Schneider
        </div>
        </div>
        </div>
        <div className="expand-menu">
          <span>.</span>
          <span>.</span>
        </div>
      </div>



    </div>

<div className="travel-container">
 
 <div className="travel-results">
   <p className="numbers"> 182 Results</p>
   <div className="cards-results">
   <ResultCard price="95" type="Fastest"></ResultCard>
   <ResultCard price="25" type="Best"></ResultCard>
   <ResultCard price="16" type="Cheapest" active="true"></ResultCard> 
   <ResultCard price="58" type="Fly greener"  ></ResultCard> 

   </div>

 <br></br>  
<TravelResults
  travelHourstart="10:30 AM" 
  travelCitystart="Barcelona (BCN)"
  travelDatestart="Tuesday, Apr 21, 2020" 
  duration="1h 50m" 
  stop="Non-Stop" 
  travelHourend="12:20 AM"
  travelCityend="Rome (ROM)" 
  travelDateend="Tuesday, Apr 21, 2020"
  price="90"
></TravelResults>

<TravelResults
  travelHourstart="13:45 PM" 
  travelCitystart="Barcelona (BCN)"
  travelDatestart="Tuesday, Apr 21, 2020" 
  duration="17h 50m" 
  stop="PMI,VLC" 
  travelHourend="03:50 PM"
  travelCityend="Rome (ROM)" 
  travelDateend="Wednesday, Apr 22, 2020"
  price="30"
></TravelResults>

<TravelResults
  travelHourstart="10:30 AM" 
  travelCitystart="Barcelona (BCN)"
  travelDatestart="Tuesday, Apr 21, 2020" 
  duration="1h 50m" 
  stop="VIE" 
  travelHourend="12:20 AM"
  travelCityend="Rome (ROM)" 
  travelDateend="Tuesday, Apr 21, 2020"
  price="67"
></TravelResults>

 </div>
 


</div>


</>
  );
}

export default App;
