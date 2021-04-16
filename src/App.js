import React from 'react';
import Header from './components/Header/Header'
import MapDisplay from './components/Map/Map'
import TripControls from './components/TripControls/TripControls'
import RouteDisplay from './components/RouteDisplay/RouteDisplay'
import Legend from './components/Legend/Legend'
import './App.css';



class App extends React.Component {
   state = {
     lat: 41.8781,
     lng: -87.6298,
     zoom: 16,
     boundary: [],
     outerBoundary: [],
     buslist:[],
     busNameList: [],
     loading: false,
     buttonTouched:false
   }
   
   setLat = (lat) => {
     this.setState({
       lat:lat
     })
   }
   setLong = (long) => {
     this.setState({
       lng: long
     })
   }
   
   createBoundary = (latt,long) => {
    let block = .001500 
    let threeBlocks = .004300

    const boundary = [
      {
        dir: "NE", lat: latt + block , long: long + block
      },
      {
        dir: "SE" , lat: latt - block, long: long + block
      },
      {
        dir: "SW" , lat: latt - block , long: long - block
      },
      {
        dir: "NW" , lat: latt + block, long: long - block
      }
    ]

    const outerBoundary = [
      {
        dir: "NE", lat: latt + threeBlocks , long: long + threeBlocks 
      },
      {
        dir: "SE" , lat: latt - threeBlocks , long: long + threeBlocks 
      },
      {
        dir: "SW" , lat: latt - threeBlocks  , long: long - threeBlocks 
      },
      {
        dir: "NW" , lat: latt + threeBlocks , long: long - threeBlocks 
      },
      {
        dir: "N" , lat: latt + threeBlocks , long: long
      },
      {
        dir: "E" , lat: latt , long: long + threeBlocks 
      },
      {
        dir: "S" , lat: latt - threeBlocks , long: long 
      },
      {
        dir: "W" , lat: latt , long: long - threeBlocks 
      },
    ]


    
    this.setState({
      boundary
    })

    this.setState({
      outerBoundary
    })
   }
  
   updateBusList = (buslist,busNameList) => {
     this.setState({
       buslist
     })
     this.setState({
      busNameList
    })
   }

   loadingMessage = () => {
     const bool = this.state.loading;

     this.setState({
      loading:!bool,
     })
   }
   
   findBusButton = () => {
     this.setState({
       buttonTouched: true
     })
   }
   

   

  render(){
    return (
      <> 
        <Header/>
        <main className="container">
          <TripControls 
          setLat={this.setLat} setLong={this.setLong}
          createBoundary={this.createBoundary} boundary={this.state.boundary} 
          outerBoundary={this.state.outerBoundary} busList={this.updateBusList}
          userLat={this.state.lat} userLong={this.state.lng} loadingSwitch={this.loadingMessage}
          findBusButton={this.findBusButton}/>
          <MapDisplay 
          lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom}
          boundary={this.state.boundary} outerBoundary={this.state.outerBoundary}
          busList={this.state.buslist} busNameList={this.state.busNameList} />
          <Legend/>
          <RouteDisplay busList={this.state.buslist} busNameList={this.state.busNameList}
          bool={this.state.loading} buttonTouched={this.state.buttonTouched}/>
        </main>
      </>
    )
  }
}

export default App;
