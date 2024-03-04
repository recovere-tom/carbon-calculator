import { FormData } from '../../data/carbonCalcData/FormData'; // Assuming you have a FormData type defined

const AUSPOST_API_URL =
    'https://digitalapi.auspost.com.au/postage/parcel/international/calculate.json';
const AUSPOST_API_KEY = import.meta.env.VITE_AUSPOST_API_KEY;

export const calculateInternationalShipping = async (formData: FormData) => {
    const headers = new Headers({
        'AUTH-KEY': AUSPOST_API_KEY,
    });
    console.log(
        formData.destinationCountryCode,
        formData.itemWeight.toString(),
        'INT_PARCEL_SEA_OWN_PACKAGING'
    );
    const queryParams = new URLSearchParams({
        country_code: formData.destinationCountryCode,
        weight: formData.itemWeight.toString(),
        service_code: 'INT_PARCEL_SEA_OWN_PACKAGING',
    });

    console.log('queryParams', queryParams);

    const response = await fetch(`${AUSPOST_API_URL}?${queryParams}`, {
        headers,
        mode: 'no-cors',
    });

    console.log('response HERE HERE', response);
    if (!response.ok) {
        throw new Error(
            `Australia Post API responded with status ${response.status}`
        );
    }

    return response.json();
};
