import React from 'react'
import { Outlet } from "react-router";
import './index.css'
import TailwindNavbar from './TailwindNavbar'

const TailwindLayout = ()=>{

    return(
        <>
        <TailwindNavbar></TailwindNavbar>
        <Outlet></Outlet>
        <footer>
            This is my footer
        </footer>
        </>
    )



}

export default TailwindLayout