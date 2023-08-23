import { useState } from "react";


const Accordion = ({ items, title }) => {
    const [team, setTeam] = useState("");

    const teamData = items?.map((teamName, index) => {
        return (
            <div key={`${index}`} className='flex items-center justify-center gap-x-5'>
                <input type="radio" name="radio" id={teamName} className='peer hidden' value={teamName} onChange={(e) => setTeam(e.currentTarget.value)} />
                <label htmlFor={teamName} className="checkmark peer-checked:bg-light-blue min-w-[110px] rounded-lg p-3 font-primary text-center text-sm text-navy-dark-blue bg-light-gray cursor-pointer">{teamName}</label>
            </div>
            // <button key={`${index}`} type="button" className="min-w-[110px] rounded-lg p-3 font-primary text-center text-sm text-navy-dark-blue bg-light-gray hover:bg-light-blue">
            //     {team}
            // </button>
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


        // <div className='rounded-md border-[1.5px] border-slate-300'>
        //     <h2>
        //         <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-[1.5px] border-slate-300">
        //             <span className='font-primary text-sm'>{title}</span>
        //            <ArrowDown className=""/>
        //         </button>
        //     </h2>
        //     <div>
        //         <div className="flex flex-wrap gap-2 p-3">
        //             {teamData}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Accordion