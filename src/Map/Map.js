import React from 'react'
//import key from './apiKey'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import busMarker from '../Marker/Marker'


////api key google AIzaSyDNjyMHBUT-2jacKlOKsRCur5cPm8maBBQ




class MapDisplay extends React.Component {
    componentDidMount(){
        
    }



    render(){
      

        const position = [this.props.lat, this.props.lng];

        const busses = this.props.busList.map((bus,index) => {
          let route = ""
          const busNameList = this.props.busNameList
          for(let i = 0; i < busNameList.length; i++){
            if(busNameList[i].rtNum === bus.rt){
              route = busNameList[i].route
            }
          } 
           return (
            <Marker position={[bus.lat,bus.lon]} key={bus.vid}
            icon={busMarker}>
              <Popup>
                {bus.rt} {route} to {bus.des}
              </Popup>
            </Marker>
           )
        })

        return (
            <div className="map">
                
                <Map center={position} zoom={this.props.zoom} style={{ width: '100%', height: '500px'}}>
                  <TileLayer 
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                  <Marker position={position}>
                    <Popup>
                      This is your current position.
                    </Popup>
                    </Marker> 
                    {busses}
                    
                </Map>    
            </div>
        )
    }
}

export default MapDisplay

