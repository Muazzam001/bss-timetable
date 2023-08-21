import React from 'react'
import Button from '../../shared/button'
import {Link, useNavigate} from 'react-router-dom'
import './signIn.scss'

const ResetCard = ({className}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="card-wrapper ">
                <div className="flex flex-col items-center justify-center">
                    <h4 className='text-dark/80 text-h5 xl:text-h4 font-semibold'>Check your inbox</h4>
                    <p className='text-dark/80 text-md text-center'>We’ve sent a reset link to your inbox.
                        If it doesn’t show up soon, check your spam folder.</p>
                </div>

                <Link className='text-link text-md font-semibold mt-4 cursor-pointer text-center mx-auto '>Resend
                    email</Link>

                <div className="mt-12 flex flex-col gap-y-5 w-full">
                    <Button
                        type="button"
                        onClick={() => navigate("/")}
                        title="Back to Sign In"
                        className="w-full hover:border-btn-sky-blue bg-btn-sky-blue hover:text-btn-sky-blue"
                    />
                </div>
            </div>
        </>
    )
}

export default ResetCard
