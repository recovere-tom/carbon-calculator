import { FC } from 'react';
import DistanceImage from '../../assets/carbonCalculatorAssets/DistanceOutputImage.svg';
import EmissionsImage from '../../assets/carbonCalculatorAssets/EmissionsOutputImage.svg';
import CostImage from '../../assets/carbonCalculatorAssets/CostOutputImage.svg';
import BatteryImage from '../../assets/carbonCalculatorAssets/BatteryImage.svg';
import WaterBottleImage from '../../assets/carbonCalculatorAssets/WaterBottleImage.svg';
import TreeImage from '../../assets/carbonCalculatorAssets/TreesImage.svg';
import OutputCalculations from '../../utils/OutputCalculations';

interface DashboardItem {
    image: string;
    tooltip: string;
    calculateValue: () => string | number;
    description: string;
}

interface DashboardItemComponentProps {
    item: DashboardItem;
    rowType: 'top' | 'bottom'; // New prop to indicate the row type
}

const DashboardItemComponent: FC<DashboardItemComponentProps> = ({
    item,
    rowType,
}) => {
    // Conditional classes based on rowType
    const imageClasses =
        rowType === 'top'
            ? 'w-[calc(100%-1rem)] h-[50%] lg:w-[40%] lg:h-[40%]' // 2:1 aspect ratio for top row
            : 'w-[30%] h-[30%] lg:w-[10%] lg:h-[40%]'; // 1:1 aspect ratio for bottom row

    return (
        <div className="relative col-span-1 h-full w-full rounded-xl py-10 text-lg font-semibold shadow-md">
            <div
                className="tooltip tooltip-bottom absolute right-2 top-2"
                data-tip={item.tooltip}
            >
                <span className="badge badge-outline">i</span>
            </div>
            <img
                src={item.image}
                alt=""
                className={`mx-auto mb-2 ${imageClasses}`}
            />
            <div className="flex w-full flex-col justify-center text-center">
                <span className="text-black xl:text-3xl">
                    {item.calculateValue()}
                </span>
                <span className="px-1 text-sm">{item.description}</span>
            </div>
        </div>
    );
};
const OutputDashboard: FC = () => {
    const {
        shippingCosts,
        calculateTotalCO2e,
        treesNeededToOffsetEmissions,
        mobilePhonesCharged,
        bottlesOfWater,
        distanceKM,
    } = OutputCalculations();

    const dashboardItems: DashboardItem[] = [
        {
            image: DistanceImage,
            tooltip:
                "Straight line measured between two location's latitude and longitude",
            calculateValue: () => `${distanceKM.toLocaleString()}km`,
            description: 'distance to travel',
        },
        {
            image: CostImage,
            tooltip: 'Calculation details for the cost...',
            calculateValue: () =>
                distanceKM > 0 ? `$${shippingCosts.toLocaleString()}` : 0,
            description: 'to transport item',
        },
        {
            image: EmissionsImage,
            tooltip: 'Calculation details for carbon emissions...',
            calculateValue: () =>
                `${Math.floor(calculateTotalCO2e).toLocaleString()}kg CO2e`,
            description: 'in carbon emissions',
        },
        {
            image: BatteryImage,
            tooltip: 'Calculation details for smart phones charged...',
            calculateValue: () =>
                Math.floor(mobilePhonesCharged).toLocaleString(),
            description: 'smart phones charged per year',
        },
        {
            image: WaterBottleImage,
            tooltip: 'Calculation details for bottles of water...',
            calculateValue: () =>
                distanceKM > 0
                    ? Math.floor(bottlesOfWater).toLocaleString()
                    : 0,
            description: 'bottles of water purchased locally',
        },
        {
            image: TreeImage,
            tooltip: 'Calculation details for trees needed...',
            calculateValue: () => treesNeededToOffsetEmissions.toFixed(2),
            description: 'trees needed to offset carbon',
        },
    ];

    //Two rows for better height control
    const topRowItems = dashboardItems.slice(0, 3);
    const bottomRowItems = dashboardItems.slice(3);

    return (
        <div className="flex flex-col gap-6">
            <h4 className="text-2xl text-black transition-all lg:mt-4 lg:text-3xl">
                Understanding the <span className="text-[#F8842C]">impact</span>
            </h4>
            <div className="grid grid-cols-3 gap-2 lg:gap-4">
                {topRowItems.map((item, index) => (
                    <DashboardItemComponent
                        key={index}
                        item={item}
                        rowType="top"
                    />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-2 lg:gap-4">
                {bottomRowItems.map((item, index) => (
                    <DashboardItemComponent
                        key={index}
                        item={item}
                        rowType="bottom"
                    />
                ))}
            </div>
        </div>
    );
};

export default OutputDashboard;
