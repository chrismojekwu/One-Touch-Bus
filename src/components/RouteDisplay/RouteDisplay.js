import React from 'react'


function RouteDisplay(props) {

  const loadingMessage = () => {
    return(
     <div className="loader"></div>
    )
  }

  const emptyBusses = () => {
    return(
      <div className="empty">
        Couldn't find a bus.
      </div>
    )
  }

  const busses = props.busList?.map((bus,index) => {
    let route = ""
    const busNameList = props.busNameList
    for(let i = 0; i < busNameList.length; i++){
      if(busNameList[i].rtNum === bus.rt){
        route = busNameList[i].route
      }
    } 
     return (
          <div className="bus" key={index} data-testid="close-bus">
           <h3>Route {bus.rt} {route}</h3>
           <p className="destination">Destination: {bus.des}</p>
          </div>
      )
  })
  
  return (
      <section className="display" data-testid="bus-display"> 
        <h2>Nearby Buses:</h2>
        {props.bool === false || busses.length > 0 ? "" : loadingMessage()}
        {props.buttonTouched === true 
        && busses.length < 1 
        && props.bool === false ? emptyBusses():busses}
      </section>
  )
    
}

export default RouteDisplay