import { CalendarX2, ClockAlert, HandPlatter, Mail, ScrollText } from 'lucide-react';
import React, { useContext } from 'react';
import { BiCategory } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import AuthContext from '../../Context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';


const FoodDetails = () => {
    const {user} = useContext(AuthContext);
    const data = useLoaderData();
    const {_id, quantity, foodTitle, foodImage, expiryDate, category, description, addedDate, email} = data;
    console.log(data);
    const date = new Date();
    const handleAddNote = (e, id) => {
        e.preventDefault();
        const noteText = e.target.noteText.value;
        const note = {
            foodId: id,
            authorName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            text: noteText,
            postedDate: new Date(),
        };
        console.log(note);

        // Send Note to DB
        axios.post('http://localhost:8000/notes', note)
        .then(res => {
            if (res.data.insertedId) {
                toast.success('Note has been saved!')
            }
        })
        .catch(error => {
            toast.error(error.message)
        })
        e.target.reset();
    }
    
    return (
        <div className='bg-[#f4f1ea] pb-20 pt-4 px-2'>
            <div className='max-w-[1500px] mx-auto'>

                <div className='bg-[#151515] p-5 rounded-xl'>
                    <h2 className='text-4xl md:text-6xl font-extrabold text-center text-primary uppercase'>Food Details</h2>
                    <div className='divider divider-primary w-56 mx-auto'></div>
                </div>

                <div className='bg-white p-4 md:p-6 lg:p-10 mt-5 rounded-2xl'>
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

                        {/* Notes */}
                        <div className='my-10'>
                            <h2 className='text-4xl text-secondary font-bold mb-2 flex items-center gap-2'><ScrollText size={50} /> Notes:</h2>
                            <div className="flex flex-col w-full p-6 divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-gray-200" bis_skin_checked="1">
                            <div className="flex justify-between p-4" bis_skin_checked="1">
                                <div className="flex space-x-4" bis_skin_checked="1">
                                    <div bis_skin_checked="1">
                                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                    </div>
                                    <div bis_skin_checked="1">
                                        <h4 className="font-bold">Leroy Jenkins</h4>
                                        <span className="text-xs dark:text-gray-600">2 days ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 text-sm dark:text-gray-600" bis_skin_checked="1">
                                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                            </div>
                            </div>
                        </div>
                        <div className='divider'></div>
                        
                        {/* Note Form */}
                        <div className='my-10'>
                            <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 bg-[#f4f1ea] dark:text-gray-800" bis_skin_checked="1">
                                <div className="flex flex-col items-center w-full" bis_skin_checked="1">
                                    <h2 className="flex items-center gap-1 text-4xl font-semibold text-center text-secondary">
                                        <ScrollText size={50} />
                                        Add A Note</h2>
                                    <form onSubmit={(e) => handleAddNote(e,_id)} className="flex flex-col w-full mt-3" bis_skin_checked="1">
                                        <textarea rows="3" placeholder="Write A Note..." 
                                        name='noteText'
                                        required
                                        className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>

                                        {
                                            user.email === email ?
                                            <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 bg-secondary">Add Note</button> :
                                            <button type="submit" style={{cursor: 'not-allowed'}} className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 bg-gray-400 " disabled={true}>Add Note</button>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FoodDetails;