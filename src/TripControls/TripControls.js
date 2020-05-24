import React from 'react'
import User from '../img/marker-icon.png'
import Bus from '../img/bus-icon.png'
//require('dotenv').config({path:__dirname+'../env'})



class TripControls extends React.Component {
  state = {
    routes: [],
  }
    navigatorGeo(){
        this.props.loadingSwitch() 
        this.props.findBusButton()
        window.navigator.geolocation.getCurrentPosition(this.relayCoords)
     }

    relayCoords = (geoLocationPos) => {
        const userCoords = geoLocationPos.coords;
        const latt = userCoords.latitude
        const long = userCoords.longitude
        this.props.setLat(latt)
        this.props.setLong(long)
        this.props.createBoundary(latt,long)
        
        this.reverseGeocode()
    
      };

    reverseGeocode = () => {
      
     const boundary = this.props.boundary;
     const outerBoundary = this.props.outerBoundary;
     const userLat = this.props.userLat;
     const userLong  = this.props.userLong;

     const key = process.env.REACT_APP_GEOCODE_KEY
     
     const user = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${userLat}&lon=${userLong}&format=json`

     const url1 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${boundary[0].lat}&lon=${boundary[0].long}&format=json`
     const url2 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${boundary[1].lat}&lon=${boundary[1].long}&format=json`
     const url3 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${boundary[2].lat}&lon=${boundary[2].long}&format=json`
     const url4 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${boundary[3].lat}&lon=${boundary[3].long}&format=json`
     const url5 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${outerBoundary[0].lat}&lon=${outerBoundary[0].long}&format=json`
     const url6 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${outerBoundary[1].lat}&lon=${outerBoundary[1].long}&format=json`
     const url7 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${outerBoundary[2].lat}&lon=${outerBoundary[2].long}&format=json`
     const url8 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${outerBoundary[3].lat}&lon=${outerBoundary[3].long}&format=json`
     const url9 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${outerBoundary[4].lat}&lon=${outerBoundary[4].long}&format=json`
     const url10 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${outerBoundary[5].lat}&lon=${outerBoundary[5].long}&format=json`
     const url11 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${outerBoundary[6].lat}&lon=${outerBoundary[6].long}&format=json`
     const url12 = `https://us1.locationiq.com/v1/reverse.php?key=${key}&lat=${outerBoundary[7].lat}&lon=${outerBoundary[7].long}&format=json`
     
     const boundaryStreets = []
         new Promise(resolve => {
       setTimeout(() => {
         resolve(fetch(url1)
           .then(res => {
             return res.json()})
           .then(data => {
            boundaryStreets.push(data.address)})
         )
       }, 1000)
         })
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url2)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)})
            )
          }, 1500)
         })
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url3)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)})
            )
          }, 2000)
         })
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url4)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 2500)
         })  
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url5)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 3000)
         })   
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url6)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 3500)
         })   
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url7)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 4000)
         })   
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url8)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 4500)
         })   
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url9)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 5000)
         })   
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url10)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 5500)
         })   
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url11)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 6000)
         })    
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(url12)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
              })
            )
          }, 6500)
         })  
         new Promise(resolve => {
          setTimeout(() => {
            resolve(fetch(user)
              .then(res => {
                return res.json()})
              .then(data => {
                boundaryStreets.push(data.address)
                //console.log(boundaryStreets)
                this.filterStreets(boundaryStreets)
              })
            )
          }, 7000)
         })         
     
    }  
    
    filterStreets = (boundaryStreets) => {
      const street = boundaryStreets.map(street => {
         
        if (!street || street === undefined){
            return "No-Road"
         }  
        if(street.road){
          return street.road.split(" ")[1]
        }else{
           return "No-Road"
           } 
      });
      const bus = this.state.routes.map((routes) => {
        return {route: routes.rtnm, rtNum: routes.rt} 
      });
      let results = bus.filter((el) => {
        return street.indexOf(el.route) >= 0
      });
       this.getClosestBus(results)
    }

    getClosestBus = (results) => {

      const routeList = results.map((busRoutes) => {
        return busRoutes.rtNum
      }).join(",")


      const key = process.env.REACT_APP_API_KEY
      const url = `https://cors-anywhere.herokuapp.com/http://ctabustracker.com/bustime/api/v2/getvehicles?key=${key}&rt=${routeList}&format=json`
      
      
      fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.getBusWithinBoundary(data['bustime-response'].vehicle, results)
       })
    }

    getBusWithinBoundary = (response,routeNames) => {
      const boundary = this.props.outerBoundary;
      const filtered = []
      const pad = .0004

      
      if(response === undefined){
        filtered.push("No Buses")
        this.props.loadingSwitch()
        return false;
      }

      for(let i = 0; i < response.length; i++){
          if((boundary[0].lat + pad ) > response[i].lat && 
            (boundary[0].long + pad) > response[i].lon && 
            (boundary[1].lat - pad) < response[i].lat && 
            (boundary[1].long + pad) > response[i].lon && 
            (boundary[2].lat - pad) < response[i].lat && 
            (boundary[2].long - pad) < response[i].lon && 
            (boundary[3].lat + pad) > response[i].lat && 
            (boundary[3].long - pad) < response[i].lon){
            filtered.push(response[i])
          } 
       }

      //console.log(filtered)
      this.props.loadingSwitch()
      this.props.busList(filtered,routeNames)
    }
    
    componentDidMount(){
      const key = process.env.REACT_APP_API_KEY
      const url = `https://cors-anywhere.herokuapp.com/http://ctabustracker.com/bustime/api/v2/getroutes?key=${key}&format=json`

      fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          routes: data['bustime-response'].routes
        })
      })
    }  

      

    render(){
        return (
            <section className="tripControls">
              <input 
               onClick={()=> this.navigatorGeo()}
               id="bus-button" type="button" value="FIND MY BUS"/>
               <div className="tooltip">
                 <b>HELP</b>
                  <span className="tooltiptext">Please click Find My Bus to list bustimes, route and destination can also be viewed by clicking on the bus icons on the map.</span>
               </div>

               <section className="legend">
                 <img className="legend-icon" src={User} alt="Icon for the users positon."/>Your Current Position
                 <img className="legend-icon" src={Bus} alt="Icon for any nearby buses."/>Bus (Click for Route Name and Destination)
               </section>

              
             
            </section>
        )
    }
}

export default TripControls