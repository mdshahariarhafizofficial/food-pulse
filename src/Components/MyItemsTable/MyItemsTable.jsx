import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast from 'react-hot-toast';

const MyItemsTable = ({FetchFoods}) => {
    const data = use(FetchFoods);
    const [myFoods, setMyFoods] = useState(data);
    console.log(myFoods);

    // Handle Delete
    const handleDelete = (id) => {
        console.log(id);
        
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:8000/foods/${id}`)
            .then((res) => {
                if (res.data.deletedCount) {
                    const remainingFoods = data.filter(food => food._id !== id);
                    setMyFoods(remainingFoods);
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your Food has been deleted.",
                    icon: "success"
                    });                    
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

        }
        });
    }

    // update Foods


    return (
        <div className="overflow-x-auto">
        <table className="table text-center">
            {/* head */}
            <thead className='text-secondary'>
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
                                    <button onClick={() => handleDelete(food._id)} className=" join-item">
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

        {/* Modal */}

        </div>
    );
};

export default MyItemsTable;