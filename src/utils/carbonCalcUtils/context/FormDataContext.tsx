import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormData, INITIAL_DATA } from '../../../data/carbonCalcData/FormData'; // Adjust the import path as necessary

interface FormDataContextType {
    formData: FormData;
    setForm: (newData: Partial<FormData>) => void;
}
// This is the context that will be used to pass the form state to the components
const FormDataContext = createContext<FormDataContextType | undefined>(
    undefined
);

// This is the provider that will wrap the entire application
export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

    const setForm = (newData: Partial<FormData>) => {
        setFormData((prev) => ({ ...prev, ...newData }));
    };

    return (
        <FormDataContext.Provider value={{ formData, setForm }}>
            {children}
        </FormDataContext.Provider>
    );
};

// This is a custom hook that will be used to access the form state
export const useFormDataContext = () => {
    const context = useContext(FormDataContext);
    if (context === undefined) {
        throw new Error(
            'useFormDataContext must be used within a FormDataProvider'
        );
    }
    return context;
};
