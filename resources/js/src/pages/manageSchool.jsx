import React from 'react'

const ManageSchool = () => {
    return (
        <div className="xl:px-30 lg:px-10 px-5">
            <div className='md:flex md:flex-wrap justify-between'>
                <div className="w-full lg:w-[45%] md:w-1/2 p-4">
                    <div className="bg-blue-300 p-4 rounded-lg">Section 1</div>
                </div>
                <div className="w-full lg:w-[45%] md:w-1/2 p-4">
                    <div className="bg-green-300 p-4 rounded-lg">Section 2</div>
                </div>
            </div>

            <div className='md:flex md:flex-wrap justify-between'>
                <div className="w-full lg:w-[45%] md:w-1/2 p-4">
                    <div className="bg-yellow-300 p-4 rounded-lg">Section 3</div>
                </div>
                <div className="w-full lg:w-[45%] md:w-1/2 p-4">
                    <div className="bg-red-300 p-4 rounded-lg">Section 4</div>
                </div>
            </div>
        </div>
    )
}

export default ManageSchool