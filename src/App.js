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
  const [busList, setBusList] = useState([]);
  const [busNameList, setBusNameList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonTouched, setButtonTouched] = useState(false);
  
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
          busList={updateBusList}
          userLat={lat} userLong={lng} loadingSwitch={loadingMessage}
          findBusButton={findBusButton}/>
        <MapDisplay 
          lat={lat} lng={lng} zoom={16}
          busList={busList} busNameList={busNameList} />
        <Legend/>
        <RouteDisplay busList={busList} busNameList={busNameList}
          bool={loading} buttonTouched={buttonTouched}/>
      </main>
    </>
  )
}

export default App;
