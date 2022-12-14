import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function Map() {

    return (
        <MapContainer
          center={[51.505, -0.09]}
          zoom={15}
          // scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>



        // <div className="map">
        //     <h1>ola mundo</h1>
        // </div>
    )
}