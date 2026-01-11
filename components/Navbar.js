'use client'; // This directive makes the component a Client Component, allowing the use of useState.

import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn';   

const Navbar = () => {
    // State to control the Sheet's open/close state
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <nav className="flex items-center p-4  bg-background/50 sticky top-0 z-50 border-b backdrop-blur">
            {/* Left Section: Logo */}
            <div className="flex items-center shrink-0">
                <Link href="/" className="font-semibold text-xl tracking-tight">
                    AkashBlogs
                </Link>
            </div>

            {/* Desktop Navigation Links & Auth Buttons (visible on large screens) */}
            <div className="hidden lg:flex items-center space-x-4 ml-auto">
                <Link href="/" className="hover:text-gray-400 hover:scale-105 transition-transform duration-75">
                    Home
                </Link>
                <Link href="/blog" className="hover:text-gray-400 hover:scale-105 transition-transform duration-75">
                    Blog
                </Link>
                <Link href="/about" className="hover:text-gray-400 hover:scale-105 transition-transform duration-75">
                    About
                </Link>
                <Link href="/contact" className="hover:text-gray-400 hover:scale-105 transition-transform duration-75">
                    Contact
                </Link>
                {/* Auth Buttons for Desktop */}
                <div className="flex gap-2 ml-4"> 
                    <Button variant="outline" className='mx-1'>Login</Button>
                    <Button className='mx-1'>Signup</Button>
                </div>
                <ModeToggle />
            </div>

            {/* Mobile Menu Toggle Button (visible on small screens) */}
            <div className="ml-auto block lg:hidden">
                {/* Connect Sheet to the local isOpen state */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    {/* Use asChild to pass the button as the trigger.
                        SheetTrigger will automatically handle the onClick to toggle the sheet. */}
                    <SheetTrigger asChild> 
                        <button
                            className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-600 hover:text-black hover:border-black tracking-tight"
                            aria-label="Toggle navigation"
                        >
                            {/* Hamburger Icon */}
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </SheetTrigger>
                    {/* Sheet content for the mobile menu */}
                    <SheetContent side="right">
                        <SheetHeader className="text-left">
                            <SheetTitle>Navigation</SheetTitle>
                            <SheetDescription>
                                Explore our blog posts and learn more.
                            </SheetDescription>
                            <ModeToggle />
                        </SheetHeader>
                        <div className="flex flex-col py-2 gap-y-2">
                            {/* Mobile Navigation Links - close Sheet on click */}
                            <Link href="/" className="block  hover:text-gray-800 px-4" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                            <Link href="/blog" className="block  hover:text-gray-800 px-4" onClick={() => setIsOpen(false)}>
                                Blog
                            </Link>
                            <Link href="/about" className="block  hover:text-gray-800 px-4" onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                            <Link href="/contact" className="block  hover:text-gray-800 px-4" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>
                        </div>
                        {/* Auth Buttons for Mobile */}
                        <div className='flex flex-col py-2 gap-y-2 border-t mt-4 pt-4 px-4'>
                            <Button variant="outline" className='w-full' onClick={() => setIsOpen(false)}>Login</Button>
                            <Button className='w-full' onClick={() => setIsOpen(false)}>Signup</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

        </nav>
    );
};

export default Navbar;