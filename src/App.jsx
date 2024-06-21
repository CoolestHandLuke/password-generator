import GenerateButton from './components/GenerateButton';
import GeneratedPassword from './components/GeneratedPassword';
import ParameterSelection from './components/ParameterSelection';
import PasswordStrength from './components/PasswordStrength';

function App() {
    return (
        <div className="m-auto px-5content-center md:max-w-xl sm:max-w-lg ">
            {/* title of the App */}
            <h1 className="text-center">Password Generator</h1>

            {/* Generated password */}
            <GeneratedPassword />
            {/* Parameter selection */}
            <ParameterSelection />
            {/* Strength (conditional) */}
            <PasswordStrength />
            {/* Generate Button */}
            <GenerateButton />
        </div>
    );
}

export default App;
