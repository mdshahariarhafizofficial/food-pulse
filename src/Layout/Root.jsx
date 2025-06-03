import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <>
         <header>
            <Navbar></Navbar>
         </header>
         <main>
            <Outlet></Outlet>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
        </>
    );
};

export default Root;