import React, {useEffect, useState} from 'react'
require('dotenv').config()



function TripControls(props){
  const [routes, setRoutes] = useState();
  const [boundary, setBoundary] = useState();
  const [outerBoundary, setOuterBoundary] = useState();

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    const url = `https://safe-citadel-66220.herokuapp.com/http://ctabustracker.com/bustime/api/v2/getroutes?key=${key}&format=json`

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setRoutes(data['bustime-response'].routes)
    })

  }, []);
  
  const navigatorGeo = () => {
      props.loadingSwitch() 
      props.findBusButton()
      window.navigator.geolocation.getCurrentPosition(relayCoords)
  }
  
  const relayCoords = (geoLocationPos) => {
      const userCoords = geoLocationPos.coords;
      const latt = userCoords.latitude;
      const long = userCoords.longitude;
      const block = .001500 
      const threeBlocks = .004300

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
      props.setLat(latt)
      props.setLong(long)
      //props.createBoundary(latt,long)
      
      reverseGeocode(boundary, outerBoundary)
      
  };

    /** cant afford to pay for geocoding service :( **/ 
  const reverseGeocode = (boundary, outerBoundary) => {

  
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
                filterStreets(boundaryStreets, outerBoundary)
              })
            )
          }, 7000)
         })

  };  
    
  const filterStreets = (boundaryStreets, outerBoundary) => {

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
       getClosestBus(results, outerBoundary)
  };

  const getClosestBus = (results, outerBoundary) => {

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
        getBusWithinBoundary(data['bustime-response'].vehicle, results, outerBoundary)
       })
  };

  const getBusWithinBoundary = (response, routeNames, outerBoundary) => {

      const boundary = outerBoundary;
      const filtered = [];
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