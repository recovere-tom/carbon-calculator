import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'leaflet/dist/leaflet.css';

const heroRoot = document.getElementById('hero-section-root');
const calculatorRoot = document.getElementById('carbon-calculator-root');

if (heroRoot) {
    const root = createRoot(heroRoot);
    root.render(<App component="hero" />);
}

if (calculatorRoot) {
    const root = createRoot(calculatorRoot);
    root.render(<App component="calculator" />);
}
