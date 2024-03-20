import { FC, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { SetMapBounds } from './SetMapBounds';
import { useFormDataContext } from '../../utils/context/FormDataContext';
import originIconImage from '../../assets/carbonCalculatorAssets/OriginIcon.webp';
import destinationIconImage from '../../assets/carbonCalculatorAssets/DestinationIcon.webp';

interface MapComponentProps {
    isLocationsSelected: boolean;
    isItemSelected: boolean;
}

const MapComponent: FC<MapComponentProps> = ({
    isLocationsSelected,
    isItemSelected,
}) => {
    const { formData } = useFormDataContext();

    const [overlayMessage, setOverlayMessage] = useState<string>(
        'Please select starting and destination locations.'
    );
    const [showOverlay, setShowOverlay] = useState<boolean>(true);
    const [overlayTransition, setOverlayTransition] = useState<boolean>(false);

    //Overlay message and show/hide logic
    useEffect(() => {
        if (!isLocationsSelected) {
            setOverlayMessage(
                'Please select a starting and destination location.'
            );
        } else if (!isItemSelected) {
            setOverlayMessage('Please select an item.');
        }

        if (isLocationsSelected && isItemSelected) {
            setOverlayTransition(true);
            setTimeout(() => setShowOverlay(false), 500); // Delay matches the duration of the fade-out transition
        } else {
            setShowOverlay(true);
        }
    }, [isLocationsSelected, isItemSelected]);

    // Custom icon
    const originIcon = L.icon({
        iconUrl: originIconImage,
        iconSize: [40, 40], // Size of the icon
        iconAnchor: [20, 40], // Anchor point of the icon
        popupAnchor: [0, -76], // Where the popup should open relative to the iconAnchor
    });
    const destinationIcon = L.icon({
        iconUrl: destinationIconImage,
        iconSize: [40, 40], // Size of the icon
        iconAnchor: [20, 40], // Anchor point of the icon
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
        <div className="relative h-[250px] lg:h-[650px]">
            <MapContainer
                center={[-25.2744, 133.7751]}
                zoom={-1}
                scrollWheelZoom={false}
                touchZoom={true}
                tap={false}
                minZoom={0} // Set minimum zoom level
                maxZoom={5} // Set maximum zoom level
                maxBounds={[
                    [-500, -360],
                    [500, 360],
                ]} // Set max bounds for the map
                className="z-10 h-[250px] w-full rounded-xl border border-gray-200 bg-[#AAD3DF] shadow-md lg:h-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    noWrap={false}
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
            {showOverlay && (
                <div
                    className={`absolute inset-0 z-30 flex h-full w-full items-center justify-center rounded-xl bg-[#04143C]  text-center text-lg font-semibold text-white transition-all duration-500 ${overlayTransition ? 'opacity-0' : 'opacity-90'}  lg:text-xl`}
                >
                    {overlayMessage}
                </div>
            )}
        </div>
    );
};

export default MapComponent;
