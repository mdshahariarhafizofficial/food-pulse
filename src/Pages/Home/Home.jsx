import React, { useEffect, useState } from 'react';
import Slider from '../../Components/Slider/Slider';
import NearlyExpiryItems from '../../Components/NearlyExpiryItems/NearlyExpiryItems';

const Home = () => {
    const [expiringSoon, setExpiringSoon] = useState([]);

    // Load Expire Soon Foods
    useEffect(() => {
        fetch('http://localhost:8000/foods/expiring-soon').then(res => res.json())
        .then(data => {
            setExpiringSoon(data)
        })
    }, [])

    return (
        <>
            <div>
                <Slider></Slider>
                <div className='bg-[#f4f1ea] pb-20 pt-4 px-2'>
                    <div className='max-w-[1500px] mx-auto'>
                        <NearlyExpiryItems expiringSoon = {expiringSoon}></NearlyExpiryItems>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;