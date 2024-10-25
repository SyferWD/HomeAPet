'use client';
import Link from 'next/link'
import {useState} from 'react';
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { CustomButton } from '.';
import { navbar_links } from '@/constants';
import { useAuth } from '@/app/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const NavBar = () => {

    const router = useRouter();

    // Using a useState as a boolean to toggle between the menu icon / cross icon for smaller viewports
    const [isOpen, setIsOpen] = useState(false);

    const { isLoggedIn, login, logout } = useAuth(); 

    return (
        <header className='w-full sticky top-0 z-20 bg-white border border-gray-200'>
            <nav className='max-w-screen-2xl mx-auto flex flex-wrap justify-between items-end p-2 md:p-6'>
                
                {/* Logo */}
                <Link 
                    href="/"
                    className=''
                >
                    <h1 className='font-poppins font-extrabold text-2xl md:text-5xl hover:translate-y-[-5px]'>
                        HomeAPet
                    </h1>    
                </Link>

                {/* Login button & Dropdown Menu for smaller viewports */}
                <div className='flex gap-0.5 lg:order-2 items-center'>
                    {/* <Link href="/login-register"> */}
                    <CustomButton 
                        content={isLoggedIn ? "Logout" : "Login / Register"}
                        btnStyle={` w-full md:h-full text-md rounded-lg  
                                ${isLoggedIn ? "text-white bg-red-500 hover:bg-red-700" 
                                : "text-black bg-white border-2 border-black hover:bg-black hover:text-white "}`}
                        handleClick={isLoggedIn ? logout : () => {router.push("/login-register")}}
                    />
                    {/* </Link> */}
                    {/* Dropdown Menu */}
                    <div className='flex lg:hidden justify-center items-center '>
                        <button 
                            type='button'
                            onClick={() => setIsOpen(!isOpen)}
                            className='flex items-center rounded-2xl'
                        >
                            <HiMenu 
                                className={`w-6 h-6 md:w-12 md:h-12 text-black ${isOpen ? "hidden" : "block"}`}
                            />
                            <RxCross2 
                                className={`w-6 h-6 md:w-12 md:h-12 text-black ${isOpen ? "block" : "hidden"}`}
                            />

                        </button>
                    </div>
                </div>

                {/* Navigational Links */}
                <div className={`w-full lg:w-auto lg:order-1 lg:flex-grow ${isOpen ? "absolute left-0 top-full w-full flex flex-col bg-slate-200" : "hidden lg:block"}`}>
                    <ul className='text-[26px] flex flex-col lg:flex-row justify-start lg:mt-0 lg:ml-12 lg:text-[20px] lg:bg-white rounded-b-lg'>
                    {navbar_links.map((link) => (
                        // Check if isLoggedIn is true or if the link.title is not "Dashboard"
                        (isLoggedIn || link.title !== "Dashboard") && (
                            <li className='border-b border-slate-400 lg:border-0 text-center hover:translate-y-[-5px]' key={link.title}>
                            <Link href={link.url} className={`mx-4 ${link.textColour}`}>
                                {link.title}
                            </Link>
                            </li>
                        )
                    ))}
                    </ul>
                </div>

                
            </nav>
        </header>
    )
}

export default NavBar