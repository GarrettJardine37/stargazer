import { useRef, useEffect } from 'react';
import {Marker, Popup, useMapEvents} from 'react-leaflet'


function LocationMarker(props: any) {
  const markerRef = useRef<L.Marker>(null);

    useEffect(() => {
    if (markerRef.current && props.selectedLocation) {
      setTimeout(() => {
        if (markerRef.current) {
          markerRef.current.openPopup();
        }
      }, 0);
    }
  }, [props.selectedLocation]);

  useMapEvents({
    click(e) {
      props.onSelectLocation({
        lat: e.latlng.lat,
        lng: e.latlng.lng
      });
    }
  })

  if (!props.selectedLocation) return null;

  return (
    <Marker ref={markerRef} position={[props.selectedLocation.lat, props.selectedLocation.lng]}>
      <Popup>
        <div className='text-center text-blue-700 text-s font-bold '>Cooridinates</div>
        <div className='text-center text-s'>Lat: {props.selectedLocation.lat.toFixed(6)} Lng: {props.selectedLocation.lng.toFixed(6)}</div>
      </Popup>
    </Marker>
  );
}

export default LocationMarker;