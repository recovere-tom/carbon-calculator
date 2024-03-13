import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'leaflet/dist/leaflet.css';

const calculatorRoot = document.getElementById('carbon-calculator-root');

if (calculatorRoot) {
    const root = createRoot(calculatorRoot);
    root.render(<App />);
}
