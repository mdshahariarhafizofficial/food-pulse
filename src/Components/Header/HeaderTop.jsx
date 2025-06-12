import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { AlarmClock, Handshake } from 'lucide-react';
import { format } from 'date-fns';

const HeaderTop = () => {
    const {user} = useContext(AuthContext);
    
    const today = format(new Date(), 'hh:mm a, eeee, MMMM d, yyyy');
    
    return (
        <div className='bg-primary py-2 hidden md:block'>
            <div className='max-w-[1500px] mx-auto flex justify-between md:px-5 lg:p-0'>
                <div>
                    <h2 className='text-white flex items-center gap-2'>Hi, {user && user?.displayName } <Handshake size={22} /> Welcome to food pulse</h2>
                </div>
                <div>
                    <h2 className='text-white flex items-center gap-2'>
                        <AlarmClock />
                        {today}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;