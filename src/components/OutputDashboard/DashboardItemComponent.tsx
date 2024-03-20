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
            ? 'w-fit max-w-[50%] max-h-[50%] h-fit lg:w-[50%] lg:max-w-[60%] lg:h-[50%] lg:max-h-[50%] ' // icon sizes top row
            : 'w-fit max-w-[40%] max-h-[40%] h-fit lg:w-[20%] lg:max-w-[20%] lg:h-[50%] lg:max-h-[60%]'; // icon sizes bottom row

    return (
        <div className="relative col-span-1 h-full w-full rounded-xl py-10 text-lg font-semibold shadow-md">
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
                <span className="px-1 text-sm">{item.description}</span>
            </div>
        </div>
    );
};
