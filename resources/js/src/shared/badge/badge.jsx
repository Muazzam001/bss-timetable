import React from 'react';
import Image from '../image/image';

const Badge = ({color, text, icon}) => {
  return (
      <span className={`flex items-center justify-center gap-2 rounded-full bg-${color} opacity-30 px-5 py-0.5 h-8`}>
          {icon ? (
                  <Image src={icon} alt="Input field icon" className='h-4 w-4' />
          ) : null}
          <p className={`whitespace-nowrap text-sm font-primary text-${color}`}>{text}</p>
      </span>
  )
}

export default Badge