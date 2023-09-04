import React, { useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './calendar.scss';

const Calendar = () => {
    const calendarRef = useRef(null);

    useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.getApi().addEventSource([
            ]);
        }
    }, []);

    const eventRender = (info) => {
        console.log(info)
    };

    return (
        <div className="container calendar-container">
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridDay"
                eventRender={eventRender}
                dayHeaderContent={(info) => {
                    return (
                        <table className="table-auto w-full h-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"></th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">1</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">2</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">3</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">4</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">5</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">6</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">7</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">8</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">9</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">10</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">11</th>
                                    <th className="px-6 !py-8 title-font font-medium text-gray-900 text-sm bg-gray-100">12</th>
                                </tr>
                            </thead>
                        </table>
                    )
                }}
                headerToolbar={{
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridDay',
                }}
                title="Shahid"
            />
        </div>
    );
}

export default Calendar;
