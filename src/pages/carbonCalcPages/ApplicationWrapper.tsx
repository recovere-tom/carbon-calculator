import 'leaflet/dist/leaflet.css';
import { Form } from '../../components/carbonCalcComponents/Form/Form';

import { FormDataProvider } from '../../utils/carbonCalcUtils/context/FormDataContext';
import OutputDashboard from './OutputDashboard';

const ApplicationWrapper = () => {
    return (
        <FormDataProvider>
            <div className="relative flex h-full w-full flex-col items-stretch justify-center gap-4 rounded-2xl bg-[#f4f5f9] p-1 ">
                <Form />
                <OutputDashboard />
            </div>
        </FormDataProvider>
    );
};

export default ApplicationWrapper;
