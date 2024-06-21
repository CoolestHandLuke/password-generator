const PasswordStrength = () => {
    return (
        <div className="flex justify-between my-5">
            <div>Strength</div>
            <div className="flex ">
                <div className="mx-1 bg-light-red w-3 h-10 rounded-none"></div>
                <div className="mx-1 bg-red-600 w-3 h-10 rounded-none"></div>
                <div className="mx-1 bg-red-600 w-3 h-10 rounded-none"></div>
                <div className="mx-1 bg-red-600 w-3 h-10 rounded-none"></div>
            </div>
        </div>
    );
};
export default PasswordStrength;
