import { FC, useEffect } from 'react';

import DropdownOptions from './LocationDropdownOptions/DropdownOptions';
import ItemSelection from './ItemSelection/ItemSelection';
import { useFormDataContext } from '../../utils/context/FormDataContext';
import { OriginLocation } from '../../data/carbonCalcData/OriginLocations';
import { DestinationLocation } from '../../data/carbonCalcData/DestinationLocations';
import { calculateDistance } from '../../utils/CalculateDistance';
import MapComponent from '../Map/MapComponent';

interface Location {
    name: string;
    latitude: number;
    longitude: number;
    countryCode: string;
}

export const Form: FC = () => {
    const { formData, setForm } = useFormDataContext();

    // Logic to check if both origin and destination are selected for map rendering
    const isLocationsSelected = Boolean(
        formData.origin && formData.destination
    );
    const isItemSelected = Boolean(formData.itemName);
    // Updates Data with user selected locations

    const handleLocationChange = (
        value: string,
        type: 'origin' | 'destination'
    ) => {
        const locations: Location[] =
            type === 'origin' ? OriginLocation : DestinationLocation;
        const selectedLocation = locations.find(
            (location) => location.name === value
        );

        if (selectedLocation) {
            setForm({
                [type]: value,
                [`${type}Latitude`]: selectedLocation.latitude,
                [`${type}Longitude`]: selectedLocation.longitude,
                [`${type}CountryCode`]: selectedLocation.countryCode,
            });
        }
    };

    // Calculate and update distance when origin or destination changes

    useEffect(() => {
        const {
            originLatitude,
            originLongitude,
            destinationLatitude,
            destinationLongitude,
        } = formData;
        if (
            originLatitude &&
            originLongitude &&
            destinationLatitude &&
            destinationLongitude
        ) {
            const distance = calculateDistance(
                [originLatitude, originLongitude],
                [destinationLatitude, destinationLongitude]
            );
            setForm({ distanceKM: distance });
        }
    }, [
        formData.originLatitude,
        formData.originLongitude,
        formData.destinationLatitude,
        formData.destinationLongitude,
    ]);

    return (
        <form className="flex h-full w-full flex-col lg:max-h-[600px] lg:flex-row">
            {/* User Form Interface */}
            <div className="flex flex-grow flex-col gap-4 lg:gap-6">
                <h4 className="text-2xl text-black transition-all lg:text-3xl">
                    Select <span className="text-[#F8842C]">locations</span>
                </h4>
                {/* DropDown Menu Item - Starting Location  */}
                <DropdownOptions
                    label="Starting Location"
                    options={OriginLocation}
                    onChange={(value) => handleLocationChange(value, 'origin')}
                    defaultValue="Starting Location"
                />
                {/* DropDown Menu Item - Destination Location  */}

                <DropdownOptions
                    label="Destination Location"
                    options={DestinationLocation}
                    onChange={(value) =>
                        handleLocationChange(value, 'destination')
                    }
                    defaultValue="Destination Location"
                />

                {/* Map Component for mobile view */}
                {/* This map is for aesthetic purposes only */}
                <div
                    aria-hidden="true"
                    aria-label="Decorative Map"
                    className="relative mx-auto mb-10 h-[200px] w-[99%] flex-col  lg:hidden"
                >
                    <MapComponent
                        isLocationsSelected={isLocationsSelected}
                        isItemSelected={isItemSelected}
                    />
                </div>

                {/*  Item Selection Component */}
                <ItemSelection />
            </div>

            {/* Map Component for non-mobile view */}
            {/* This map is for aesthetic purposes only */}
            <div
                aria-label="Decorative Map"
                className="relative hidden w-[80%] flex-col rounded-xl lg:ml-12 lg:flex lg:h-[650px]"
            >
                <MapComponent
                    isLocationsSelected={isLocationsSelected}
                    isItemSelected={isItemSelected}
                />
            </div>
        </form>
    );
};
