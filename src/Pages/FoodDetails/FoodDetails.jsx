import { CalendarX2, ClockAlert, HandPlatter, Mail } from 'lucide-react';
import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { useLoaderData } from 'react-router';

const FoodDetails = () => {
    const data = useLoaderData();
    const {_id, quantity, foodTitle, foodImage, expiryDate, category, description, addedDate, email} = data;
    console.log(data);
    const date = new Date();
    
    return (
        <div className='bg-[#f4f1ea] pb-20 pt-4 px-2'>
            <div className='max-w-[1500px] mx-auto'>

                <div className='bg-[#151515] p-5 rounded-xl'>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-center text-primary uppercase'>Food Details</h2>
                    <div className='divider divider-primary w-56 mx-auto'></div>
                </div>

                <div className='bg-white p-4 md:p-6 lg:p-10 mb-10 mt-5 rounded'>
                    <div className='max-w-[1120px] mx-auto'>
                        <div className='grid lg:grid-cols-2 gap-10'>
                            <div className='w-full md:h-[400px] bg-[#f4f1ea] p-4 md:p-10 rounded-2xl'>
                                <img className='w-full h-full rounded-2xl object-cover' src={foodImage} alt="" />
                            </div>
                            <div className='relative pb-5'>
                                <h2 className='text-5xl font-bold'>{foodTitle}</h2>

                                {/* Start Date */}
                                <p className='flex items-center gap-2 text-gray-500 font-medium'>
                                        <MdDateRange size={25} color='#FF5722'> </MdDateRange>
                                    <span className='text-xl font-bold text-secondary'>Added Date : </span>
                                {addedDate.split('T')[0]}</p>
                                <div className='divider'></div>
                                <div className='space-y-3 mt-5'>
                                    <div>
                                        <p className='text-accent'>Track your food item easily. View details, expiry countdown, and leave personal notes. Stay fresh, reduce waste, and manage your kitchen smarter with Food Pulse.</p>
                                    </div>                                    

                                    <div className='flex items-center gap-1'>
                                        <BiCategory size={22} color='red'></BiCategory>
                                        <p className='font-medium text-lg text-accent'>Category : {category}</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <HandPlatter color='red' />
                                        <p className='font-medium text-lg text-accent'>Quantity : {quantity}</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                       <CalendarX2 color='red' />
                                        <p className='font-medium text-lg text-accent'>Expiry Date : {expiryDate}</p>
                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex items-center gap-1 -mt-3'>
                                       <Mail color='red' />
                                        <p className='font-medium text-lg text-accent'>Author Email : {email}</p>
                                    </div>
                                </div>
                                {/* Badge */}
                                {
                                    new Date(expiryDate) < date && 
                                    <div className="absolute right-0 top-0 badge bg-red-500 text-white">
                                        <ClockAlert size={18} />
                                        Expired
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='mt-6 pb-10'>
                            <h2 className='text-5xl border-b-2 border-gray-300 pb-4 mb-4 font-bold text-secondary'>Description</h2>
                            <p className='text-gray-500 font-medium'>{description}</p>
                        </div>
                        <div className='divider'></div>

                        <div></div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;