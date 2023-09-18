import React from 'react';
import {assets} from '@/assets';
import {NavLink} from 'react-router-dom';
import Image from '../image/image';

const Header2 = ({headerItem}) => {

    // const Menus = [
    //     { title: "Home", src: assets.home },
    //     { title: "Subjects", src: assets.subject },
    //     { title: "Classes", src: assets.classes },
    //     { title: "Classrooms", src: assets.classroom },
    //     { title: "Teachers", src: assets.teacher2 },
    //     { title: "Modules", src: assets.modules },
    // ];

    const navigation = headerItem && headerItem?.map((navItem, index) => {
        return (
            <NavLink to="#" key={`${index}`}
                     className="flex flex-col items-center justify-center gap-y-1 hover:bg-blue-light2 w-20 h-20">
                <div className='w-6 h-6 flex justify-center items-center'>
                    <Image src={navItem?.src} alt="" className="" style={{objectFit: "contain", aspectRatio: 2 / 2}}/>
                </div>
                <span className='font-primary text-sm'>{navItem?.title}</span>
            </NavLink>
        )
    })

    return (
        <header className="text-gray-600 body-font bg-white">

            <div className="px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <NavLink className="flex items-center py-2">
                    <Image src={assets.logo} alt="" className="w-16"/>
                </NavLink>
                <nav className="md:ml-auto flex flex-wrap gap-x-10 items-center text-base justify-center">
                    {navigation}
                </nav>
            </div>
        </header>
    )
}

export default Header2
