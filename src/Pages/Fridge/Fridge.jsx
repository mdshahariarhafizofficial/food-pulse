import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../Components/FoodCard/FoodCard';

const Fridge = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div className='bg-[#f4f1ea] pb-20 pt-4 px-5'>
            <div className='max-w-[1500px] mx-auto'>

                <div className='bg-[#151515] p-5 rounded-xl'>
                    <h2 className='text-6xl font-extrabold text-center text-primary'>Fridge Inventory</h2>
                    <div className='divider divider-primary w-56 mx-auto'></div>
                    {/* sort Section */}
                    <div className='grid grid-cols-12 py-4 items-center'>
                        <div className='col-span-4'></div>
                        {/* Search */}
                        <div className='col-span-4'>
                            <form className='flex gap-0'>
                                <label className="input w-full rounded-r-none">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                    <input 
                                    className='w-full'
                                    type="search" required placeholder="Search" />
                                </label>
                                    <button className='btn btn-primary rounded-l-none text-white text-lg'>Search</button>
                            </form>
                        </div>
                        {/* Category */}
                        <div className='col-span-4 flex justify-end'>
                                {/* Category */}
                                <div className="space-y-1 text-sm" bis_skin_checked="1">
                                    <select
                                    name='category'
                                    defaultValue="Select a category" 
                                    required
                                    className="select rounded-md border-2 border-primary text-accent"
                                    >
                                        <option value=''>Sort by category</option>
                                        <option>Dairy</option>
                                        <option>Meat</option>
                                        <option>Vegetables</option>
                                        <option>Snacks</option>
                                    </select>

                                </div>                           
                        </div>
                    </div>
                </div>

                <div className='bg-white p-5 md:p-10 rounded-3xl my-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-3xl bg-[#f4f1ea] p-10'>
                        {
                            data.map(food => <FoodCard
                            key={food._id}
                            food = {food}
                            ></FoodCard>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Fridge;