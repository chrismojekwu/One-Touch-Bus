import React from 'react'


class RouteDisplay extends React.Component {

  loadingMessage = () => {
    return(
     <div className="loader"></div>
    )
  }

  emptyBusses = () => {
    return(
      <div className="empty">
        Couldn't find a bus.
      </div>
    )
  }

  render(){
      const busses = this.props.busList.map((bus,index) => {
        let route = ""
        const busNameList = this.props.busNameList
        for(let i = 0; i < busNameList.length; i++){
          if(busNameList[i].rtNum === bus.rt){
            route = busNameList[i].route
          }
        } 
         return (
              <div className="bus" key={index}>
               <h3>Route {bus.rt} {route}</h3>
               <p className="destination">Destination: {bus.des}</p>
              </div>
          )
      })
        return (
            <section className="display">
              <h2>Nearby Buses:</h2>
              {this.props.bool === false ? "" : this.loadingMessage()}
              {this.props.buttonTouched === true 
              && busses.length < 1 
              && this.props.bool === false ? this.emptyBusses():busses}
            </section>
        )
    }
}

export default RouteDisplay