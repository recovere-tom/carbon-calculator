import { LatLngBoundsExpression } from 'leaflet';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

type SetMapBoundsProps = {
    bounds: LatLngBoundsExpression; // Update the type of bounds
};

export const SetMapBounds = ({ bounds }: SetMapBoundsProps) => {
    const map = useMap();
    useEffect(() => {
        if (bounds) {
            map.fitBounds(bounds, { padding: [2, 2] });
        }
    }, [bounds, map]);

    return null;
};
