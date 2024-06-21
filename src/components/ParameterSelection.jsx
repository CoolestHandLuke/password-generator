import { useState } from 'react';

const ParameterSelection = () => {
    const [passwordLength, setPasswordLength] = useState(10);

    const handleSliderChange = (e) => {
        e.preventDefault();
        setPasswordLength(e.target.value);
    };
    return (
        <div>
            <div className="flex justify-between my-4">
                <div>Character Length</div>
                <div>{passwordLength}</div>
            </div>
            <input
                type="range"
                min={0}
                max="15"
                className="range range-sm range-primary"
                onChange={(e) => handleSliderChange(e)}
            />
            <div className="form-control">
                <label className="label cursor-pointer justify-start">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                    />
                    <span className="label-text ml-8">
                        Include Uppercase Letters
                    </span>
                </label>
                <label className="label cursor-pointer justify-start">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                    />
                    <span className="label-text ml-8">
                        Include Lowercase Letters
                    </span>
                </label>
                <label className="label cursor-pointer justify-start">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                    />
                    <span className="label-text ml-8">Include Numbers</span>
                </label>
                <label className="label cursor-pointer justify-start">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                    />
                    <span className="label-text ml-8">Include Symbols</span>
                </label>
            </div>
        </div>
    );
};
export default ParameterSelection;
