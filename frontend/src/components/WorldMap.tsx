import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function WorldMap(props: any) {
  return (
    <MapContainer 
       center={[props.currentLocation.lat, props.currentLocation.lng]} zoom={7} scrollWheelZoom={true} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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