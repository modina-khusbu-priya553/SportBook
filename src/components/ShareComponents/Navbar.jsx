"use client";
import React, { useState } from "react";
import { Button, Avatar } from "@heroui/react";
import LogoName from "../../../public/asset/logoname.png";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/app/lib/auth-client";
import NavLink from "./NavLink";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { FaRegCalendarCheck, FaPlusCircle, FaTools } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data } = authClient.useSession();
  const user = data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const profileLinks = [
    { href: "/my-bookings", label: "My Bookings", icon: <FaRegCalendarCheck /> },
    { href: "/add-facility", label: "Add Facility", icon: <FaPlusCircle /> },
    { href: "/manage-facilities", label: "Manage My Facilities", icon: <FaTools /> },
  ];

  const links = (
    <>
      <li>
        <NavLink  href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/all-facilities"}>All Facilities</NavLink>
      </li>
      <li>
        <NavLink href={"/my-bookings"}>My Bookings</NavLink>
      </li>
      <li>
        <NavLink href={"/add-facility"}>Add Facility</NavLink>
      </li>
      <li>
        <NavLink href={"/manage-facilities"}>Manage Facilities</NavLink>
      </li>

    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex max-w-7xl mx-auto items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="flex items-center gap-0.5">
            <Image src={LogoName} alt="Logo" width={150} height={80} className="h-auto w-auto" />
          </div>
        </div>

        {/* desktop nav links */}
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>

        {/* desktop right side */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Profile - dropdown trigger */}
          <div
            className="relative"
            tabIndex={0}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsDropdownOpen(false);
              }
            }}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 cursor-pointer"
            >
              Profile
              <FiChevronDown
                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-separator bg-background shadow-lg py-2 z-50">
                {profileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
                <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-gray-100 w-full text-left"
                  >
                    <FiLogOut />
                    Sign Out
                  </button>
              </div>
            )}
          </div>

          {/* Avatar + Sign Out - always visible if logged in */}
          {user ? (
            <>
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button
                onClick={handleSignOut}
                variant="primary"
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="border-[#22C55E]">
                <Link href="/login" className="text-[#16A34A]">
                  Login
                </Link>
              </Button>
              <Button className="bg-blue-950">
                <Link className="text-white" href="/signUp">
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </header>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}

            <li>
              <span className="font-semibold text-sm text-gray-500">Profile</span>
              <ul className="flex flex-col gap-2 pl-3 mt-2">
                {profileLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2"
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {user ? (
              <>
                <li className="flex items-center gap-2 py-2 border-t border-separator mt-2 pt-4">
                  <Avatar size="sm">
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold truncate">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                </li>
                <li>
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="bg-[#22C55E] hover:bg-[#16A34A] text-white w-full"
                  >
                    Sign Out
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="text-[#16A34A] border-[#22C55E]" href={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="bg-blue-950 p-2 rounded-2xl text-center">
                  <Link className="text-white" href={"/signUp"}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;