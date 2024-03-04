import { useState } from 'react';
// This is the type of the form data
export type FormData = {
    origin: string;
    originLongitude: number;
    originLatitude: number;
    originCountryCode: string;

    destination: string;
    destinationLongitude: number;
    destinationLatitude: number;
    destinationCountryCode: string;
    distanceKM: number;

    itemName: string;
    itemDescription: string;
    itemQuantity: number;
    itemWeight: number;
    itemVolume: number;

    itemLocalCost: number;
    shippingCost: number;

    totalItemCost: number;
    totalComparisonCost: number;

    CO2emissions: number;
};
// This is the initial state of the form
export const INITIAL_DATA: FormData = {
    origin: '',
    originLongitude: 0,
    originLatitude: 0,
    originCountryCode: '',

    destination: '',
    destinationLongitude: 0,
    destinationLatitude: 0,
    destinationCountryCode: '',

    distanceKM: 0,

    itemName: '',
    itemDescription: '',
    itemQuantity: 0,
    itemWeight: 0,
    itemVolume: 0,

    itemLocalCost: 0,
    shippingCost: 0,

    totalItemCost: 0,
    totalComparisonCost: 0,

    CO2emissions: 0,
};

// This is a custom hook that will be used to manage the form state
export const useFormState = () => {
    const [formData, setFormData] = useState(INITIAL_DATA);

    const setForm = (newData: Partial<FormData>) => {
        setFormData((prev) => ({
            ...prev,
            ...newData,
        }));
    };

    return { formData, setForm };
};
