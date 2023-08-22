import React from "react";
import LoginForm from "@/src/components/auth/signIn/loginForm";
import { assets } from "@/assets";
import Image from "@/src/components/shared/image";
import './auth.scss';

export default function Login() {
	return (
		<>
			<div className='bg-primary-blue w-full'>
				<div className="auth-wrapper">
					<div className="auth-img-wrapper">
						<Image src={assets.signIn} alt={'Sign In'} />
					</div>

					<div className="auth-card-wrapper">
						<LoginForm />
					</div>
				</div>
			</div>
		</>
	);
}
