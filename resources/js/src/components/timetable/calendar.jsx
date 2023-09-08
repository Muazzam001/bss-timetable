
import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './calendar.scss';
import { assets } from '@/assets';
import Image from '@/src/shared/image/image';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import "./calender.css"

const Calendar = () => {
    const calendarRef = useRef(null);
    const [dayName, setDayName] = useState("")
    const [year, setYear] = useState("")

    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            const title = calendarApi.view.title;
            const newDate = new Date(title)
            const dayName = new Date(title).toLocaleString('en-us', { weekday: 'long' })
            setDayName(dayName)
            const year = newDate.getFullYear();
            setYear(year)
        }
    }, []);

    const data = [
        ['Header 1', 'Header 2', 'Header 3'],
        ['9M Blue', 'CHE', 'UDR', 'MTH', 'PHY', 'ENG', 'ISL', 'PST', 'BIO', 'CS', 'ECO', 'UDR', 'ISL'],
        ['10M Blue', 'CHE', 'UDR', 'MTH', 'PHY', 'ENG', 'ISL', 'PST', 'BIO', 'CS', 'ECO', 'UDR', 'ISL'],
        ['9C Yellow', 'PST', 'BIO', 'CS', 'ECO', 'UDR', 'CHE', 'UDR', 'MTH', 'PHY', 'ENG', 'ISL', 'ISL'],
        ['9C White', 'PHY', 'PST', 'BIO', 'CS', 'CHE', 'ENG', 'ISL', 'UDR', 'MTH', 'ECO', 'UDR', 'ISL'],
        ['9C Orange', 'CHE', 'UDR', 'MTH', 'BIO', 'CS', 'ECO', 'UDR', 'ISL', 'PHY', 'ENG', 'ISL', 'PST'],
        ['9C Green', 'CHE', 'UDR', 'MTH', 'PHY', 'ENG', 'ISL', 'PST', 'BIO', 'CS', 'ECO', 'UDR', 'ISL'],
        ['9C Red', 'CHE', 'ENG', 'ISL', 'PST', 'BIO', 'CS', 'UDR', 'MTH', 'PHY', 'UDR', 'ISL', 'MTH'],
        ['10C Yellow', 'ENG', 'ISL', 'PST', 'BIO', 'CS', 'ECO', 'CHE', 'UDR', 'MTH', 'PHY', 'ECO', 'UDR'],
    ];

    return (
        <div className="calendar-container px-10">
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridDay"
                dayCellClassNames="!bg-white !min-h-fit !max-h-fit"
                dayCellContent={() => {
                    return (
                        <table className="table-inner table-auto w-full !min-h-fit text-left whitespace-no-wrap !border !border-gray-medium">
                            <thead>
                                <tr>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-semibold text-gray-900 text-sm font-primary bg-gray-100 rounded-tl rounded-bl">Whole</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100 rounded-tl rounded-bl">1</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">2</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">3</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">4</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">5</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">6</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">7</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">8</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">9</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">10</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">11</th>
                                    <th className="!text-center !align-middle w-18 h-20 title-font font-medium text-gray-900 text-sm font-primary bg-gray-100">12</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.slice(1).map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <th className='font-primary text-xs text-gray-dark1 !w-14 h-20 !p-2 !text-left'>{row[0]}</th>
                                        {row.slice(1).map((cell, cellIndex) => {
                                            const colors = {
                                                CHE: "bg-[#997D6C]",
                                                BIO: "bg-[#898989]",
                                                ECO: "bg-[#9E69F4]",
                                                ISL: "bg-[#88DEDE]",
                                                ENG: "bg-[#A962A5]",
                                                PHY: "bg-[#DA86BB]",
                                                URD: "bg-[#E6886C]",
                                                MTH: "bg-[#BEAD2E]",
                                                PST: "bg-[#5BCB5A]",
                                                CS: "bg-[#E8C46A]",
                                                HQT: "bg-[#1FA9EF]",
                                                ACC: "bg-[#BFE324]",
                                                BS: "bg-[#F4F469]",
                                            }
                                            const cellColor = colors[cell] || 'bg-blue-dark2';
                                            console.log(cellColor)
                                            return (
                                                <td key={cellIndex} className='font-primary text-xs uppercase w-20 h-20 !p-1'>
                                                    <div className={`flex flex-col ${cellColor} rounded-sm p-1 text-white border border-blue-dark2`}>
                                                        <span className='flex justify-end gap-1'>
                                                            <LockIcon className='!w-2.5 !h-2.5' />
                                                            <CloseIcon className='!w-2.5 !h-2.5 border rounded-[2px]' />
                                                            <MoreVertIcon className='!w-2.5 !h-2.5 border rounded-[2px]' />
                                                        </span>
                                                        <span>
                                                            {cell}
                                                        </span>
                                                    </div>
                                                </td>
                                            )
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }}
                headerToolbar={{
                    left: 'customDay prev,next customYear dayGridDay',
                    center: "",
                    right: "customCalenderButton"
                }}
                customButtons={{
                    customDay: {
                        text: `${dayName}`,
                    },
                    customYear: {
                        text: `${year}`,
                    },
                    customCalenderButton: {
                        text: 'Duplicate Timetable',
                        // icon: 
                    }
                }}
                dayHeaderContent={(info) => {
                    return (
                        <div className='flex justify-between items-center w-full !m-0'>
                            <div className='flex items-center gap-5'>
                                <div className='!bg-blue-dark2'>
                                    <Image src={assets.recent} alt="recent icon" className="w-14 p-2" />
                                </div>
                                <div>
                                    <span className='font-primary flex items-center'>
                                        <LockIcon className='!w-4' />
                                        {info.text}
                                    </span>
                                </div>
                            </div>
                            <div className='flex bg-blue-dark2 p-2 mr-2'>
                                <p className='border-r border-white text-sm font-primary font-normal text-white px-5'>New Lesson</p>
                                <p className='text-sm font-primary font-normal text-white px-5'>Manage Lessons</p>
                            </div>
                        </div>
                    )
                }}
            />
        </div>
    );
}
export default Calendar;

