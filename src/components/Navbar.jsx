'use client'
import React from 'react';
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import LogoName from '../../public/asset/logoname.png';
import Image from 'next/image';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex container mx-auto  items-center justify-between p-4">
            <div className="flex items-center gap-4">
            <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span className="sr-only">Menu</span>
                <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                {isMenuOpen ? (
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
                </svg>
            </button>
            <div className="flex items-center gap-0.5">
                
                <Image 
                    src={LogoName}
                    alt="Logo"
                    width={150}
                    height={80}
                />
            </div>
            </div>
            <ul className="hidden items-center gap-4 md:flex">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/all-facilities">All Facilities</Link>
            </li>
            <li>
                <Link href="/my-bookings" className="font-medium" aria-current="page">
                My Bookings
                </Link>
            </li>
            <li>
                <Link href="/add-facility">Add Facility</Link>
            </li>
            </ul>
            <div className="hidden items-center gap-4 md:flex">
            <Button variant="outline"><Link href="/login">Login</Link></Button>
            <Button className="bg-blue-950">Sign Up</Button>
            </div>
        </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>

            <li>
              <Link href="/all-facilities" className="block py-2">
                All Facilities
              </Link>
            </li>
            <li>
              <Link href="/my-bookings" className="block py-2">
                My Bookings
              </Link>
            </li>
            <li>
              <Link href="/add-facility" className="block py-2 font-medium text-accent">
                Add Facility
              </Link>
            </li>
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="/login" className="block py-2">
                Login
              </Link>
              <Button className="w-full">Sign Up</Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
    );
};

export default Navbar;