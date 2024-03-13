import Microwave from '../../assets/carbonCalculatorAssets/MicrowaveImage.svg';
import SmallFridge from '../../assets/carbonCalculatorAssets/SmallFridgeImage.svg';
import BigFridge from '../../assets/carbonCalculatorAssets/BigFridgeImage.svg';
import SchoolBag from '../../assets/carbonCalculatorAssets/SchoolBagImage.svg';
import CarSeat from '../../assets/carbonCalculatorAssets/CarSeatImage.svg';
import Laptop from '../../assets/carbonCalculatorAssets/LaptopImage.svg';
import WashingMachine from '../../assets/carbonCalculatorAssets/WashingMachineImage.svg';
import LinenBedding from '../../assets/carbonCalculatorAssets/LinenBeddingImage.svg';

export const DonationItems = [
    //item weight in KGs

    {
        itemName: 'Big Fridge',
        itemDescription: 'Whitegoods',
        itemWeight: 135,
        image: BigFridge,
    },
    {
        itemName: 'Small Fridge',
        itemDescription: 'Whitegoods',
        itemWeight: 50,
        image: SmallFridge,
    },

    {
        itemName: 'Washing Machine',
        itemDescription: 'Whitegoods',
        itemWeight: 70,
        image: WashingMachine,
    },

    {
        itemName: 'Microwave',
        itemDescription: 'Kitchen Appliances',
        itemWeight: 15,
        image: Microwave,
    },
    {
        itemName: 'Linen Bedding',
        itemDescription: 'Baby and child',
        itemWeight: 2,
        image: LinenBedding,
    },
    {
        itemName: 'School Bag',
        itemDescription: 'School',
        itemWeight: 1.5,
        image: SchoolBag,
    },
    {
        itemName: 'Laptop',
        itemDescription: 'Education',
        itemWeight: 2,
        image: Laptop,
    },

    {
        itemName: 'Car Seat',
        itemDescription: 'Baby and child',
        itemWeight: 8,
        image: CarSeat,
    },
];
