import React from 'react'
import Link from "next/link";
import Mainmenuitems from './Mainmenuitems'


export default function Header() {

    return (
        <div className="relative w-full bg-white dark:bg-slate-900 dark:text-white">
            <div className="mx-auto flex flex-wrap max-w-7xl items-center justify-between px-4 py-2 ">
                <div className="inline-flex items-center space-x-2">
                    <Link href="/" className="inline-block w-full max-w-[150px]">
                    <img
                      src="https://res.cloudinary.com/shaidislam/image/upload/v1704099883/apki3mddt2s8btqwr49s.png"
                      className="mr-3 h-12 dark:hidden" 
                      alt="Logo"
                  />
                  <img
                      src="https://res.cloudinary.com/shaidislam/image/upload/v1704099884/bsaiaiaoisor2lkwgdi6.png"
                      className="mr-3 h-12 hidden dark:block" 
                      alt="Logo"
                  />
                    </Link>
                </div>
                <Mainmenuitems />

            </div>
        </div>
    );
}