import { useContext } from 'react';
import ParametersContext from '../context/ParametersProvider';

const ParameterSelection = () => {
    const {
        passwordLength,
        setPasswordLength,
        includeUppercase,
        setIncludeUppercase,
        includeLowercase,
        setIncludeLowercase,
        includeNumbers,
        setIncludeNumbers,
        includeSymbols,
        setIncludeSymbols,
    } = useContext(ParametersContext);

    const handleSliderChange = (e) => {
        e.preventDefault();
        setPasswordLength(e.target.value);
    };

    const handleSelection = (e) => {
        switch (e.target.name) {
            case 'uppercase':
                setIncludeUppercase(!includeUppercase);
                break;
            case 'lowercase':
                setIncludeLowercase(!includeLowercase);
                break;
            case 'numbers':
                setIncludeNumbers(!includeNumbers);
                break;
            case 'symbols':
                setIncludeSymbols(!includeSymbols);
                break;
        }
    };
    return (
        <div className="bg-dark-grey p-8">
            <div className="flex justify-between  my-4">
                <div className="font-JetBrains text-2xl leading-8">
                    Character Length
                </div>
                <div className="font-JetBrains text-2xl leading-8">
                    {passwordLength}
                </div>
            </div>
            <input
                type="range"
                min={0}
                max="15"
                className="w-full cursor-pointer accent-neon-green "
                onChange={(e) => handleSliderChange(e)}
            />
            <div className="form-control">
                <label className="label cursor-pointer justify-start">
                    <input
                        type="checkbox"
                        defaultChecked
                        name="uppercase"
                        onChange={handleSelection}
                        className="checkbox checked:border-neon-green [--chkbg:theme(colors.neon-green)] [--chkfg:theme(colors.onyx)]"
                    />
                    <span className="label-text font-JetBrains text-lg leading-6 ml-8">
                        Include Uppercase Letters
                    </span>
                </label>
                <label className="label cursor-pointer justify-start">
                    <input
                        type="checkbox"
                        defaultChecked
                        name="lowercase"
                        onChange={handleSelection}
                        className="checkbox checked:border-neon-green [--chkbg:theme(colors.neon-green)] [--chkfg:theme(colors.onyx)]"
                    />
                    <span className="label-text font-JetBrains text-lg leading-6 ml-8">
                        Include Lowercase Letters
                    </span>
                </label>
                <label className="label cursor-pointer justify-start">
                    <input
                        type="checkbox"
                        defaultChecked
                        name="numbers"
                        onChange={handleSelection}
                        className="checkbox checked:border-neon-green [--chkbg:theme(colors.neon-green)] [--chkfg:theme(colors.onyx)]"
                    />
                    <span className="label-text font-JetBrains text-lg leading-6 ml-8">
                        Include Numbers
                    </span>
                </label>
                <label className="label cursor-pointer justify-start">
                    <input
                        type="checkbox"
                        defaultChecked
                        name="symbols"
                        onChange={handleSelection}
                        className="checkbox checked:border-neon-green [--chkbg:theme(colors.neon-green)] [--chkfg:theme(colors.onyx)]"
                    />
                    <span className="label-text font-JetBrains text-lg leading-6 ml-8">
                        Include Symbols
                    </span>
                </label>
            </div>
        </div>
    );
};
export default ParameterSelection;
