import { heroImages } from '../../../assets/heroAnimationAssets/hero-images/images';
import { NewParallax } from '../../../components/heroAnimationComponents/ui/paralax-scroll';
const HeroSplash = () => {
    return (
        <section className="h-[150dvh] w-fit overflow-hidden bg-primary lg:h-[200dvh]">
            <NewParallax products={heroImages} />
        </section>
    );
};

export default HeroSplash;
