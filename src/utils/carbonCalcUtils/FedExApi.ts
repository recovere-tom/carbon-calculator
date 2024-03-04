const FEDEX_API_URL = import.meta.env.VITE_FEDEX_API_URL;
const FEDEX_API_KEY = import.meta.env.VITE_FEDEX_API_KEY;

// Function to call FedEx API
export const calculateShippingCost = async (
    requestBody: string
): Promise<any> => {
    try {
        const response = await fetch(FEDEX_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-locale': 'en_US', // Assuming this is required as per FedEx's example
                Authorization: `Bearer ${FEDEX_API_KEY}`,
            },
            body: requestBody, // Your JSON request
        });

        if (!response.ok) {
            throw new Error(
                `FedEx API responded with status ${response.status}`
            );
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error calling FedEx API:', error);
        throw error; // Re-throwing the error to be handled by the caller
    }
};
