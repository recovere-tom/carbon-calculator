type SubmitButtonProps = {
    handleCalculateEmissions: () => void;
    loading: boolean;
    outputAnimation: boolean;
};

const SubmitButton = ({
    handleCalculateEmissions,
    loading,
    outputAnimation,
}: SubmitButtonProps) => {
    return (
        <button
            onClick={handleCalculateEmissions} // Use onClick to trigger the function
            className={`border-1 w-full rounded-lg border border-orange-500 bg-white px-6 py-6 font-bold text-orange-500 shadow-sm transition-all duration-300 hover:bg-orange-400 hover:text-white active:translate-y-0.5 active:scale-95 xl:w-fit  xl:px-10 ${outputAnimation ? 'hidden' : 'block'}`}
        >
            {loading ? (
                <div className="flex flex-col items-center justify-center align-middle">
                    <span>Calculating Emissions</span>
                    <span className="loading loading-ring loading-sm"></span>
                </div>
            ) : (
                <span>Calculate Emissions</span>
            )}
        </button>
    );
};

export default SubmitButton;
