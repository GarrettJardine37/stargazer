import { useState, useEffect } from 'react';

import WorldMap from '../components/WorldMap';

interface locationState {
  lat: number;
  lng: number;
}

function LandingPage() {
  const [currentLocation, setCurrentLocation]  = useState<locationState>({ lat: 40.006857, lng: -102.043166 }); // Default to a location middle of the US

  function success(position : GeolocationPosition) {
    setCurrentLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

  function error() {
    console.error("Unable to retrieve your current location."); 
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div className="grid">
      <h1>Welcome to the Landing Page</h1>
      <p>Your current location is: {currentLocation.lat}, {currentLocation.lng}</p>
      <WorldMap currentLocation={currentLocation}/>
    </div>
  );
}

export default LandingPage;