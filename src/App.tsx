import { Form } from './components/Form/Form';
import OutputDashboard from './components/OutputDashboard/OutputDashboard';
import { FormDataProvider } from './utils/context/FormDataContext';

const App = () => {
    return (
        <FormDataProvider>
            <div className="relative flex h-full w-full flex-col justify-center justify-center gap-2 rounded-2xl bg-transparent p-1 align-middle lg:max-w-[1400px] lg:gap-6 ">
                <Form />
                <OutputDashboard />
            </div>
        </FormDataProvider>
    );
};

export default App;
