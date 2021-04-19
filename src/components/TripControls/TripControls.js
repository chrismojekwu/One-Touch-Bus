import React, {useEffect, useState} from 'react'
require('dotenv').config()



function TripControls(props){
  const [routes, setRoutes] = useState({});

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    const url = `https://safe-citadel-66220.herokuapp.com/http://ctabustracker.com/bustime/api/v2/getroutes?key=${key}&format=json`

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setRoutes({routes: data['bustime-response'].routes})
    })

  });
  
  const navigatorGeo = () => {
      props.loadingSwitch() 
      props.findBusButton()
      window.navigator.geolocation.getCurrentPosition(relayCoords)
  }
  
  const relayCoords = (geoLocationPos) => {
      const userCoords = geoLocationPos.coords;
      const latt = userCoords.latitude
      const long = userCoords.longitude
      props.setLat(latt)
      props.setLong(long)
      props.createBoundary(latt,long)
      
      reverseGeocode()
  
  };

    /** cant afford to pay for geocoding service :( **/ 
  const reverseGeocode = () => {

     const boundary = props.boundary;
     const outerBoundary = props.outerBoundary;
     const userLat = props.userLat;
     const userLong  = props.userLong;

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
                filterStreets(boundaryStreets)
              })
            )
          }, 7000)
         })         
  };  
    
  const filterStreets = (boundaryStreets) => {

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
      const bus = routes.map((routes) => {
        return {route: routes.rtnm, rtNum: routes.rt} 
      });
      let results = bus.filter((el) => {
        return street.indexOf(el.route) >= 0
      });
       getClosestBus(results)
  };

  const getClosestBus = (results) => {

      const routeList = results.map((busRoutes) => {
        return busRoutes.rtNum
      }).join(",")


      const key = process.env.REACT_APP_API_KEY
      const url = `https://safe-citadel-66220.herokuapp.com/http://ctabustracker.com/bustime/api/v2/getvehicles?key=${key}&rt=${routeList}&format=json`
      
      
      fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        getBusWithinBoundary(data['bustime-response'].vehicle, results)
       })
  };

  const getBusWithinBoundary = (response,routeNames) => {
      

      const boundary = props.outerBoundary;
      const filtered = []
      const pad = .0004

      
      if(response === undefined){
        filtered.push("No Buses")
        props.loadingSwitch()
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

      props.loadingSwitch()
      props.busList(filtered,routeNames)
  };
    
    
  return (
      <section className="tripControls">
        <input 
         onClick={()=> navigatorGeo()}
         id="bus-button" type="button" value="FIND MY BUS"/>
         <div className="tooltip">
           <b>HELP</b>
            <span className="tooltiptext">Please click Find My Bus to list bustimes, route and destination can also be viewed by clicking on the bus icons on the map.</span>
         </div>
      </section>
  )
    
}

export default TripControls