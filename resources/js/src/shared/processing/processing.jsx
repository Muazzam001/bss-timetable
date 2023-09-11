import React from 'react';
import Image from '../image/image';
import { assets } from '@/assets';

const Processing = () => {
  return (
      <div className='flex flex-col items-center w-[600px]'>
          <Image src={assets.loading} alt="processing image" className="w-3/5" />
          <span className='bg-maroon text-white py-3.5 px-5 rounded-xl font-primary font-semibold text-sm w-full text-center'>PLEASE WAIT… SYSTEM PROCESSING YOUR REQUEST</span>
      </div>
  )
}

export default Processing