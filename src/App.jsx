import GenerateButton from './components/GenerateButton';
import GeneratedPassword from './components/GeneratedPassword';
import ParameterSelection from './components/ParameterSelection';
import PasswordStrength from './components/PasswordStrength';

function App() {
    return (
        <div className="bg-onyx min-h-screen min-w-screen">
            <div className="m-auto px-5content-center md:max-w-xl sm:max-w-lg ">
                <h1 className="text-center font-JetBrains font-bold text-2xl leading-8">
                    Password Generator
                </h1>

                <GeneratedPassword />
                <ParameterSelection />
                <PasswordStrength />
                <GenerateButton />
            </div>
        </div>
    );
}

export default App;
