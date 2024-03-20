import 'leaflet/dist/leaflet.css';
import { Form } from '../components/Form/Form';

import { FormDataProvider } from '../utils/context/FormDataContext';
import OutputDashboard from '../components/OutputDashboard/OutputDashboard';

const CarbonCalculatorMainPage = () => {
    return (
        <FormDataProvider>
            <div className="relative flex h-full w-full flex-col justify-center gap-2 rounded-2xl bg-transparent p-1 lg:max-w-[1400px] lg:gap-6 ">
                <Form />
                <OutputDashboard />
            </div>
        </FormDataProvider>
    );
};

export default CarbonCalculatorMainPage;
