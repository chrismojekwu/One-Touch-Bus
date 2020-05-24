import L from 'leaflet';


const busMarker = new L.icon({
    iconUrl:require('../img/bus-icon.png'),
    shadowUrl:require('../img/bus-icon-shadow.png'),
    iconRetinaUrl:require('../img/bus-icon.png'),
    iconSize:[40, 40], 
    shadowSize:[30, 30], 
    iconAnchor:[20, 62], 
    shadowAnchor:[0, 54],  
    popupAnchor:[5, -60],
    className: 'bus-icon'
  
  });

  export default busMarker