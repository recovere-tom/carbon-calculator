type DropdownOptionsProps = {
    label: string;
    options: Array<{ name: string; country?: string }>;
    onChange: (value: string) => void;
    defaultValue: string;
};

const DropdownOptions: React.FC<DropdownOptionsProps> = ({
    label,
    options,
    onChange,
    defaultValue,
}) => {
    return (
        <select
            className="input select select-bordered w-full  bg-gray-200 text-sm text-black"
            onChange={(e) => onChange(e.target.value)}
            defaultValue={defaultValue}
        >
            <option disabled>{defaultValue}</option>
            {options.map((location, index) => (
                <option key={index} value={location.name}>
                    {location.name}
                    {location.country ? `, ${location.country}` : ''}
                </option>
            ))}
        </select>
    );
};

export default DropdownOptions;
