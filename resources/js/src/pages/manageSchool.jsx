import React, { useState } from 'react';
import Button from '../shared/button/button';
import { assets } from '@/assets';
import Accordion from '../shared/accordion/accordion';
import Modal from '../shared/modal/modal';
import Sidebar from '../shared/sidebar/sidebar';

const ManageSchool = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const cluster = ["Gulber Lahore", "Shadman", "Johar Town", "Zaman Park", "Azadi Chowk", "Badshahi Masjid Lahore"]
    return (
        <>
            <div className='my-10'>
                <h2 className='text-[2.125rem] font-primary text-center'>Welcome to Beachonhouse</h2>
                <p className='text-center font-primary text-sm text-dark-gray'>Please provide content from beacon house team</p>
            </div>

            <div className="xl:px-30 lg:px-10 px-5">
                <div className='md:flex md:flex-wrap justify-between'>
                    <div className="w-full lg:w-[45%] md:w-1/2 p-4">
                        <Button
                            icon={assets.plus}
                            rounded={false}
                            type="button"
                            title="Add Region"
                            color={"dark-blue"}
                            className="font-medium text-sm mb-3 min-w-[130px] justify-start"
                        />
                        <Accordion items={cluster} title="Select Region" />
                    </div>
                    <div className="w-full lg:w-[45%] md:w-1/2 p-4">
                        <Button
                            icon={assets.plus}
                            rounded={false}
                            type="button"
                            title="Add Clustor"
                            color={"dark-blue"}
                            className="font-medium text-sm mb-3"
                        />
                        <Accordion items={cluster} title="Select Clustor" />
                    </div>
                </div>

                <div className='md:flex md:flex-wrap justify-between'>
                    <div className="w-full lg:w-[45%] md:w-1/2 p-4">
                        <Button
                            icon={assets.plus}
                            rounded={false}
                            type="button"
                            title="Add Branch"
                            color={"dark-blue"}
                            className="font-medium text-sm mb-3"
                        />
                        <Accordion items={cluster} title="Select Branch" />
                    </div>
                    <div className="w-full lg:w-[45%] md:w-1/2 p-4">
                        <Button
                            icon={assets.plus}
                            rounded={false}
                            type="button"
                            title="Add Level"
                            color={"dark-blue"}
                            className="font-medium text-sm mb-3"
                        />
                        <Accordion items={cluster} title="Select Level" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-20'>
                <Button
                    rounded={true}
                    type="button"
                    title="Finished & Next"
                    color={"dark-blue"}
                    className="w-2/5 p-3"
                    onClick={openModal}
                />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <Sidebar />
        </>
    )
}

export default ManageSchool