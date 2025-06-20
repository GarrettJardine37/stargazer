import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import WorldMap from '../components/WorldMap';
import ContributionModal from '../components/ContributionModal';

interface locationState {
  lat: number;
  lng: number;
}

function LandingPage() {
  const [currentLocation, setCurrentLocation]  = useState<locationState >({lat: 0, lng: 0});
  const [selectedLocation, setSelectedLocation] = useState<locationState | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

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
    <div className="h-screen w-screen">
      <WorldMap
        currentLocation={currentLocation}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
      />
      <Button className="fixed bottom-4 left-4 z-50 bg-white bg-opacity-80 text-black" onClick={handleShow}>
        Attributions
      </Button>
      <ContributionModal show={showModal} onSetModal={setShowModal}/>
    </div>
  );
}

export default LandingPage;