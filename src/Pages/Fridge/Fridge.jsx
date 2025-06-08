import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../Components/FoodCard/FoodCard';

const Fridge = () => {
    const data = useLoaderData();
    const [filterValue, setFilterValue] = useState('');
    console.log(filterValue);
    
    const [loadMore, setLoadMore] = useState(false);
    const [foods, setFoods] = useState(data.slice(0,9));
    useEffect(() => {
        if (loadMore) {
            setFoods(data)
        }else{
            setFoods(data.slice(0, 9))
            window.scrollTo(100, 0)
        }
    }, [data, loadMore])
    // console.log(data);
    useEffect(() => {
        if (filterValue !== "") {            
            fetch(`http://localhost:8000/foods?category=${filterValue}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })
        }
    }, [filterValue]);
    
    return (
        <div className='bg-[#f4f1ea] pb-20 pt-4 px-2'>
            <div className='max-w-[1500px] mx-auto'>

                <div className='bg-[#151515] p-5 rounded-xl'>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-center text-primary'>Fridge Inventory</h2>
                    <div className='divider divider-primary w-56 mx-auto'></div>
                    {/* sort Section */}
                    <div className='grid grid-cols-12 gap-6 py-4 items-center'>
                        <div className='hidden lg:block lg:col-span-4'></div>
                        {/* Search */}
                        <div className='col-span-12 md:col-span-8 lg:col-span-4'>
                            <form className='flex gap-0'>
                                <label className="w-full flex items-center gap-1 pl-2 bg-white rounded-r-none rounded-l">
                                <svg className="h-[1.3em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                                    className='w-full focus:outline-0'
                                    type="search" required placeholder="Search" />
                                </label>
                                    <button className='btn btn-primary rounded-l-none text-white text-lg'>Search</button>
                            </form>
                        </div>
                        {/* Category */}
                        <div className='col-span-12 md:col-span-4 flex md:justify-end'>
                                {/* Category */}
                                <div className="space-y-1 text-sm" bis_skin_checked="1">
                                    <select
                                    onChange={(e) => setFilterValue(e.target.value)}
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

                <div className='bg-white md:p-6 lg:p-10 rounded-3xl mb-10 mt-5'>
                    <div className='rounded-3xl bg-[#f4f1ea] p-5 lg:p-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {
                                foods.map(food => <FoodCard
                                key={food._id}
                                food = {food}
                                ></FoodCard>)
                            }
                        </div>
                        
                        {
                            foods.length >= 9 &&
                            <div className='text-center mt-10'>
                                <button onClick={() => setLoadMore(!loadMore)}  className='btn btn-secondary text-black text-xl px-8'>
                                {
                                    loadMore? 'Shoe Less...':
                                    'Load More...'
                                }
                                </button>
                            </div>                        
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Fridge;