"use client"
import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react';
import useAuth from "@/context/useAuth";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler"


const Mainmenuitems = () => {
    const { authStatus } = useAuth();
    const pathname = usePathname()

    //  mobile menu 
    const [hidden, setHidden] = useState("max-h-0")
    const handelclick = () => {
        if(hidden != "max-h-40"){
            setHidden("max-h-40")
        }else{
            setHidden("max-h-0")
        }
    }    
    
    useEffect(() => {
        setHidden("max-h-0")
    }, [])
    
    const ulclick = () => {
        setTimeout(() => {
            setHidden("max-h-0")
            }, 100);   
    }
    
    
    const menuItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "About",
            slug: "/about",
            active: true
        },
        {
            name: "Contact",
            slug: "/contact",
            active: true
        },
        {
            name: "Profile",
            slug: "/profile",
            active: authStatus,
        },
    ];
  return (
     <>
            <div className="flex justify-end items-center md:order-2" >   

                <div className="space-x-2 lg:block">
                    { authStatus && (
                        <>  
                    <Link href="/logout" className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none">
                        Logout
                    </Link>             
                        </>
                    )}
                        { !authStatus && (
                                <>
                            <Link href="/login" className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none">
                                Login
                            </Link>                    
                            <Link href="/signup" className="text-gray-800 dark:text-white font-medium text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-2 lg:mr-0 focus:outline-none">
                                Signup
                            </Link> 
                                </>
                        )}
                </div>
                <ThemeToggler />
                <div className={`md:hidden ${hidden}p`}>
                    <button 
                    className='border-0 hover:bg-transparent relative p-[6px]'
                    onClick={handelclick}>
                        <MenuIcon className='h-[1.2rem] w-[1.2rem]'/>
                        <XIcon className='absolute h-[1.2rem] w-[1.2rem] top-[6px]'/>
                    </button>
                </div>                 
            </div>  
            <div className={`md:!max-h-none md:!overflow-hidden w-full overflow-hidden md:flex md:items-center transition-all md:w-auto mobilemenu ${hidden}`}>
                <div className="text-sm md:flex-grow">
                        <ul onClick={ulclick} className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {menuItems.map((item) => (
                                item.active ? (
                                <li key={item.name}>
                                    <Link href={item.slug} key={item.slug} className={`${pathname === item.slug ? 'text-orange-700 dark:text-orange-300' : '' } text-gray-800 dark:text-white block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-black/10 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                                ) : null
                            ))}
                        </ul>
                </div>
            </div>        
     </>   
  )
}

export default Mainmenuitems