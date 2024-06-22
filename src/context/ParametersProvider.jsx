import { useState, createContext } from 'react';
const ParametersContext = createContext();

export const ParametersProvider = ({ children }) => {
    const [passwordLength, setPasswordLength] = useState(15);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const initialState = {
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
    };

    return (
        <ParametersContext.Provider
            value={{
                ...initialState,
            }}
        >
            {children}
        </ParametersContext.Provider>
    );
};

export default ParametersContext;
