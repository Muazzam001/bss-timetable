
import { useState } from 'react';
import ArrowDown from '@/assets/icons/arrowDown';

const Accordion = ({ items, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const teamData = items?.map((team, index) => {
        return (
            <button key={`${index}`} type="button" className="min-w-[110px] rounded-lg p-3 font-primary text-center text-sm text-navy-dark-blue bg-light-gray hover:bg-light-blue">
                {team}
            </button>
        )
    })

    return (
            <div className='rounded-md border-[1.5px] border-slate-300'>
                <h2>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 "
                        onClick={toggleAccordion}
                    >
                        <span className='font-primary text-sm'>Accordion Title</span>
                        <span
                            className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        >
                            <ArrowDown className="w-5 h-5" />
                        </span>
                    </button>
                </h2>
                <div
                    className={`transition-all duration-300 ${isOpen ? 'hidden' : 'block'} border-t-[1.5px] border-slate-300`}
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