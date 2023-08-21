import React from 'react'

const Button = ({className, title, type, onClick}) => {
  return (
      <button
          type={type}
        //   className={`flex justify-center rounded-full border-2 border-${color} bg-${color} hover:bg-transparent p-4 text-lg font-bold text-white hover:text-${color} shadow-sm focus:outline-none ${className}`}
          className={`hover:bg-transparent font-bold text-white p-4 border-2 border-transparent rounded-full shadow-sm ${className}`}
          onClick={onClick}
      >
          {title}
      </button>
  )
}

export default Button