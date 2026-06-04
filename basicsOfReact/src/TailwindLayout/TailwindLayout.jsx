import React from 'react'
import { Outlet } from "react-router";
import './index.css'
import TailwindNavbar from './TailwindNavbar'
import { Suspense } from 'react';
import { LoadingPage } from './LoadingPage';

const TailwindLayout = ()=>{

    return(
        <>
        <TailwindNavbar></TailwindNavbar>
        <Suspense fallback={<LoadingPage></LoadingPage>}>
        <Outlet></Outlet>

        </Suspense>
        <footer>
            This is my footer
        </footer>
        </>
    )



}

export default TailwindLayout