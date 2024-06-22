import { FaArrowRight } from 'react-icons/fa';
import ParametersContext from '../context/ParametersProvider';
import { useContext } from 'react';

const GenerateButton = () => {
    const {
        passwordLength,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols,
    } = useContext(ParametersContext);

    const handleClick = (e) => {
        console.log(
            passwordLength,
            includeUppercase,
            includeLowercase,
            includeNumbers,
            includeSymbols
        );
    };

    return (
        <div className="bg-dark-grey w-100 flex justify-center px-8">
            <button
                className="btn min-w-full mb-8 rounded-none border-4 border-neon-green bg-neon-green text-onyx hover:bg-onyx hover:text-neon-green"
                onClick={handleClick}
            >
                <div>GENERATE</div>
                <FaArrowRight />
            </button>
        </div>
    );
};
export default GenerateButton;
