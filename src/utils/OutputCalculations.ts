import { useFormDataContext } from './context/FormDataContext';

// Unused Assumptions
// // Reference: https://www.offsetguide.org/understanding-carbon-offsets/air-travel-climate/climate-impacts-from-aviation/co2-emissions/
// // Plane fuel consumption: 3.16kg CO2e per kg of fuel
// // Fuel Consumption: 3,000 kg of fuel per hour
// // 1 tonne of CO2e = 1,000 kg of CO2e
// // 1 hour of flying = 3,000 kg of fuel and 9,480 kg of CO2e

// // Reference: https://dfreight.org/blog/types-of-all-cargo-aircraft-comprehensive-guide/
// // cargo plane can hold 120 tonnes of cargo or 120,000 kg

// // Reference for average speed of a plane:
// // https://gitnux.org/average-speed-of-a-plane/#:~:text=The%20cruising%20speed%20of%20a,plane%20is%20about%20560%20mph.
// // average speed of a plane is about 900 km/h (560 mph)
// // therefore 1 hour of flying = 900 km
// // const fuelSurchargeRate = 0.2825; // Fuel surcharge expressed as a decimal (as of Feb 2024)

// //     const fuelConsumptionPerHour = 3000; // kg of fuel
// //     const speedOfPlane = 900; // Average speed in km/h
// //     const CO2ePerKgFuel = 3.16; // kg CO2e per kg of fuel
// //     const cargoCapacity = 120000; // kg

// //     Calculate total CO2e for the flight based on item weight (Original)
// //     const calculateTotalCO2e = (distance: number, weight: number) => {
// //         const flightDurationHours = distance / speedOfPlane;
// //         const fuelUsed = fuelConsumptionPerHour * flightDurationHours;
// //         const CO2eForFlight = fuelUsed * CO2ePerKgFuel;
// //         const CO2ePerKgCargo = CO2eForFlight / cargoCapacity;
// //         return CO2ePerKgCargo * weight; // Total CO2e in kg for the item
// //     };

// Assumptions

// SHIPPING COSTS
// OPTION 1
// Reference: https://auspost.com.au/content/dam/auspost_corp/media/documents/post-guides/international-post-charges-easy-guide.pdf
// Zone 1 (New Zealand): $18.78 per kg
// Zone 2 (Asia Pacific): $29.40 per kg
// Zone 3 (US & Canada): $32.43 per kg
// Zone 4 (UK & Europe):  $35.63 per kg
// Zone 5 (Rest of the World): $44.88 per kg
// Average shipping cost base rate per kg = 32 AUD

// OPTION 2
//Reference: https://www.dfsworldwide.com/Shipping-to-Australia.html
// Heathrow airport to Sydney airport or Melbourne airport: (Airport to Airport price guideline)
// 50 kg =  £150.00
// 100kg = £240.00
// 200kg = £420.00
// On average: 1kg = £2.50
// 1 GDP = 1.9 $AUD (as of Feb 2024)
// Approx 1kg = 2.5 * 1.9 = 4.75 AUD to ship from Heathrow to Sydney or Melbourne

//Reference for water bottle cost:
// https://www.statista.com/chart/29544/cost-of-a-bottle-of-water-around-the-world/
// Average cost per bottle in AUD = 0.7

//Reference for trees needed to offset emissions:
// https://treesforlife.org.au/
// 5 trees per 1 tone of CO2e

//Reference for mobile phone charging:
// https://www.carbonfootprint.com/mobile_phone_charge.html
// 1.825 kWh per year per person
// Australasia/Oceania emissions factor = 0.44385 kgCO2e
// therefore 1 phone charged per day per year = 0.81002625 kg CO2e

// Emissions factor example is in terms of tonnes,
// the weight of the fridge (135 kg) needs to be converted to tonnes.
// Weight in tonnes=  Kgs / 1000 or Kgs * 0.001
// Weight in tonnes= 135 × 0.001
// Weight in tonnes= 0.135

// Total Emissions (in CO2) = Emissions Factor × Weight of Cargo (in tonnes) × Flight Distance (in km) =
// Total Emissions= 500 × (135 / 1000) × 10213
// Total Emissions = 500 × 0.135 × 10213
// Total Emissions = 689.3775 kg CO2

// 500g co2 per tonne per km
// if 500g of co2e = 1t of weight per km
// then, 1km of co2e = 2t of weight per km
// therefore, 1kg of weight per km = 0.5g of co2e

const OutputCalculations = () => {
    const { formData } = useFormDataContext();
    const distanceKM = formData.distanceKM || 0;
    const itemWeight = formData.itemWeight || 0; // in kg
    const costPerBottle = 0.7; // Average cost per bottle in AUD
    const mobilePhoneCO2ePerYear = 0.81002625; // kg CO2e
    const treesPerEmissionTonne = 5; // trees per 1 tonne of CO2e
    const shippingCostPerKg = 32; // Average base rate per kg in AUD
    const emissionFactor = 500; // grams CO2e per tonne of item weight per km traveled

    // Only calculate Calculate total CO2e in kg for the flight based on item weight and distance if BOTH distance and item weight are greater than 0
    const calculateTotalCO2e =
        distanceKM > 0 && itemWeight > 0
            ? (emissionFactor * (itemWeight / 1000) * distanceKM) / 1000
            : 0;

    // Calculate carbon emissions in tonnes for the item
    const carbonEmissionsInTonnes = calculateTotalCO2e / 1000; // convert kg of CO2e to t of CO2e

    // Calculate mobile phones charged based on item's emissions
    const mobilePhonesCharged =
        (carbonEmissionsInTonnes * 1000) / mobilePhoneCO2ePerYear; // Convert tonnes back to kg for calculation

    // Calculate shipping costs based on item weight
    const shippingCosts = itemWeight * shippingCostPerKg;

    // Calculate trees needed to offset emissions for the item
    const treesNeededToOffsetEmissions =
        carbonEmissionsInTonnes * treesPerEmissionTonne; // 5 trees per 1 tonne of CO2e

    // Calculate bottles of water that could be purchased locally with the shipping costs
    const bottlesOfWater = shippingCosts / costPerBottle;

    return {
        shippingCosts,
        calculateTotalCO2e,
        treesNeededToOffsetEmissions,
        mobilePhonesCharged,
        bottlesOfWater,
        distanceKM,
        itemWeight,
    };
};

export default OutputCalculations;
