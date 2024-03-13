import { useFormDataContext } from './context/FormDataContext';

// Assumptions
//Reference: https://auspost.com.au/content/dam/auspost_corp/media/documents/post-guides/international-post-charges-easy-guide.pdf
// Zone 1 (New Zealand): $18.78 per kg
// Zone 2 (Asia Pacific): $29.40 per kg
// Zone 3 (US & Canada): $32.43 per kg
// Zone 4 (UK & Europe):  $35.63 per kg
// Zone 5 (Rest of the World): $44.88 per kg
// Average shipping cost base rate per kg = 32 AUD

// Reference: https://www.offsetguide.org/understanding-carbon-offsets/air-travel-climate/climate-impacts-from-aviation/co2-emissions/
// Plane fuel consumption: 3.16kg CO2e per kg of fuel
// Fuel Consumption: 3,000 kg of fuel per hour
// 1 tonne of CO2e = 1,000 kg of CO2e
// 1 hour of flying = 3,000 kg of fuel and 9,480 kg of CO2e

//Reference: https://dfreight.org/blog/types-of-all-cargo-aircraft-comprehensive-guide/
// cargo plane can hold 120 tonnes of cargo or 120,000 kg

// Reference for average speed of a plane:
// https://gitnux.org/average-speed-of-a-plane/#:~:text=The%20cruising%20speed%20of%20a,plane%20is%20about%20560%20mph.
// average speed of a plane is about 900 km/h (560 mph)
// therefore 1 hour of flying = 900 km

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
// therefore 1 phone charged per day per year = 0.81002625 kgCO2e

const OutputCalculations = () => {
    const { formData } = useFormDataContext();
    const distanceKM = formData.distanceKM;
    const itemWeight = formData.itemWeight; // in kg
    const fuelConsumptionPerHour = 3000; // kg of fuel
    const speedOfPlane = 900; // Average speed in km/h
    const CO2ePerKgFuel = 3.16; // kg CO2e per kg of fuel
    const cargoCapacity = 120000; // kg
    const mobilePhoneCO2ePerYear = 0.81002625; // kg CO2e
    const treesPerEmissionTonne = 5; // trees per 1 tonne of CO2e
    const shippingCostPerKg = 32; // Average base rate per kg in AUD
    const fuelSurchargeRate = 0.2825; // Fuel surcharge expressed as a decimal (as of Feb 2024)

    // Calculate total CO2e for the flight based on item weight
    const calculateTotalCO2e = (distance: number, weight: number) => {
        const flightDurationHours = distance / speedOfPlane;
        const fuelUsed = fuelConsumptionPerHour * flightDurationHours;
        const CO2eForFlight = fuelUsed * CO2ePerKgFuel;
        const CO2ePerKgCargo = CO2eForFlight / cargoCapacity;
        return CO2ePerKgCargo * weight; // Total CO2e in kg for the item
    };

    // Calculate carbon emissions in tonnes for the item
    const carbonEmissionsInTonnes =
        calculateTotalCO2e(distanceKM, itemWeight) / 1000;

    const carbonEmissionsInKg = Math.floor(
        calculateTotalCO2e(distanceKM, itemWeight)
    );
    // Calculate mobile phones charged based on item's emissions
    const mobilePhonesCharged =
        (carbonEmissionsInTonnes * 1000) / mobilePhoneCO2ePerYear; // Convert tonnes back to kg for calculation

    // Calculate shipping costs based on item weight
    const shippingCosts = () => {
        const baseCost = itemWeight * shippingCostPerKg;
        const fuelCost = baseCost * fuelSurchargeRate;
        return baseCost + fuelCost; // Total shipping cost
    };

    // Calculate trees needed to offset emissions for the item
    const treesNeededToOffsetEmissions =
        carbonEmissionsInTonnes * treesPerEmissionTonne; // 5 trees per 1 tonne of CO2e

    // Calculate bottles of water that could be purchased locally with the shipping costs
    const costPerBottle = 0.7; // Average cost per bottle in AUD
    const bottlesOfWater = shippingCosts() / costPerBottle;

    return {
        shippingCosts,
        carbonEmissionsInKg,
        treesNeededToOffsetEmissions,
        mobilePhonesCharged,
        bottlesOfWater,
        distanceKM,
    };
};
export default OutputCalculations;
