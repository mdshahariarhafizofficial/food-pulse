import React from 'react';
import logo from '../../assets/Pulse.png'
import Lottie from 'lottie-react';
import loginLottie from '../../assets/addfood.json';
import bannerImg from '../../assets/HealtyBannerAd.png'
import { IoFastFoodOutline } from 'react-icons/io5';
const AddFood = () => {
    return (
        <div className='bg-[#f4f1ea] pb-20'>
            <div>
                <img className='max-w-[1500px] mx-auto w-full rounded-b-2xl ' src={bannerImg} alt="" />
            </div>
            <div className='grid grid-cols-12 items-center gap-6 lg:flex-row justify-between max-w-[1500px] mx-auto bg-white p-5 md:p-10 rounded-3xl my-10'>

                {/* Form */}
                <div className='col-span-12 lg:col-span-8 flex justify-center lg:justify-start'>
                    <div className="w-full max-w-4xl md:px-10 px-5 py-12 space-y-3 rounded-3xl bg-[#f4f1ea]" bis_skin_checked="1">
                        <img src={logo} 
                        alt="logo"
                        className='w-40 mx-auto'
                        />
                        <div className='my-5 space-y-3'>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-center">Add New Food</h1>
                            <p className='text-center font-medium text-accent'>Track your food before it expires!</p>
                        </div>
                        <form className="space-y-6">
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <input type="email" name="email" id="email" placeholder="@Email"
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                            </div>
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <input type="password" name="password" id="password" placeholder="Password" 
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                            </div>
                            <button type='submit' className="w-full py-6 text-center rounded-sm btn btn-primary text-xl">
                                <IoFastFoodOutline size={30}></IoFastFoodOutline>
                                Add Food</button>
                        </form>

                    </div>
                </div>

                {/* Lottie */}
                <div className='col-span-12 lg:col-span-4 flex items-center justify-center'>
                    <Lottie 
                    animationData={loginLottie}
                    style={{width: '600px'}}
                    ></Lottie>
                </div>

            </div>
        </div>
    );
};

export default AddFood;