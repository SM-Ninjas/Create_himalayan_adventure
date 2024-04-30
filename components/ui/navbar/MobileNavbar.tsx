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
import { RiContactsBookFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";
import Logo from "../Logo";

function MobileNavbar() {
    // const router = useRouter()
    const [toggleNavBar, settoggleNavBar] = useState(false)
    const handleNavToggle = () => {
        settoggleNavBar(!toggleNavBar)
    }
    function handleCloseToggleOnClick() {

        settoggleNavBar(false)
    }
    return (
        <div className='fixed top-0 left-0 right-0  backdrop-blur-xl p-2 h-18 block md:hidden z-[999]'>
            <div className='block md:hidden'>
                <div className='flex justify-between items-center p-2'>
                    <Link href="/">
                        <Logo />
                    </Link>
                    {toggleNavBar ? <AiOutlineMenuFold size={45} color='#000' onClick={handleNavToggle} /> : <AiOutlineMenuUnfold color='#000' size={45} onClick={handleNavToggle} />}
                </div>

                {toggleNavBar &&
                    <div className='flex flex-col justify-center items-center gap-4  bg-gray-800 opacity-90 text-white z-[9999] rounded-[4px]'>
                        <Link className='w-full hover:border border-black  flex items-center  gap-2 text-xl p-2' onClick={handleCloseToggleOnClick} href="/">
                            <IoMdHome />
                            home</Link>
                        <Link className='w-full hover:border border-black flex items-center text-xl gap-2 hover:border-black p-2' onClick={handleCloseToggleOnClick} href="/tour">
                            <MdTour />
                            tour</Link>
                        <Link className='flex items-center text-xl w-full hover:border border-black p-2 gap-2 ' onClick={handleCloseToggleOnClick} href="/trek">
                            <TbTrekking />
                            trek</Link>
                        <Link className='flex items-center text-xl w-full hover:border border-black p-2 gap-2' onClick={handleCloseToggleOnClick} href="/blogs">
                            <FaBlogger />
                            blog</Link>
                        <Link className='flex items-center text-xl w-full hover:border border-black  p-2 gap-2' onClick={handleCloseToggleOnClick} href="/login">
                            <CgProfile />
                            Profile</Link>
                        <Link className='flex items-center text-xl w-full hover:border border-black p-2 gap-2' onClick={handleCloseToggleOnClick} href="/login">
                            <IoLogIn />
                            login</Link>
                        <Link className='flex items-center text-xl w-full hover:border border-black p-2 gap-2' onClick={handleCloseToggleOnClick} href="/contact" >
                            <RiContactsBookFill />
                            contact</Link>
                    </div>}
            </div>

        </div>
    )
}

export default MobileNavbar
