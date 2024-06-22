const PasswordStrength = () => {
    return (
        <div className="bg-dark-grey p-8 w-100">
            <div className="bg-onyx flex justify-between p-4">
                <div className="font-JetBrains text-2xl flex flex-col justify-center">
                    Strength
                </div>
                <div className="flex ">
                    <div className="mx-1 bg-light-red w-3 h-10 rounded-none"></div>
                    <div className="mx-1 bg-red-600 w-3 h-10 rounded-none"></div>
                    <div className="mx-1 bg-red-600 w-3 h-10 rounded-none"></div>
                    <div className="mx-1 bg-red-600 w-3 h-10 rounded-none"></div>
                </div>
            </div>
        </div>
    );
};
export default PasswordStrength;
