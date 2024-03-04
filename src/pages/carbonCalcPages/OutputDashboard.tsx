import DistanceImage from '../../assets/carbonCalculatorAssets/DistanceOutputImage.png';
import EmissionsImage from '../../assets/carbonCalculatorAssets/EmissionsOutputImage.png';
import CostImage from '../../assets/carbonCalculatorAssets/CostOutputImage.png';
import BatteryImage from '../../assets/carbonCalculatorAssets/BatteryImage.png';
import WaterBottleImage from '../../assets/carbonCalculatorAssets/WaterBottleImage.png';
import TreeImage from '../../assets/carbonCalculatorAssets/TreesImage.png';
import useOutputDashboardCalculations from '../../utils/carbonCalcUtils/calculations/useOutputDashboardCalculations';

const OutputDashboard = () => {
    const {
        shippingCosts,
        carbonEmissionsCalculation,
        treesNeededToOffsetEmissions,
        mobilePhonesCharged,
        bottlesOfWater,
        distanceKM,
    } = useOutputDashboardCalculations();

    return (
        <div>
            <h4 className="text-2xl text-black transition-all lg:text-3xl">
                Understanding the{' '}
                <span className=" text-[#F8842C]">impact</span>
            </h4>{' '}
            <div className="grid h-full w-full grid-cols-3 content-center gap-2 lg:gap-4 ">
                <div className="border-1 relative col-span-1 h-fit w-full rounded-xl py-4 text-lg font-semibold shadow-md lg:h-full">
                    <div
                        className="tooltip tooltip-bottom absolute right-2 top-2 flex w-full justify-end"
                        data-tip="Straight line measured between two location's latitude and longitude"
                    >
                        <span className="badge badge-outline">i</span>
                    </div>
                    <img src={DistanceImage} alt="" className="mb-2" />
                    <div className="flex w-full flex-col justify-center text-center">
                        <span className="text-black xl:text-3xl">
                            {distanceKM.toLocaleString()}km{' '}
                        </span>
                        <span className="px-1 text-sm">distance to travel</span>
                    </div>
                </div>
                <div className="border-1 relative col-span-1 h-fit  w-full rounded-xl py-4 text-lg font-semibold shadow-md lg:h-full">
                    <div
                        className="tooltip tooltip-bottom absolute right-2 top-2 flex w-full justify-end"
                        data-tip="Calculation: BaseCost + FuelCost. | BaseCost = CostPerKg * ItemWeight. | FuelCost = FuelSurchage * ItemWeight. | CostPerKg = Average cost of AUD$8 per kg. | FuelSurcharge = 28.25% of BaseCost. FuelSurcharge rate as of Feb 2024."
                    >
                        <span className="badge badge-outline">i</span>
                    </div>
                    <img src={CostImage} alt="" className="mb-2" />
                    <div className="flex w-full flex-col justify-center text-center">
                        <div
                            className="tooltip tooltip-bottom absolute right-2 top-2 flex w-full justify-end"
                            data-tip="Calculation: BaseCost + FuelCost. | BaseCost = CostPerKg * ItemWeight. | FuelCost = FuelSurchage * ItemWeight. | CostPerKg = Average cost of AUD$8 per kg. | FuelSurcharge = 28.25% of BaseCost. FuelSurcharge rate as of Feb 2024."
                        >
                            <span className="badge badge-outline">i</span>
                        </div>
                        <span className="text-black xl:text-3xl">
                            ${shippingCosts().toLocaleString()}{' '}
                        </span>
                        <span className="px-1 text-sm">
                            to transport item
                            <br />
                        </span>
                    </div>
                </div>
                <div className="border-1 relative col-span-1 h-fit w-full rounded-xl py-4 text-lg font-semibold shadow-md lg:h-full">
                    <div
                        className="tooltip tooltip-bottom absolute right-2 top-2 flex w-full justify-end"
                        data-tip="Calculation: CarbonEmissions = Distance * Weight * EmissionsFactor | EmissionsFactor = 0.0005 kg of CO2e per kg of weight per km of air transport."
                    >
                        <span className="badge badge-outline">i</span>
                    </div>
                    <img src={EmissionsImage} alt="" className="mb-2" />
                    <div className="flex w-full flex-col justify-center text-center">
                        <span className="text-black xl:text-3xl">
                            {Math.floor(
                                carbonEmissionsCalculation
                            ).toLocaleString()}
                            t CO2e
                        </span>
                        <span className="px-1 text-sm">
                            in carbon emissions
                            <br />
                        </span>
                    </div>
                </div>
                <div className="border-1 relative col-span-1 h-fit w-full rounded-xl py-4 text-lg font-semibold shadow-md lg:h-full">
                    <div
                        className="tooltip tooltip-bottom absolute right-2 top-2 flex w-full justify-end"
                        data-tip="Calculation: SmartPhoneCharges = CarbonEmissions / EmissionsPerChargeKg | EmissionsPerChargePerKg = ((0.021683 * 1540.1) / 1000) * (1 / 2.2046)"
                    >
                        <span className="badge badge-outline">i</span>
                    </div>
                    <img
                        src={BatteryImage}
                        alt=""
                        className="mx-auto mb-2 h-20"
                    />
                    <div className="flex w-full flex-col justify-center text-center lg:px-2">
                        <span className="text-black xl:text-3xl">
                            {Math.floor(mobilePhonesCharged).toLocaleString()}
                        </span>
                        <span className="px-1 text-sm">
                            smart phones charged per year
                            <br />
                        </span>
                    </div>
                </div>
                <div className="border-1 relative col-span-1 h-fit w-full rounded-xl py-4 text-lg font-semibold shadow-md lg:h-full">
                    <div
                        className="tooltip tooltip-bottom absolute right-2 top-2 flex w-full justify-end"
                        data-tip="Calculation: BottlesOfWater = ShippingCosts / CostPerBottle | CostPerBottle = Average cost per bottle internationally = AUD$0.70. 
                    "
                    >
                        <span className="badge badge-outline">i</span>
                    </div>
                    <img
                        src={WaterBottleImage}
                        alt=""
                        className="mx-auto mb-2 h-20"
                    />
                    <div className="flex w-full flex-col justify-center text-center lg:px-2">
                        <span className="text-black xl:text-3xl">
                            {Math.floor(bottlesOfWater).toLocaleString()}
                        </span>
                        <span className="px-1 text-sm">
                            bottles of water purchased locally
                            <br />
                        </span>
                    </div>
                </div>
                <div className="border-1 relative col-span-1 h-fit w-full rounded-xl py-4 text-lg font-semibold shadow-md lg:h-full">
                    <div
                        className="tooltip tooltip-bottom absolute right-2 top-2 flex w-full justify-end"
                        data-tip="Calculation: TreesNeeded = CarbonEmissions / CO2PerTreePlanted | CO2PerTreePlanted = 60 kg CO2e per tree planted. 
                    
                    "
                    >
                        <span className="badge badge-outline">i</span>
                    </div>
                    <img src={TreeImage} alt="" className="mx-auto mb-2 h-20" />
                    <div className="flex w-full flex-col justify-center px-2 text-center">
                        <span className="text-black xl:text-3xl">
                            {treesNeededToOffsetEmissions.toFixed(2)}
                        </span>
                        <span className="px-1 text-sm">
                            trees needed to offset carbon
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutputDashboard;
