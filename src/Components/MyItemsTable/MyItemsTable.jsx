import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { FaEdit, FaInfoCircle } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';
import toast from 'react-hot-toast';
import logo from '../../assets/Pulse.png';
import AuthContext from '../../Context/AuthContext';

const MyItemsTable = ({FetchFoods}) => {
    const data = use(FetchFoods);
    const [myFoods, setMyFoods] = useState(data);
    const [singleFood, setSingleFood] = useState({});
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

    // Single Food data
    const singleFoodData = (id) => {
        const findFood = data.find(food => food._id === id);
        setSingleFood({...findFood});       
    }

    // Handle Update
    const handleUpdate = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateInfo = Object.fromEntries(formData.entries());
        
        // Update data
        axios.put(`http://localhost:8000/foods/${id}`, updateInfo)
        .then(res => {
            if (res.data.modifiedCount) {
                fetch(`http://localhost:8000/foods/${id}`)
                .then(res => res.json())
                .then(data => {
                    const updatedFood = myFoods.map(food => food._id === data._id ? data : food);
                    setMyFoods(updatedFood)
                })
                document.getElementById('my_modal_3').close();
                Swal.fire({
                icon: "success",
                title: "Update Info has been saved",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
        .catch(error => {
            console.log(error.message);
            
        })
    }


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
                <th>Category</th>
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
                            src={food.foodImage}
                            alt="food img" />
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
                    <td className='text-accent'>{food.category}</td>
                    <td className='font-bold text-md'>{food.quantity}</td>
                    <td className='text-primary font-semibold'>{food.expiryDate}</td>

                    {/* Auction */}
                        <td>{
                            <div>
                                <div className="join flex justify-center items-center gap-7">
                                    <Link to={`/foods/${food._id}`}>
                                        <button className="flex join-item items-center">
                                            <FaInfoCircle size={22} color='#ff5722'></FaInfoCircle>
                                        </button>
                                    </Link>
                                    {/* Edit */}
                                    <button onClick={()=>{
                                        document.getElementById('my_modal_3').showModal();
                                        singleFoodData(food._id)
                                        }} 
                                        className=" join-item">
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
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-4xl">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</button>
            </form>

                {/* Form */}
                <div className=''>
                    <div className="w-full max-w-4xl md:px-10 px-5 py-12 space-y-3 rounded-3xl bg-[#f4f1ea]" bis_skin_checked="1">
                        <img src={logo} 
                        alt="logo"
                        className='w-40 mx-auto'
                        />
                        <div className='my-5 space-y-3'>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-center">Update Food Information</h1>
                            <p className='text-center font-medium text-accent'>Track your food before it expires!</p>
                        </div>
                        <form onSubmit={(e) => handleUpdate(e,singleFood._id)} className="space-y-6">


                            {/* Email */}
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <label htmlFor="Email" className="block text-secondary font-bold">User Email</label>
                                <input type="email" name="email" id="email" placeholder="Email"
                                defaultValue={singleFood.email}
                                readOnly
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                            </div>

                            {/* Title */}
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <label htmlFor="foodTitle" className="block text-secondary font-bold">*Food Title</label>
                                <input type="text" name="foodTitle" id="foodTitle"
                                defaultValue={singleFood.foodTitle}
                                placeholder="Food Title"
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                            </div>

                            {/* Food Image */}
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <label htmlFor="foodImage" className="block text-secondary font-bold">*Food Image Url</label>
                                <input type="url" name="foodImage" id="foodImage" 
                                defaultValue={singleFood.foodImage}
                                placeholder="Food Image Url"
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                            </div>

                            {/* Category & Exp Date */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                                {/* Expiry Date */}
                                <div className="space-y-1 text-sm" bis_skin_checked="1">
                                    <label htmlFor="expiryDate" className="block text-secondary font-bold">*Expiry Date</label>
                                    <input type="date" name="expiryDate" id="expiryDate"
                                    defaultValue={singleFood.expiryDate}
                                    placeholder="Expiry Date"
                                    required
                                    className="input w-full px-4 py-6 rounded-md" />
                                </div>

                                {/* Category */}
                                <div className="space-y-1 text-sm" bis_skin_checked="1">
                                    <label htmlFor="foodTitle" className="block text-secondary font-bold">*Select a category</label>
                                    <select defaultValue="Select a category" 
                                    name='category'
                                    required
                                    className="select select-lg w-full rounded-md text-accent"
                                    >
                                        <option
                                        defaultValue={singleFood?.category}
                                        >{singleFood?.category}</option>
                                        <option>Dairy</option>
                                        <option>Meat</option>
                                        <option>Vegetables</option>
                                        <option>Snacks</option>
                                    </select>

                                </div>

                            </div>

                            {/* Added Date & Quantity */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                                {/* Added Date */}
                                <div className="space-y-1 text-sm" bis_skin_checked="1">
                                    <label htmlFor="addedDate" className="block text-secondary font-bold">Added Date</label>
                                    <input type="date" name="addedDate" id="addedDate" 
                                    defaultValue={singleFood?.addedDate?.split('T')[0]}
                                    placeholder="Added Date"
                                    required
                                    readOnly
                                    className="input w-full px-4 py-6 rounded-md" />
                                </div>

                                {/* Quantity */}
                                <div className="space-y-1 text-sm" bis_skin_checked="1">
                                    <label htmlFor="quantity" className="block text-secondary font-bold">*Quantity</label>
                                    <input type="number" name="quantity" id="quantity" 
                                    defaultValue={singleFood.quantity}
                                    placeholder="Food Quantity"
                                    required
                                    className="input w-full px-4 py-6 rounded-md" />
                                </div>
                            </div>


                            {/* Description */}
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <label htmlFor="description" className="block text-secondary font-bold">*Description</label>
                                <textarea className="textarea w-full px-4 py-6 rounded-md"
                                name='description'
                                defaultValue={singleFood.description}
                                placeholder="Write Description..."
                                required
                                ></textarea>
                            </div>

                            <button type='submit' className="w-full py-6 text-center rounded-sm btn btn-primary text-xl">
                                Update food information</button>
                        </form>

                    </div>
                </div>

        </div>
        </dialog>

        </div>
    );
};

export default MyItemsTable;