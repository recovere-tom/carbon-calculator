import { useEffect, useState } from 'react';

import { OriginLocation } from '../../../data/carbonCalcData/OriginLocations';
import { DestinationLocation } from '../../../data/carbonCalcData/DestinationLocations';
import { calculateDistance } from '../../../utils/carbonCalcUtils/CalculateDistance';
import { useFormDataContext } from '../../../utils/carbonCalcUtils/context/FormDataContext';

import DropdownOptions from './LocationDropdownOptions/DropdownOptions';
import ItemSelection from './ItemSelection/ItemSelection';
import MapComponent from '../Map/MapComponent';
import SubmitButton from '../UI/SubmitButton';
import { PinContainer } from '../UI/3d-pin';

export const Form = () => {
    const { formData, setForm } = useFormDataContext();

    // Updates Data with user selected locations

    const handleLocationChange = (
        value: string,
        type: 'origin' | 'destination'
    ) => {
        const selectedLocation = (
            type === 'origin' ? OriginLocation : DestinationLocation
        ).find((location) => location.name === value);
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
        if (
            formData.originLatitude &&
            formData.originLongitude &&
            formData.destinationLatitude &&
            formData.destinationLongitude
        ) {
            const distance = calculateDistance(
                [formData.originLatitude, formData.originLongitude],
                [formData.destinationLatitude, formData.destinationLongitude]
            );

            setForm({ distanceKM: distance });
        }
    }, [
        formData.originLatitude,
        formData.originLongitude,
        formData.destinationLatitude,
        formData.destinationLongitude,
    ]);

    // Define markers for origin and destination

    return (
        <form action="" className="flex h-full w-full flex-col gap-4">
            <h4 className=" text-2xl text-black transition-all lg:p-4 lg:text-3xl">
                Select <span className=" text-[#F8842C]">locations</span>
            </h4>{' '}
            <div className="flex h-[40rem] w-full items-center justify-center ">
                <PinContainer title={formData.origin}>
                    <div className="flex h-[40rem] w-[40rem] basis-full flex-row p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
                        <div className="flex h-full w-fit flex-col">
                            <div className="flex flex-row justify-between">
                                <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
                                    Starting Location
                                </h3>
                                <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
                                    Destination Location
                                </h3>
                            </div>
                            <div className="!m-0 flex flex-row justify-between !p-0 text-base font-normal">
                                <span className="text-slate-500 ">
                                    {formData.origin}
                                </span>
                                <span className="text-slate-500 ">
                                    {formData.destination}
                                </span>
                            </div>
                            {/* Origin dropdown */}
                            <div className="flex w-full flex-col gap-2">
                                <DropdownOptions
                                    label="Starting Location"
                                    options={OriginLocation}
                                    onChange={(value) =>
                                        handleLocationChange(value, 'origin')
                                    }
                                    defaultValue="Starting Location"
                                />
                                {/* Destination dropdown */}
                                <DropdownOptions
                                    label="Destination Location"
                                    options={DestinationLocation}
                                    onChange={(value) =>
                                        handleLocationChange(
                                            value,
                                            'destination'
                                        )
                                    }
                                    defaultValue="Destination Location"
                                />
                            </div>
                        </div>
                        <div className="relative mt-4 flex h-[200px] w-full flex-1 flex-col rounded-xl border border-gray-200 shadow-md lg:h-[500px]">
                            <MapComponent />
                        </div>
                    </div>
                </PinContainer>
            </div>
            <ItemSelection />
        </form>
    );
};
