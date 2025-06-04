import React from 'react';
import logo from '../../assets/Pulse.png'
import Lottie from 'lottie-react';
import loginLottie from '../../assets/loginlottie.json' 
const Login = () => {
    return (
        <div className='bg-[#f4f1ea] py-20'>
            <div className='grid grid-cols-12 items-center gap-6 lg:flex-row justify-between max-w-[1264px] mx-auto bg-white p-5 md:p-10 rounded-3xl'>

                {/* Form */}
                <div className='col-span-12 lg:col-span-6 flex justify-center'>
                    <div className="w-full max-w-xl md:px-10 px-5 py-12 space-y-3 rounded-3xl bg-[#f4f1ea]" bis_skin_checked="1">
                        <img src={logo} 
                        alt="logo"
                        className='w-40 mx-auto'
                        />
                        <div className='my-10'>
                            <h1 className="text-4xl font-extrabold text-center">Welcome Back</h1>
                            <p className='text-center font-medium'>Please Enter Your Details</p>
                        </div>
                        <form noValidate="" action="" className="space-y-6">
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <input type="email" name="email" id="email" placeholder="@Email" className="input w-full px-4 py-6 rounded-md" />
                            </div>
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <input type="password" name="password" id="password" placeholder="Password" className="input w-full px-4 py-6 rounded-md" />
                                <div className="flex justify-end text-base mt-2  text-primary" bis_skin_checked="1">
                                    <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <button className="w-full py-6 text-center rounded-sm btn btn-primary ">Login</button>
                        </form>
                        <div className='mt-4 mb-10'>
                            {/* Google */}
                            <button className="btn bg-white text-black border-[#e5e5e5] w-full py-6">
                            <svg aria-label="Google logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                            </button>
                        </div>
                        <p className="text-base text-center sm:px-6 ">Don't have an account?
                            <a rel="noopener noreferrer" href="/register" className="underline text-primary font-bold">Register</a>
                        </p>
                    </div>
                </div>

                <div className='col-span-12 lg:col-span-6 flex items-center justify-center'>
                    <Lottie 
                    animationData={loginLottie}
                    style={{width: '600px'}}
                    ></Lottie>
                </div>

            </div>
        </div>
    );
};

export default Login;