import React from 'react';
import {assets} from '@/assets';
import ForgotPasswordForm from '@/src/components/auth/forgotPasswordForm';
import Image from '@/src/shared/image/image';
import './auth.scss';
import AuthLayout from '../shared/authLayout/authLayout';

const ForgotPassword = () => {
    return (
        <AuthLayout>
            <div className='bg-primary-blue w-full'>
                <div className="auth-wrapper">
                    <div className="auth-img-wrapper">
                        <Image src={assets.forgotPassword} alt={'Forgot Password icon'}/>
                    </div>

                    <div className='auth-card-wrapper'>
                        <ForgotPasswordForm/>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

export default ForgotPassword
