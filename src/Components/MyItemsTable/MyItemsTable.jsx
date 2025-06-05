import React, { use } from 'react';
import { Link } from 'react-router';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const MyItemsTable = ({FetchFoods}) => {
    const myFoods = use(FetchFoods);
    console.log(myFoods);
    
    return (
        <div className="overflow-x-auto">
        <table className="table text-center">
            {/* head */}
            <thead className='text-blue-900'>
            <tr className='border-primary border-b-2'>
                <th>
                    No.
                </th>
                <th>Image</th>
                <th>Food Name</th>
                <th>Added Date</th>
                <th>Quantity</th>
                <th>Expiry Date</th>
                <th>Auction</th>
            </tr>
            </thead>
            <tbody>

            {/* row  */}
            {
                myFoods.map((food, index) =>                
                <tr key={food._id} className='border-gray-300'>
                    <th className='text-accent'>{index+1}</th>
                    <td>
                    <div className="flex items-center gap-3 justify-center">
                        <div className="avatar">
                        <div className="mask mask-circle h-12 w-12">
                            <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    </td>
                    <td>
                        <div className="font-bold text-primary">
                        {food.foodTitle}    
                        </div>                        
                    </td>
                    <td className='text-accent'>{food.addedDate}</td>
                    <td className='font-bold text-md'>{food.quantity}</td>
                    <td className='text-primary font-semibold'>{food.expiryDate}</td>

                    {/* Auction */}
                        <td>{
                            <div>
                                <div className="join flex justify-center items-center gap-7">
                                    <Link>
                                        <button className="flex join-item items-center">
                                            <FaInfoCircle size={22} color='#ff5722'></FaInfoCircle>
                                        </button>
                                    </Link>
                                    {/* Edit */}
                                    <button className=" join-item">
                                        <FaEdit 
                                        size={22} color='#1e0a3c'></FaEdit>
                                    </button>
                                    <button className=" join-item">
                                        <MdDeleteForever
                                        size={25} color='red'
                                        ></MdDeleteForever>
                                    </button>
                                </div>
                            </div>    
                        }</td>

                </tr>
                )
            }

            </tbody>
        </table>
        </div>
    );
};

export default MyItemsTable;