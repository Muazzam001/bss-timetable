import React from 'react';
import Edit from '@/assets/icons/edit';
import Delete from '@/assets/icons/delete';

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

                <div>
                    <div className='flex gap-x-3'>
                        <span className='border-[1.5px] border-gray-medium rounded-full p-1'><Edit
                            className="!w-8 !h-8"/></span>
                        <span className='border-[1.5px] border-gray-medium rounded-full p-1'><Delete
                            className="!w-8 !h-8"/></span>
                    </div>
                </div>
            </div>

            {/* <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                <p className="whitespace-nowrap text-sm">Paid</p>
            </span> */}
        </article>
    )
}

export default SubjectCard
