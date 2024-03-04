export const FedExRequestBody = (
    origin: string,
    destination: string,
    destinationCountryCode: string,
    weight: number,
    accountNumber: number,

    dimensions: { length: number; width: number; height: number }
) => {
    const requestBody = {
        accountNumber: accountNumber.toString(),
        requestedShipment: {
            shipper: {
                address: {
                    city: origin,
                    countryCode: 'AU',
                },
            },
            recipient: {
                address: {
                    city: destination,
                    countryCode: destinationCountryCode,
                },
            },
            shipDateStamp: new Date().toISOString().split('T')[0],
            pickupType: 'DROPOFF_AT_FEDEX_LOCATION',
            serviceType: 'FEDEX_GROUND', // Adjust based on required service
            rateRequestType: ['LIST', 'ACCOUNT'],
            customsClearanceDetail: {
                dutiesPayment: {
                    paymentType: 'SENDER',
                    payor: {
                        responsibleParty: null,
                    },
                },
                commodities: [
                    {
                        description: 'Item Description',
                        quantity: 1,
                        quantityUnits: 'PCS',
                        weight: {
                            units: 'KG',
                            value: 20,
                        },
                        customsValue: {
                            amount: 100,
                            currency: 'USD',
                        },
                    },
                ],
            },
            requestedPackageLineItems: [
                {
                    groupPackageCount: 1,
                    weight: {
                        units: 'KG',
                        value: weight.toString(),
                    },
                    dimensions: {
                        length: dimensions.length.toString(),
                        width: dimensions.width.toString(),
                        height: dimensions.height.toString(),
                        units: 'CM', 
                    },
                },
            ],
        },
    };

    return JSON.stringify(requestBody);
};
