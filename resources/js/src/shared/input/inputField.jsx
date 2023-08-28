import React from 'react';
import Image from '../image/image';

const InputField = ({ icon, type, name, placeholder, className, value, onChange, error, rounded, htmlFor, label }) => {
    return (
        <>
            {label ? (
                <label htmlFor={htmlFor} className="text-sm font-medium leading-6 !text-dark-gray-200 font-primary">
                    {label}
                </label>
            ) : null}
            <div className="relative mt-1">
                {icon ? (
                    <div className="pointer-events-none absolute inset-y-2 rounded-full left-3 h-9 w-9 flex items-center justify-center p-[5px] bg-blue-bg-icon">
                        <Image src={icon} alt="Input field icon" className='h-5 w-5' />
                    </div>
                ) : null}
                <input
                    type={type}
                    name={name}
                    className={`inline-block w-full ${rounded ? "rounded-full" : "rounded-lg"} font-primary placeholder:font-primary border-gray-300 hover:border-sky-blue hover:outline-0 hover:ring-0 focus:outline-0 focus:ring-0 bg-gray-bg-input py-4 ${icon ? "pl-15" : "pl-5"} sm:text-sm ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <p className='ml-5 text-red-500 text-xs'>{error}</p>
            </div>
        </>
    )
}

export default InputField