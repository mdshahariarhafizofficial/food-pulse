import React, { Suspense, useEffect, useState } from 'react';
import Loading from '../../Pages/Loading/Loading'
import Slider from '../../Components/Slider/Slider';
import NearlyExpiryItems from '../../Components/NearlyExpiryItems/NearlyExpiryItems';
import ExpiredFood from '../../Components/ExpiredFood/ExpiredFood';
import CountUpSection from '../../Components/CountUpSection/CountUpSection';
import FoodStorageTips from '../../Components/FoodStorageTips/FoodStorageTips';
// Expired Foods
const fetchExpiredFoods = fetch('http://localhost:8000/foods/expired-foods')
.then(res => res.json())
// All foods
const fetchAllFoods = fetch('http://localhost:8000/foods')
.then(res => res.json())
// All notes
const fetchAllNotes = fetch('http://localhost:8000/notes')
.then(res => res.json())


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
                <div className='pb-20 px-2'>
                    <div>
                        <div className='bg-[#f4f1ea] lg:p-20 md:px-5 py-10'>
                            <NearlyExpiryItems expiringSoon = {expiringSoon}></NearlyExpiryItems>
                        </div>

                        <Suspense fallback={<Loading></Loading>}>
                            <ExpiredFood fetchExpiredFoods={fetchExpiredFoods}></ExpiredFood>
                        </Suspense>

                        <div className='bg-black lg:p-20 md:px-5 py-10'>
                            <CountUpSection 
                                expiringSoon = {expiringSoon}
                                fetchExpiredFoods={fetchExpiredFoods}
                                fetchAllFoods = {fetchAllFoods}
                                fetchAllNotes={fetchAllNotes}
                            ></CountUpSection>
                        </div>

                        <div className='bg-[#f4f1ea] lg:p-20 md:px-5 py-10'>
                            <FoodStorageTips></FoodStorageTips>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;