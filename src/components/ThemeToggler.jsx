"use client";
import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';



const ThemeToggler = () => {
    const {theme, setTheme} = useTheme()

  return (
    <div>
        <button 
        className='border-0 hover:bg-transparent relative p-[6px]'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
            <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 top-[6px]'/>
        </button>
    </div>
  )
}

export default ThemeToggler