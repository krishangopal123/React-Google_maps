import React, { useState, useEffect, Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


function Map() {
    const [s3,fs3]=useState(0)
    const [s4,fs4]=useState(0)
    function getCoordinates(position){
       
        //l1=position.coords.latitude
        fs3(position.coords.latitude)
        fs4(position.coords.longitude)
        //l2=position.coords.longitude
        console.log(position.coords)
    }
    function myfun(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getCoordinates)
        }

    }
    const [selectedPark, setSelectedPark] = useState(0);
    const [s1,fs1]=useState(45.4211)
    const [s2,fs2]=useState(0)

  return (
     
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: parseFloat(s3), lng: parseFloat(s4) }}
      
    >
     <input type="number" placeholder="long" onChange={event=>{fs1(event.target.value)}}/>
     <input type="number" placeholder="lat" onChange={event=>{fs2(event.target.value)}}/>
     <h1>{s3}</h1>
     <h1>{s4}</h1>
     <button onClick={myfun}>Click Me</button>

    
        <Marker position={{ lat:parseFloat( s3 ), lng: parseFloat(s4) }}
         onClick={() => {
            setSelectedPark(1);
          }}/>
        <Marker position={{lat:46,lng:-76.693}} />
        {selectedPark&&(<InfoWindow  onCloseClick={()=>{setSelectedPark(0)}} position={{
            lat: 45.4211,
            lng: -75.6903
          }}>
            <div>
                <h2>"hello beta"</h2>
            </div>

            
            </InfoWindow>
            )}
     </GoogleMap>)

}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default class  App extends Component {
    render(){
  return (
    <div style={{width:"100vw",height:"100vh"}}>
    <MapWrapped googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp &libraries=geometry,drawing,places&key=AIzaSyB3sF_hKR7V7BjtZcrqXH_lMNBE2IYSToA` }
    
    loadingElement={<div style={{ height: `50%` }} />}
    containerElement={<div style={{ height: `50%` }} />}
    mapElement={<div style={{ height: `50%` }} />}
    />
    </div>
  );
}
}