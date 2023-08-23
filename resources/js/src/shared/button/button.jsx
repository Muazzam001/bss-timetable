import React from 'react'
import Image from '../image/image'

const Button = ({ className, title, type, onClick, color, icon, rounded, hover }) => {
  const primaryBlue = "hover:border-sky-blue bg-sky-blue hover:text-sky-blue"
  const darkBlue = "hover:border-dark-blue bg-dark-blue hover:text-dark-blue"
  const black = "hover:border-black bg-black hover:text-black"

  let buttonColor;
  if(color === "sky-blue"){
    buttonColor = primaryBlue;
  }else if(color === "dark-blue"){
    buttonColor = darkBlue
  }else if(color === "black"){
    buttonColor = black
  }

  return (
    <button
      type={type}
      className={`flex items-center gap-x-2 font-primary hover:bg-transparent font-bold text-white text-base p-2 border-2 border-transparent ${rounded ? "rounded-full" : "rounded-lg"} shadow-sm ${className} ${hover === false ? null : buttonColor} justify-center `}
      onClick={onClick}
    >
      {icon ? ( 
        <Image src={icon} alt="button icon" className="w-5 h-5"/>
        ) : null}
      {title}
    </button>
  )
}

export default Button