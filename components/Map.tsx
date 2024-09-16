import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
// import "leaflet-defaulticon-compatibility"
import { RiMapPin2Fill } from "react-icons/ri";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import L from 'leaflet';

// Custom marker icon
const customIcon = new L.Icon({
    iconUrl: '/pointmap1.png',
    iconSize: [50, 50], // Adjust size
    iconAnchor: [10, 30], // Adjust anchor
});


function Map() {
    const position: [number, number] = [27.7158144256679, 85.31192594602251];

    return (
        <div className="w-full h-full">
            <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution="Google Maps"
                    url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                />
                <Marker position={position} icon={customIcon} >
                    <Popup>
                        Create Himalaya Adventure
                        <br />
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map