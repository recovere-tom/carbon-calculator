import { useFormDataContext } from '../context/FormDataContext';

const useOutputDashboardCalculations = () => {
    const { formData } = useFormDataContext();

    // Constants for distance
    const distanceKM = formData.distanceKM;

    // Constants for item weight
    const itemWeight = formData.itemWeight;

    // Constants for shipping costs
    const costPerKg = 8; // Average base rate per kg in AUD
    const fuelSurchargeRate = 0.2825; // Fuel surcharge expressed as a decimal (as of Feb 2024)

    // Calculate shipping costs
    const shippingCosts = (): number => {
        const baseCost = formData.itemWeight * costPerKg; // Example base cost
        const fuelCost = baseCost * fuelSurchargeRate; //calculate fuel surcharge
        const costOfTransportation = baseCost + fuelCost; // Total cost
        // Check for zero values and return 0 to avoid unnecessary calculations
        if (itemWeight === 0 || distanceKM === 0) return 0;
        return costOfTransportation; // Return the calculated cost if values are non-zero
    };

    //Calculate carbon emissions
    const emissionsFactorAir = 0.0005; // kg of CO2e  per kg of weight per km of air transport
    const carbonEmissionsCalculation =
        distanceKM * itemWeight * emissionsFactorAir;

    // Calculate trees needed to offset emissions
    const treesNeededToOffsetEmissions = carbonEmissionsCalculation / 60; // 60 kg CO2e per tree planted -- please see https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references#seedlings

    // Calculate how many mobile phones could be charged with the emissions
    const emissionsPerChargeKg = ((0.021683 * 1540.1) / 1000) * (1 / 2.2046); // CO2 emissions per charge in kg
    const mobilePhonesCharged =
        carbonEmissionsCalculation / emissionsPerChargeKg; // CO2 emissions per charge in kg

    //Calculate bottles of water that could be purchased locally with the shipping costs
    const costPerBottle = 0.7; // Average cost per bottle in AUD
    const bottlesOfWater = shippingCosts() / costPerBottle;

    return {
        shippingCosts,
        carbonEmissionsCalculation,
        treesNeededToOffsetEmissions,
        mobilePhonesCharged,
        bottlesOfWater,
        distanceKM,
    };
};
export default useOutputDashboardCalculations;
