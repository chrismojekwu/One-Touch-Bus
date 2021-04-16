import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import busMarker from "../Marker/Marker";

function MapDisplay(props) {
  
    const position = [props.lat, props.lng];

    const busses = props.busList.map((bus, index) => {
      let route = "";
      const busNameList = props.busNameList;
      for (let i = 0; i < busNameList.length; i++) {
        if (busNameList[i].rtNum === bus.rt) {
          route = busNameList[i].route;
        }
      }
      return (
        <Marker position={[bus.lat, bus.lon]} key={bus.vid} icon={busMarker}>
          <Popup>
            {bus.rt} {route} to {bus.des}
          </Popup>
        </Marker>
      );
    });

    return (
      <div className="map">
        <Map
          center={position}
          zoom={props.zoom}
          style={{ width: "100%", height: "500px", borderRadius: "10px" }}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>This is your current position.</Popup>
          </Marker>
          {busses}
        </Map>
      </div>
    );  
}

export default MapDisplay;
