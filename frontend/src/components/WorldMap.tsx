import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet'

import nightMap from '../assets/BlackMarble.png';

function WorldMap(props: any) {

  return (
    <MapContainer 
       center={[props.currentLocation.lat, props.currentLocation.lng]} zoom={2} scrollWheelZoom={true} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ImageOverlay
        bounds={[[90, -90], [-180, 180]]}
        url={nightMap}
        opacity={0.5}
      />
      {/* <Marker position={[props.currentLocation.lat, props.currentLocation.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>

  );
}

export default WorldMap;