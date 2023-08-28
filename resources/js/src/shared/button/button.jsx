import React from 'react';
import Image from '../image/image';
import "./button.css";

const Button = ({ className, title, type, onClick, color, icon, rounded, hover }) => {
  const primaryBlue = "hover:border-blue-btn-normal bg-blue-btn-normal hover:text-blue-btn-normal hover:bg-transparent"
  const darkBlue = "hover:border-blue-btn-medium bg-blue-btn-medium hover:text-blue-btn-medium hover:bg-transparent"
  const black = "hover:border-black bg-black hover:text-black hover:bg-transparent"

  let buttonColor;
  if (color === "blue-btn-normal") {
    buttonColor = primaryBlue;
  } else if (color === "blue-btn-medium") {
    buttonColor = darkBlue
  } else if (color === "black") {
    buttonColor = black
  }

  return (
    <button
      type={type}
      className={`group flex items-center gap-x-2 font-primary font-bold text-white text-base p-2 border-2 border-transparent ${rounded ? "rounded-full" : "rounded-lg"} shadow-sm ${className} ${hover === false ? null : buttonColor} justify-center`}
      onClick={onClick}
    >
      {icon ? (
        <div className={`group-hover:bg-green-400 w-5 h-5 z-50`}></div>
      ) : null}
      {title}
    </button>
  )
}

export default Button