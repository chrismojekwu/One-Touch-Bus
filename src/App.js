import React, {useState} from 'react';
import Header from './components/Header/Header'
import MapDisplay from './components/Map/Map'
import TripControls from './components/TripControls/TripControls'
import RouteDisplay from './components/RouteDisplay/RouteDisplay'
import Legend from './components/Legend/Legend'
import './App.css';



function App(){
  const [lat, setLat] = useState(41.8781);
  const [lng, setLong] = useState(-87.6298);
  const [boundary, setBoundary] = useState([]);
  const [outerBoundary, setOuterBoundary] = useState([]);
  const [busList, setBusList] = useState([]);
  const [busNameList, setBusNameList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonTouched, setButtonTouched] = useState(false);
  
  const createBoundary = (latt,long) => {
    let block = .001500 
    let threeBlocks = .004300

    const boundary = [
    {dir: "NE", lat: latt + block , long: long + block},
    {dir: "SE" , lat: latt - block, long: long + block},
    {dir: "SW" , lat: latt - block , long: long - block},
    {dir: "NW" , lat: latt + block, long: long - block}
    ];

    const outerBoundary = [
    {dir: "NE", lat: latt + threeBlocks , long: long + threeBlocks },
    {dir: "SE" , lat: latt - threeBlocks , long: long + threeBlocks },
    {dir: "SW" , lat: latt - threeBlocks  , long: long - threeBlocks },
    {dir: "NW" , lat: latt + threeBlocks , long: long - threeBlocks },
    {dir: "N" , lat: latt + threeBlocks , long: long},
    {dir: "E" , lat: latt , long: long + threeBlocks },
    {dir: "S" , lat: latt - threeBlocks , long: long },
    {dir: "W" , lat: latt , long: long - threeBlocks },
    ];

    setBoundary(boundary);
    setOuterBoundary(outerBoundary);      
  };
   
  
  const updateBusList = (buslist,busNameList) => {
    setBusList(buslist);
    setBusNameList(busNameList);
  }

  const loadingMessage = () => {
    const bool = loading;
    setLoading(!bool);
  };
   
  const findBusButton = () => {
    setButtonTouched(true);
  };
   
  return (
    <> 
      <Header/>
      <main className="container">
        <TripControls 
        setLat={setLat} setLong={setLong}
        createBoundary={createBoundary} boundary={boundary} 
        outerBoundary={outerBoundary} busList={updateBusList}
        userLat={lat} userLong={lng} loadingSwitch={loadingMessage}
        findBusButton={findBusButton}/>
        <MapDisplay 
        lat={lat} lng={lng} zoom={16}
        boundary={boundary} outerBoundary={outerBoundary}
        busList={busList} busNameList={busNameList} />
        <Legend/>
        <RouteDisplay busList={busList} busNameList={busNameList}
        bool={loading} buttonTouched={buttonTouched}/>
      </main>
    </>
  )
}

export default App;
