import React, { useState } from 'react';
import InputField from '@/src/shared/input/inputField';
import MainLayout from '@/src/shared/mainLayout/mainLayout';
import InputSelect from '@/src/shared/inputSelect/inputSelect';
import Button from '@/src/shared/button/button';
import ArrowRight from '@/assets/icons/arrowRight';
import Image from '@/src/shared/image/image';
import { assets } from '@/assets';

const Whole = () => {
    const [teamLevel, setTeamLevel] = useState("")
    const [year, setYear] = useState("")
    const cluster = ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5", "Cluster 6", "Cluster 7", "Cluster 8", "Cluster 9"]
    const Menus = [
        { title: "Home", src: assets.home },
        { title: "Subjects", src: assets.subject },
        { title: "Classes", src: assets.classes },
        { title: "Classrooms", src: assets.classroom },
        { title: "Teachers", src: assets.teacher2 },
        { title: "Modules", src: assets.modules },
    ];

    return (
        <MainLayout headerItem={Menus}>
            <div className='bg-gray-light-yellowish min-h-[calc(100vh-176px)]'>

                <div className='container flex items-center gap-4 pt-5'>
                    <InputField
                        placeholder="ROC"
                        className="h-10 !w-40"
                        disabled
                    />
                    <InputField
                        placeholder="ROC"
                        className="h-10 !w-40"
                        disabled
                    />
                    <InputField
                        placeholder="ROC"
                        className="h-10 !w-40"
                        disabled
                    />
                    <InputField
                        placeholder="ROC"
                        className="h-10 !w-40"
                        disabled
                    />
                    <InputSelect
                        width={"160px"}
                        options={cluster}
                        defaultValue="year"
                        value={teamLevel}
                        setState={setTeamLevel}
                    />
                    <InputSelect
                        width={"160px"}
                        options={cluster}
                        defaultValue="year"
                        value={year}
                        setState={setYear}
                    />
                    <Button
                        rounded={false}
                        type="button"
                        title="Reset & Manage"
                        color={"blue-dark2"}
                        className="font-medium text-sm h-10 mt-1 min-w-[130px] justify-start"
                    />
                </div>
                <div className='container flex justify-end'>
                    <div className='bg-white w-fit flex items-center gap-12 px-5 py-2 border border-gray-medium rounded-[2px] my-5'>
                        <InputSelect
                            width={"160px"}
                            options={cluster}
                            defaultValue="year"
                            value={year}
                            setState={setYear}
                        />
                        <div className='flex items-center gap-2'>
                            <span className='font-primary text-md font-semibold'>Manage Lesson Slots</span>
                            <ArrowRight className="!w-4 !h-4"/>
                            <Image src={assets.settings} alt="Setting Icon" className="w-7 h-7"/>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Whole
