import { FaRegCopy } from 'react-icons/fa';

const GeneratedPassword = () => {
    return (
        <div className="flex justify-between my-8 px-8 bg-dark-grey h-16">
            <div className="flex flex-col justify-center">
                {' '}
                GeneratedPassword
            </div>
            <div className="flex flex-col justify-center">
                <FaRegCopy className=" text-neon-green size-6" />
            </div>
        </div>
    );
};
export default GeneratedPassword;
