import React, { useState, useEffect } from 'react';
import InputField from '@/src/shared/input/inputField';
import MainLayout from '@/src/shared/mainLayout/mainLayout';
import InputSelect from '@/src/shared/inputSelect/inputSelect';
import Button from '@/src/shared/button/button';
import { assets } from '@/assets';
import ManageLesson from '@/src/shared/manageLesson/manageLesson';
import Calendar from '@/src/components/timetable/calendar';
import SideModal from '@/src/shared/sideModal/sideModal';
import { stopScroll } from '@/src/utils/utils';
import Processing from '@/src/shared/processing/processing';
import MainModal from '@/src/shared/mainModal/mainModal';

const Whole = () => {
    const [calendarDisplay, setCalendarDisplay] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [duplicateName, setDuplicateName] = useState("");
    const [open, setOpen] = useState(false)
    const [year, setYear] = useState("")
    const [lesson, setLesson] = useState("")
    const [option, setOption] = useState("")
    const [type, setType] = useState("")
    // const cluster = ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5", "Cluster 6", "Cluster 7", "Cluster 8", "Cluster 9"]
    const level = ["Early Year - Co-Education", "Early Year - Boys", "Low Primary - Co-Education", "Primary - Co-Education", "Primary - Girls", "Primary - Boys", "IB School - Co-Education", "Secondary School - Co-Education", "Secondary School - Boys", "Secondary School - Girls", "All / Whole"]
    const Menus = [
        { title: "Home", src: assets.home },
        { title: "Subjects", src: assets.subject },
        { title: "Classes", src: assets.classes },
        { title: "Classrooms", src: assets.classroom },
        { title: "Teachers", src: assets.teacher2 },
        { title: "Modules", src: assets.modules },
    ];

    useEffect(() => {
        stopScroll(isModalOpen)
    }, [isModalOpen])


    const duplicateOption = ["Lession Setting and Data", "Lession Setting Only"];
    const duplicateType = ['Default', 'Advance - Tution'];



    return (
        <MainLayout headerItem={Menus}>

            <div className='bg-gray-light-yellowish py-10 min-h-[calc(100vh-175px)]'>

                <div className='container grid grid-flow-col items-center grid-cols-12 gap-3 '>

                    <div className='col-span-5 grid grid-flow-col gap-3'>
                        <div>
                            <InputField
                                placeholder="ROC"
                                className="w-full"
                                disabled
                            />
                        </div>

                        <div>
                            <InputField
                                placeholder="Cluster 5"
                                className="w-full"
                                disabled
                            />
                        </div>

                        <div>
                            <InputField
                                placeholder="TNS Defence, Lahore"
                                className="w-full"
                                disabled
                            />
                        </div>

                    </div>

                    <div className='col-span-6 grid grid-flow-col grid-cols-3 gap-3'>
                        <div className='col-span-2'>
                            <InputSelect
                                width={"100%"}
                                className="min-w-[200px]"
                                options={level}
                                defaultValue="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />

                            {/*<InputSelect*/}
                            {/*    width={"100%"}*/}
                            {/*    className="min-w-[200px]"*/}
                            {/*    options={cluster}*/}
                            {/*    defaultValue="year"*/}
                            {/*    value={teamLevel}*/}
                            {/* onChange={(e) => setTeamLevel(e.target.value)} */}
                            {/*/>*/}
                        </div>

                        <div>
                            <InputField
                                placeholder="Academic Year 2024"
                                className="w-full"
                                disabled
                            />
                        </div>
                    </div>

                    <div className='col-span-1'>
                        <Button
                            rounded={false}
                            type="button"
                            title="Reset & Manage"
                            color={"blue-dark2"}
                            className="text-sm h-13 min-w-[150px] justify-start"
                            onClick={() => setCalendarDisplay(true)}
                        />
                    </div>

                </div>

                <ManageLesson
                    options={level}
                    icon={assets.settings}
                    text={"Manage Lesson Slots"}
                    value={lesson}
                    setState={setLesson}
                    setIsOpen={setIsModalOpen}
                />

                {calendarDisplay ? (
                    <div>
                        <Calendar />
                    </div>
                ) : (
                    <div className='flex justify-center pb-20'>
                        <Processing image={assets.loading} label="Please select timetable above option" btnColor="bg-warning" />
                    </div>
                )}
            </div>

            <MainModal
                open={open}
                setOpen={setOpen}
                image={assets.okbro}
                label="Duplicated timetable successfully has been created “Winter”."
                btnColor="bg-success"
                border
            >
                <Button
                    rounded={true}
                    type="button"
                    title="Ok"
                    color={"blue-dark2"}
                    className="px-18 py-3"
                    onClick={() => setOpen(false)}
                />
            </MainModal>

            <SideModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title="Manage Duplicate Timetable">
                <section className='w-[500px]'>
                    <div className='flex flex-col gap-y-8'>
                        <InputField
                            label="Duplicate Name"
                            placeholder="Type Duplicate Name"
                            className="w-full"
                            value={duplicateName}
                            onChange={(e) => setDuplicateName(e.target.value)}
                        />

                        <InputSelect
                            label="Duplicate Option"
                            width={"100%"}
                            className="min-w-[200px]"
                            options={duplicateOption}
                            defaultValue="year"
                            value={option}
                            onChange={(e) => setOption(e.target.value)}
                            setState={setOption}
                        />

                        <InputSelect
                            label="Duplicate Type"
                            width={"100%"}
                            className="min-w-[200px]"
                            options={duplicateType}
                            defaultValue="year"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />

                    </div>

                    <div className='flex gap-5 justify-end mt-10'>
                        <Button
                            title="Cancel"
                            rounded={true}
                            hover={false}
                            className="!px-8 !bg-gray-medium !text-black !text-sm"
                        />

                        <Button
                            rounded={true}
                            type="button"
                            title="Generate Clone"
                            color={"blue-dark2"}
                            className="px-18 py-3"
                            onClick={() => {
                                setIsModalOpen(false)
                                setOpen(true)
                            }}
                        />
                    </div>
                </section>
            </SideModal>
        </MainLayout>
    )
}

export default Whole
