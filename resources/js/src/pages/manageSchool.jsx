import { assets } from '@/assets';
import { useState } from 'react';
import Accordion from '../shared/accordion/accordion';
import Button from '../shared/button/button';
import Modal from '../shared/modal/modal';
import SubjectCard from '../shared/subjectCard/subjectCard';

const ManageSchool = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [team, setTeam] = useState({
        region: "",
        cluster: "",
        city: "",
        branch: ""
    });

    // Open/Close Modal
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Handle Change team value
    const handleChange = (target) => {
        const { name, value } = target;
        setTeam((prevTeam) => ({ ...prevTeam, [name]: value }))
    }

    const region = ["ROC", "RON", "ROS"]
    const cluster = ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5", "Cluster 6", "Cluster 7", "Cluster 8", "Cluster 9"]
    const city = ["Lahore", "Islamabad", "Peshawar", "Rawalpindi", "Kashmir", "Rawlakot"]
    const branch = ["Gulberg Lahore", "Shadman", "Johar Town", "Zaman Park", "Azadi Chowk", "Badshahi Masjid Lahore"]
    const level = ["Early Year - Co-Education", "Early Year - Boys", "Low Primary - Co-Education", "Primary - Co-Education", "Primary - Girls", "Primary - Boys", "IB School - Co-Education", "Secondary School - Co-Education", "Secondary School - Boys", "Secondary School - Girls", "All / Whole"]
    return (
        <>
            <div className='container'>
                <div className='flex flex-col gap-10 py-12'>

                    <div className=''>
                        <h3 className='text-h3 font-primary text-center text-blue-dark1'>Welcome to Beaconhouse</h3>
                        <p className='text-center font-primary text-sm text-blue-dark1'>Please provide content from beacon house team</p>
                    </div>

                    <div>

                        <div className={`grid grid-flow-row gap-y-10 xl:gap-x-30 lg:gap-x-10 gap-x-5 ${team.region !== "" ? "lg:grid-cols-2 grid-cols-1" : "grid-cols-1"}`}>
                            <div className="w-full p-4">
                                <Button
                                    icon={assets.plus}
                                    rounded={false}
                                    type="button"
                                    title="Add Region"
                                    color={"blue-dark2"}
                                    className="font-medium text-sm mb-3 min-w-[130px] justify-start"
                                    onClick={openModal}
                                />
                                <Accordion
                                    items={region}
                                    title="Select Region"
                                    name="region"
                                    onChange={handleChange}
                                />
                            </div>

                            {team.region !== "" ? (
                                <div className="w-full p-4">
                                    <Button
                                        icon={assets.plus}
                                        rounded={false}
                                        type="button"
                                        title="Add Cluster"
                                        color={"blue-dark2"}
                                        className="font-medium text-sm mb-3"
                                        onClick={openModal}
                                    />
                                    <Accordion
                                        items={cluster}
                                        title="Select Cluster"
                                        name="cluster"
                                        onChange={handleChange}
                                    />
                                </div>
                            ) : null}

                            {team.cluster !== "" ? (
                                <div className="w-full p-4">
                                    <Button
                                        icon={assets.plus}
                                        rounded={false}
                                        type="button"
                                        title="Add City"
                                        color={"blue-dark2"}
                                        className="font-medium text-sm mb-3"
                                        onClick={openModal}
                                    />
                                    <Accordion
                                        items={city}
                                        title="Select City"
                                        name="city"
                                        onChange={handleChange}
                                    />
                                </div>
                            ) : null}

                            {team.city !== "" ? (
                                <div className="w-full p-4">
                                    <Button
                                        icon={assets.plus}
                                        rounded={false}
                                        type="button"
                                        title="Add Branch"
                                        color={"blue-dark2"}
                                        className="font-medium text-sm mb-3"
                                        onClick={openModal}
                                    />
                                    <Accordion
                                        items={branch}
                                        title="Select Branch"
                                        name="branch"
                                        onChange={handleChange}
                                    />
                                </div>
                            ) : null}

                            {team.branch !== "" ? (
                                <div className="w-full p-4">
                                    <Button
                                        icon={assets.plus}
                                        rounded={false}
                                        type="button"
                                        title="Add Level"
                                        color={"blue-dark2"}
                                        className="font-medium text-sm mb-3"
                                        onClick={openModal}
                                    />
                                    <Accordion
                                        items={level}
                                        title="Select Level"
                                        name="level"
                                    // onChange={handleChange}
                                    />
                                </div>
                            ) : null}

                        </div>

                        <div className='flex justify-end my-20'>
                            <Button
                                rounded={true}
                                type="button"
                                title="Finished & Next"
                                color={"blue-dark2"}
                                className="px-18 p-3 xl:mr-30 lg:mr-10 mr-5"
                            />
                        </div>
                        <Modal isOpen={isModalOpen} onClose={closeModal} team={team}/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageSchool
