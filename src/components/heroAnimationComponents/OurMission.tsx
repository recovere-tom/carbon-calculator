import RecovereVideo from '../../assets/heroAnimationAssets/RecovereHeroVideoAudio.mp4';

export const OurMission = () => {
    return (
        <section className="relative z-30 grid h-full w-full grid-cols-3 items-center gap-4 object-center px-32 align-middle font-poppins">
            <div className="flex w-full flex-col gap-8 text-white">
                <h2 className="relative text-2xl font-[600] md:text-7xl">
                    Discover our <span className="text-secondary">Mission</span>
                </h2>
                <p className=" text-sm text-white lg:text-base">
                    Recovere's mission is to......, our approach to disaster
                    recovery, and the real change we bring to vulnerable
                    communities around the globe.
                </p>
                <a
                    href="https://recoveredev.wpenginepowered.com/?page_id=19"
                    className="relative w-fit rounded-xl border-2 border-white px-8 py-5 mt-2 text-center text-lg font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#04143C] active:scale-[0.99] lg:text-xl"
                >
                    More about our mission
                </a>
            </div>
            <div className="z-30 col-span-2">
                <video
                    src={RecovereVideo}
                    loop
                    muted
                    controls
                    autoPlay
                    playsInline
                    className="mx-auto w-[70%] rounded-2xl shadow-md transition-all duration-300 ease-in-out"
                />
            </div>
        </section>
    );
};
