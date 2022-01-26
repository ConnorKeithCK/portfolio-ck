import React, { useState } from "react";
import NavbarStyles from '../styles/Navbar.module.css';
import { FcDocument, FcFeedback } from 'react-icons/fc'
import { BsLinkedin, BsTerminalFill, BsGithub, BsEnvelopeFill, BsFileTextFill } from 'react-icons/bs'


function Navbar() {

    const [selectedIcon, setSelectedIcon] = useState<string>("")

    return (
        <div className={NavbarStyles['container']}>
            {/* Map later */}
            <span className={NavbarStyles['tooltip']}>{selectedIcon}</span>
            <BsFileTextFill className={NavbarStyles['icon']} onMouseOut={() => setSelectedIcon("")} onMouseOver={() => setSelectedIcon("Resume")} size={70} color="#9eeaff" />
            <BsEnvelopeFill className={NavbarStyles['icon']} onMouseOut={() => setSelectedIcon("")} onMouseOver={() => setSelectedIcon("Contact me")} size={70} color="#0094bd"/>
            <BsLinkedin className={NavbarStyles['icon']} onMouseOut={() => setSelectedIcon("")} onMouseOver={() => setSelectedIcon("LinkedIn")} size={70} color="#2600ff"/>
            {/* <BsTerminalFill onMouseOut={() => setSelectedIcon("")} onMouseOver={() => setSelectedIcon("Interactive Terminal")} size={70}  /> */}
            <BsGithub className={NavbarStyles['icon']} onMouseOut={() => setSelectedIcon("")} onMouseOver={() => setSelectedIcon("GitHub")} size={70} color="#900fd1" />
        </div>
    )
}


// Design Idea
/*
    Main site is a flashing terminal where visitor can navigate the site with basic terminal commands which they can select :)
    Navbar is similar to a mac doc at the bottom....?
*/

export default Navbar