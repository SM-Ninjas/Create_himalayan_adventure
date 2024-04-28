import { Divider } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdTour } from "react-icons/md";
import { TbTrekking } from "react-icons/tb";
import { IoLogIn } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiSolidContact } from "react-icons/bi";
import { FaBlogger } from "react-icons/fa";
//import { useRouter } from 'next/router';




function MobileNavbar() {
    // const router = useRouter()
    const [toggleNavBar, settoggleNavBar] = useState(false)
    const handleNavToggle = () => {
        settoggleNavBar(!toggleNavBar)

    }
    return (
        <div>
            {toggleNavBar ? <AiOutlineMenuFold size={40} onClick={handleNavToggle} /> : <AiOutlineMenuUnfold size={40} onClick={handleNavToggle} />}

            {toggleNavBar &&
                <div className='flex flex-col'>
                    <Link className='flex items-center text-xl' href="/">
                        <IoMdHome />
                        home</Link>
                    <Link className='flex items-center text-xl' href="/tour">
                        <MdTour />
                        tour</Link>
                    <Link className='flex items-center text-xl' href="/trek">
                        <TbTrekking />
                        trek</Link>
                    <Link className='flex items-center text-xl' href="/blog">
                        <FaBlogger />
                        blog</Link>
                    <Link className='flex items-center text-xl' href="/login">
                        <CgProfile />
                        Profile</Link>
                    <Link className='flex items-center text-xl' href="/login">
                        <IoLogIn />
                        login</Link>
                    <Link className='flex items-center text-xl' href="/contact" >
                        <BiSolidContact />
                        contact</Link>
                </div>}

        </div>
    )
}

export default MobileNavbar
