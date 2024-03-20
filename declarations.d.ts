declare module 'animated-number-react' {
    import { ComponentType } from 'react';

    interface AnimatedNumberProps {
        value: number;
        duration?: number;
        formatValue?: (value: number) => string | number;
        delay?: number;
        frameStyle?: (percentage: number) => object;
        stepPrecision?: number;
    }

    const AnimatedNumber: ComponentType<AnimatedNumberProps>;
    export default AnimatedNumber;
}
