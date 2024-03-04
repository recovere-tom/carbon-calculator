import { useEffect, useState } from 'react';
import { calculateInternationalShipping } from '../../../utils/carbonCalcUtils/AusPostApi';
import { useFormDataContext } from '../../../utils/carbonCalcUtils/context/FormDataContext';

const ShippingCalculator = () => {
    const [shippingOptions, setShippingOptions] = useState(null);
    const { formData, setForm } = useFormDataContext();
    useEffect(() => {}, [formData]);

    useEffect(() => {
        // This function is now inside useEffect to comply with the rules of hooks
        const handleCalculateShipping = async () => {
            try {
                const data = await calculateInternationalShipping(formData); // Pass formData directly
                setShippingOptions(data);
            } catch (error) {
                console.error('Failed to calculate shipping:', error);
            }
        };

        handleCalculateShipping(); // Call the function inside useEffect
    }, [formData]); // Re-run when formData changes

    return (
        <div className="text-2xl font-black text-black">
            <button onClick={() => {}}>Calculate Shipping Cost</button>
            {shippingOptions && (
                <p>Estimated Shipping Cost: ${shippingOptions}</p>
            )}
            <p>${shippingOptions}</p>
        </div>
    );
};

export default ShippingCalculator;
