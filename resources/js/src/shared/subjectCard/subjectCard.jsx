import React from 'react';
import Edit from '@/assets/icons/edit';
import Delete from '@/assets/icons/delete';
import Badge from '../badge/badge';
import { assets } from '@/assets';

const SubjectCard = () => {

    return (
        <article className="flex gap-4 rounded-lg border border-gray-100 bg-white p-6">
            <div className='flex justify-between w-full'>
                <div className='flex gap-x-10'>
                    <span className="rounded-full bg-blue-500 text-blue-600 w-18 h-18 p-6">
                    </span>
                    <div className="flex flex-col">
                        <p className="text-2xl font-medium font-primary text-gray-900">
                            Mathimatics
                        </p>
                        <p className="text-md text-gray-500 font-primary">MATHS</p>
                    </div>
                </div>

            <div className='flex justify-between h-10 w-2/5'>
                    <Badge text={"Published"} color={"blue-medium1"} icon={assets.check}/>
                    <div className='flex gap-x-3 h-10'>
                        <span className='border-[1.5px] border-gray-medium rounded-full p-1 h-8 w-8 flex justify-center items-center'><Edit className="!w-6 !h-6" /></span>
                        <span className='border-[1.5px] border-gray-medium rounded-full p-1 h-8 w-8 flex justify-center items-center'><Delete className="" /></span>
                    </div>
                </div>
            </div>
            <div>
                
            </div>

        </article>
    )
}

export default SubjectCard

