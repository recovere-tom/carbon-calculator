import { useState } from 'react';
import { useFormDataContext } from '../../../utils/context/FormDataContext';
import { DonationItems } from '../../../data/carbonCalcData/DonationItems';

const ItemSelection = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const { setForm } = useFormDataContext();

    // Updates Data with user selected item
    const handleItemClick = (itemName: string, itemWeight: number) => {
        setForm({ itemName, itemWeight });
        setSelectedItem(itemName);
    };

    return (
        <div className="flex w-full min-w-[300px] flex-col gap-2 lg:gap-6">
            <h4 className="text-2xl text-black lg:text-3xl">
                Select <span className="text-[#F8842C]">item</span>
            </h4>

            <div className="grid w-full grid-cols-3 gap-2 lg:gap-4 lg:grid-cols-4">
                {DonationItems.map((item, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() =>
                            handleItemClick(item.itemName, item.itemWeight)
                        }
                        className={`
                        border-b-none group flex flex-col items-center justify-end rounded-2xl border-transparent
                        p-4 outline-none transition duration-300
                        ${
                            selectedItem === item.itemName
                                ? 'scale-95 bg-gradient-to-b from-[#1F408E] to-[#04143C] shadow-inner'
                                : 'bg-gray-100 shadow hover:bg-[#04143C]'
                        }
                        hover:text-white focus:border-transparent focus:outline-none focus:ring-2
                        focus:ring-[#F8842C] focus:ring-offset-2 active:border-transparent
                    `}
                    >
                        <img
                            src={item.image}
                            alt={item.itemName}
                            className={`mb-2 w-12 lg:w-16 ${selectedItem === item.itemName ? '' : 'grayscale'}`}
                        />
                        <span
                            className={`text-wrap text-xs font-semibold transition duration-300 ${
                                selectedItem === item.itemName
                                    ? 'text-[#F8842C]'
                                    : 'text-black opacity-70 group-hover:text-white'
                            }`}
                        >
                            {item.itemName}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ItemSelection;
