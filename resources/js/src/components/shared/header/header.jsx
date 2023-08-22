import React from 'react';
import { assets } from '@/assets';
import "./header.scss"
import Image from '../image';

const Header = () => {
    const headerIcons = (title, icon) => {
        return (
            <>
                <div
                    className='header-icon'>
                    <div className='max-xl:w-5 max-xl:h-5 xl:w-7 xl:h-7'>
                        <Image src={icon} alt="faqs icon" />
                    </div>

                    <p className='text-white text-sm font-secondary font-semibold'>{title}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='bg-sky-blue w-full'>
                <div className='header-wrapper'>
                    <div className='header-logo'>
                        <Image src={assets.logo} alt={'logo'} />
                    </div>

                    <div className='flex items-center'>
                        {headerIcons("Contact US", assets.contact)}
                        {headerIcons("FAQ's", assets.FAQs)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
