import { useState } from 'react';
import { DonationItems } from '../../../../data/carbonCalcData/DonationItems';
import { useFormDataContext } from '../../../../utils/carbonCalcUtils/context/FormDataContext';

const ItemSelection = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const { setForm } = useFormDataContext();

    // Updates Data with user selected item
    const handleItemClick = (itemName: string, itemWeight: number) => {
        setForm({ itemName, itemWeight });
        setSelectedItem(itemName);
    };

    return (
        <div className="h-fill mt-24 flex w-full min-w-[300px] flex-col gap-2">
            <h4 className="text-2xl text-black transition-all lg:text-3xl">
                Select <span className=" text-[#F8842C]">item</span>
            </h4>

            <div className="mt-10 grid h-full w-full grid-cols-3 gap-4 lg:grid-cols-4 ">
                {DonationItems.map((donatedItem, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() =>
                            handleItemClick(
                                donatedItem.itemName,
                                donatedItem.itemWeight
                            )
                        }
                        className={`fill group relative flex h-24 w-full select-none place-content-end justify-end rounded-2xl border pb-2 transition-all duration-300 lg:h-64 lg:pb-4  ${
                            selectedItem === donatedItem.itemName
                                ? 'translate-y-0.5 scale-[0.99] bg-[#006994] shadow-inner'
                                : 'scale-[1] bg-gray-100 shadow-md hover:bg-[#006994]'
                        }`}
                    >
                        <img
                            src={donatedItem.image}
                            alt={donatedItem.itemName}
                            className="draggable-none absolute -top-14 right-[50%] z-50 w-14 translate-x-[50%] select-none lg:-top-20 lg:w-32"
                        />
                        <span
                            className={`flex h-full w-full select-none  place-items-end justify-center  text-lg transition-all duration-300  lg:text-3xl ${
                                selectedItem === donatedItem.itemName
                                    ? 'font-black text-white opacity-100 '
                                    : 'font-semibold text-black opacity-70 group-hover:text-white'
                            }`}
                        >
                            {donatedItem.itemName}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ItemSelection;
