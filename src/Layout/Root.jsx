import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import Loading from '../Pages/Loading/Loading';

const Root = () => {
    const navigation = useNavigation();
    return (
        <>
         <header>
            <Navbar></Navbar>
         </header>
         <main>
            <div className='min-h-[calc(100vh-492.31px)]'>
                {
                    navigation.state == "loading"? <Loading></Loading> : 
                    <Outlet></Outlet>
                }
            </div>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
        </>
    );
};

export default Root;