import React, { useState } from "react";
import { assets } from "@/assets";
import InputField from "@/src/shared/input/inputField";
import Button from "@/src/shared/button/button";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import './signIn.scss';

export default function LoginForm({ className }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState({
        email: "",
        password: "",
    })


    const handleChange = (value, field) => {
        if (field === "email") {
            setForm({ ...form, email: value })
        } else if (field === "password") {
            setForm({ ...form, password: value })
        }
    }

    const handleLogin = () => {
        let hasError = false;
        setError({ email: "", password: "" });
        // Check Validations
        if (validator.isEmpty(form.email)) {
            setError(prevError => ({ ...prevError, email: "Email cannot be empty!" }));
            hasError = true;
        } else if (!validator.isEmail(form.email)) {
            setError(prevError => ({ ...prevError, email: "Invalid Email" }));
            hasError = true;
        }
        if (validator.isEmpty(form.password)) {
            setError(prevError => ({ ...prevError, password: "Password cannot be empty!" }));
            hasError = true;
        }

        if (hasError) {
            return;
        } else {
            // Call Login API
            navigate('/forgot-password');
        }
    }


    return (
        <>
            <div className="card-wrapper ">
                <div className="flex justify-center mb-5 xl:mb-8">
                    <h4 className="text-dark/80 text-h5 xl:text-h4 font-semibold font-primary">Sign In To Beaconhouse</h4>
                </div>

                <div className='w-full flex flex-col gap-y-4 xl:gap-y-6'>
                    <div >
                        <InputField
                            rounded={true}
                            className="placeholder:text-lg"
                            icon={assets.envelope}
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={form?.email}
                            onChange={(e) => handleChange(e.target.value, "email")}
                            error={error.email}
                        />
                    </div>

                    <div>
                        <InputField
                            rounded={true}
                            className="placeholder:text-lg"
                            icon={assets.lock}
                            type="password"
                            name="password"
                            placeholder="****"
                            value={form.password}
                            onChange={(e) => handleChange(e.target.value, "password")}
                            error={error.password}
                        />
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center ml-4">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-500 checked:border-gray-500 hover:border-gray-500 focus:border-gray-500 focus:ring-0"
                        />

                        <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-900 font-primary">
                            Remember me
                        </label>
                    </div>

                    {/* Sign In & Forgot Password Buttons */}
                    <div className="flex flex-col max-xl:gap-y-4 xl:gap-y-6">
                        <Button
                            rounded={true}
                            type="submit"
                            title="Sign In"
                            color="sky-blue"
                            onClick={handleLogin}
                            className="p-3"
                        />

                        <Button
                            rounded={true}
                            type="button"
                            title="Forgot Password?"
                            color="dark-blue"
                            className="p-3"
                            onClick={() => navigate("/forgot-password")}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
