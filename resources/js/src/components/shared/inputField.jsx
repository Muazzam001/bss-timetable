import React from 'react';
import Image from './image';

const InputField = ({ icon, type, name, placeholder, className, value, onChange, error }) => {
  return (
      <div className="relative mt-1">
          <div className="pointer-events-none absolute inset-y-2 rounded-full left-3 h-9 w-9 flex items-center justify-center p-[5px] bg-icon-bg">
              <Image src={icon} alt="input field icon" className='h-5 w-5' />
          </div>
          <input
              type={type}
              name={name}
              className={`inline-block w-full rounded-full border-gray-300 hover:border-btn-sky-blue hover:outline-0 hover:ring-0 focus:outline-0 focus:ring-0 bg-input-bg py-4 pl-15 sm:text-sm ${className}`}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
          />
          <p className='ml-5 text-red-500 text-xs'>{error}</p>
      </div>
  )
}

export default InputField