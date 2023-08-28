import { useState } from "react";


const Accordion = ({ items, title, name, onChange }) => {

    const teamData = items?.map((teamName, index) => {
        return (
            <div key={`${index}`} className='flex items-center justify-center gap-x-5'>
                <input type="radio" name={name} id={teamName} className='peer hidden' value={teamName} onChange={(e) => onChange(e.currentTarget)} />
                <label htmlFor={teamName} className="peer-checked:bg-blue-bg-input min-w-[110px] rounded-lg p-3 font-primary text-center text-sm text-navy-dark-blue bg-gray-bg-input cursor-pointer">{teamName}</label>
            </div>
        )
    })

    return (
            <div className='rounded-md border-[1.5px] border-slate-300'>
            <h2 className='font-primary p-3'>
                    {title}
                </h2>
                <div
                    className={`border-t-[1.5px] border-slate-300`}
                >
                    <div className="flex flex-wrap gap-2 p-3">
                        {teamData}
                    </div>
                </div>
            </div>
          
    )
}

export default Accordion