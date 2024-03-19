import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { SetMapBounds } from './SetMapBounds';
import { useFormDataContext } from '../../utils/context/FormDataContext';
import originIconImage from '../../assets/carbonCalculatorAssets/OriginIcon.svg';
import destinationIconImage from '../../assets/carbonCalculatorAssets/DestinationIcon.svg';

const MapComponent = () => {
    const { formData } = useFormDataContext();

    // Custom icon
    const originIcon = L.icon({
        iconUrl: originIconImage,
        iconSize: [38, 95], // Size of the icon
        iconAnchor: [20, 60], // Anchor point of the icon
        popupAnchor: [0, -76], // Where the popup should open relative to the iconAnchor
    });
    const destinationIcon = L.icon({
        iconUrl: destinationIconImage,
        iconSize: [38, 95], // Size of the icon
        iconAnchor: [20, 60], // Anchor point of the icon
        popupAnchor: [0, -76], // Where the popup should open relative to the iconAnchor
    });

    // Markers for origin and destination
    const originMarker: [number, number] | null =
        formData.originLatitude !== null && formData.originLongitude !== null
            ? [formData.originLatitude, formData.originLongitude]
            : null;

    const destinationMarker: [number, number] | null =
        formData.destinationLatitude !== null &&
        formData.destinationLongitude !== null
            ? [formData.destinationLatitude, formData.destinationLongitude]
            : null;

    // Calculate bounds only if both origin and destination markers are valid
    const bounds =
        originMarker && destinationMarker
            ? L.latLngBounds([originMarker, destinationMarker])
            : null;

    return (
        <MapContainer
            center={[-25.2744, 133.7751]} // Default center
            zoom={1} // Default zoom level
            scrollWheelZoom={false}
            touchZoom={true}
            tap={false}
            className="flex h-[250px] flex-shrink rounded-xl border border-gray-200 shadow-md lg:h-full lg:w-full"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                noWrap={true}
            />
            {originMarker && (
                <Marker position={originMarker} icon={originIcon}>
                    <Popup>{formData.origin}</Popup>
                </Marker>
            )}
            {destinationMarker && (
                <Marker position={destinationMarker} icon={destinationIcon}>
                    <Popup>{formData.destination}</Popup>
                </Marker>
            )}
            {bounds && <SetMapBounds bounds={bounds} />}
        </MapContainer>
    );
};

export default MapComponent;
