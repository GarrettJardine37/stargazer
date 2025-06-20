import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet'

import nightMap from '../assets/BlackMarble_Magma_Linear_Blur.webp';

import LocationMarker from './LocationMarker';

function WorldMap(props: any) {

  return (
    <MapContainer
      center={ [props.currentLocation.lat, props.currentLocation.lng] }
      zoom={ 3.5 }
      scrollWheelZoom={ true }
      className="w-full h-full"
      key={`${props.currentLocation.lat},${props.currentLocation.lng}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        noWrap={true}
      />
      <ImageOverlay
        bounds={[[-90, -180], [90, 180]]}
        url={nightMap}
        opacity={0.5}
      />
      <LocationMarker
        selectedLocation={props.selectedLocation}
        onSelectLocation={props.onSelectLocation}
      />
    </MapContainer>

  );
}

export default WorldMap;