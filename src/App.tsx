import { ReactNode } from 'react';
import CarbonCalculatorIndex from './components/carbonCalculatorIndex';
import HeroAnimationIndex from './components/heroAnimationIndex';

const App = ({ component }: { component: ReactNode }) => {
    switch (component) {
        case 'hero':
            return <HeroAnimationIndex />;
        case 'calculator':
            return <CarbonCalculatorIndex />;
        default:
            return <div>Component not found</div>;
    }
};

export default App;
