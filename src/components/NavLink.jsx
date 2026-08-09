import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {

     const pathname = usePathname();

    const isActive = href === pathname;
    return <Link
      href={href}
      className={`py-1.5 px-3 rounded-lg text-sm font-medium ${
        isActive
          ? "bg-blue-950 text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-blue-950"
      }`}
    >
      {children}
    </Link>
};

export default NavLink;