import React from "react";
import NavbarStyles from '../styles/Navbar.module.css';
import { FcDocument, FcFeedback } from 'react-icons/fc'
import { BsLinkedin, BsTerminalFill } from 'react-icons/bs'

function Navbar() {
    return (
        <div className={NavbarStyles['container']}>
            <FcDocument size={70} />
            <FcFeedback size={70} />
            <BsLinkedin size={70} />
            <BsTerminalFill size={70} />
            </div>
    )
}


// Design Idea
/*
    Main site is a flashing terminal where visitor can navigate the site with basic terminal commands which they can select :)
    Navbar is similar to a mac doc at the bottom....?
*/

export default Navbar