import { FC } from 'react';

interface DashboardItem {
    image: string;

    calculateValue: () => string | number;
    description: string;
}

interface DashboardItemComponentProps {
    distanceKM: number;
    itemWeight: number;
    item: DashboardItem;
    rowType: 'top' | 'bottom';
}

export const DashboardItemComponent: FC<DashboardItemComponentProps> = ({
    item,
    rowType,
    distanceKM,
    itemWeight,
}) => {
    const calculatedValue = item.calculateValue(); // Directly store the calculated value

    // Convert the calculated value to a number for comparison, handling units like 'km' and 'kg CO2e'
    const numericValue = parseFloat(
        calculatedValue.toString().replace(/[^0-9.]/g, '')
    );

    // Conditional classes based on rowType
    const imageClasses =
        rowType === 'top'
            ? 'w-24 max-w-28 lg:w-32 lg:max-w-36 h-fit ' // icon sizes top row
            : 'w-12 max-w-14 lg:w-16 lg:max-w-18 h-fit '; // icon sizes bottom row

    return (
        <div className="relative col-span-1 h-full w-full rounded-xl py-2 text-lg font-semibold shadow-md">
            <img
                src={item.image}
                alt={item.description}
                className={`mx-auto mb-2 flex flex-1 ${imageClasses}`}
            />
            <div className="flex w-full flex-col justify-center text-center">
                <span
                    className={`transition-all duration-500 xl:text-3xl ${
                        distanceKM > 0 && itemWeight > 0 && numericValue != 0
                            ? 'text-[#F8842C]'
                            : ''
                    }`}
                >
                    {calculatedValue}
                </span>
                <span className="px-1 text-xs">{item.description}</span>
            </div>
        </div>
    );
};
