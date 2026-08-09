"use client";
import React from "react";
import { useState } from "react";
import { Button, Avatar } from "@heroui/react";
import LogoName from "../../public/asset/logoname.png";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/app/lib/auth-client";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/all-facilities"}>All Facilities</NavLink>
      </li>
      <li>
        <NavLink href={"/my-bookings"}></NavLink>
      </li>
      <li>
        <NavLink href={"//add-facility"}>Add Facility</NavLink>
      </li>
      <li>
        <NavLink href={"/manage-facilities"}></NavLink>
      </li>

      <li>
        <NavLink href={"/"}></NavLink>
      </li>
    </>
  );

  const { data } = authClient.useSession();
  const user = data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

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
              className="h-auto w-auto"
            />
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>
        <div className="hidden items-center gap-4 md:flex">
          <span>
            <Link href={"/profile"}>Profile</Link>
          </span>
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
                <Link className=" text-white" href="/signUp">
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Avatar>
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </li>
                <li>
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
                  >
                    Sign Out
                  </Button>
                </li>{" "}
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="text-[#16A34A] border-[#22C55E]"
                    href={"/login"}
                  >
                    Login
                  </Link>
                </li>
                <li className="bg-blue-950 p-2 rounded-2xl text-center">
                  <Link className=" text-white" href={"/signUp"}>
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
