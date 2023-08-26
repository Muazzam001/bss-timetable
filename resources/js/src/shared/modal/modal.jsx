import { assets } from '@/assets';
import ArrowLeft from '@/assets/icons/arrowLeft';
import Button from '../button/button';
import Image from '../image/image';
import InputField from '../input/inputField';

const Modal = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40 overflow-y-hidden" onClick={onClose}/>
            )}

            <div className={`fixed top-0 right-0 h-full overflow-y-auto bg-gray-normal w-[55%] border border-gray-300 transform transition-transform ease-in-out duration-700 bg-gray-normal ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>

                <div className='bg-white py-5 px-3 border-y border-slate-300 cursor-pointer' onClick={onClose}>
                    <ArrowLeft className="!w-6 !h-6" />
                </div>

                <div className='my-5 ml-16'>
                    <h3 className='text-xl text-bold font-primary'>Manage School</h3>
                </div>

                <div className="flex flex-col gap-y-14 bg-white m-8 border rounded-md border-gray-300 p-4 pt-10">
                    <div className='flex gap-x-3 items-center'>
                        <span><Image src={assets.section} alt="Input field icon" className='h-9 w-9' /></span>
                        <h2 className="leading-7 text-2xl font-primary">Add Section</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <InputField
                                    type="text"
                                    htmlFor="region"
                                    name="region"
                                    id="region"
                                    label="Select Region"
                                    className="!p-3"
                                    placeholder="Select Region..."
                                // value={}
                                // onChange={}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <InputField
                                    type="text"
                                    htmlFor="cluster"
                                    name="cluster"
                                    id="cluster"
                                    label="Select Cluster"
                                    placeholder="Select Cluster..."
                                    className="!p-3"
                                // value={ }
                                // onChange={ }
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <InputField
                                    type="text"
                                    htmlFor="Branch"
                                    name="Branch"
                                    id="Branch"
                                    label="Select Branch"
                                    placeholder="Select Branch..."
                                    className="!p-3"
                                // value={ }
                                // onChange={ }
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <InputField
                                    type="text"
                                    htmlFor="section"
                                    name="section"
                                    id="section"
                                    label="Select Section"
                                    placeholder="Select Section..."
                                    className="!p-3"
                                // value={ }
                                // onChange={ }
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-5 justify-end pr-6 mb-16 mt-6'>
                        <Button
                            title="Cancel"
                            color="dark-blue"
                            rounded={true}
                            hover={false}
                            className="!px-8 !bg-medium-gray !text-black !text-sm"
                        />
                        <Button
                            title="Save and Add More"
                            color="dark-blue"
                            rounded={true}
                            className="!px-8 !text-sm"
                        />
                        <Button
                            title="Save and Finished"
                            color="dark-blue"
                            rounded={true}
                            className="!px-8 !text-sm"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
