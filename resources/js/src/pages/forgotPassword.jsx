import React from 'react';
import { assets } from '@/assets';
import ForgotPasswordForm from '@/src/components/auth/signIn/forgotPasswordForm';
import Image from '@/src/components/shared/image';
import './auth.scss';

const ForgotPassword = () => {
    return (
        <>
            <div className='bg-page-bg w-full'>
                <div className="auth-wrapper">
                    <div className="auth-img-wrapper">
                        <Image src={assets.forgotPassword} alt={'Forgot Password'} />
                    </div>

                    <div className='auth-card-wrapper'>
                        <ForgotPasswordForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
