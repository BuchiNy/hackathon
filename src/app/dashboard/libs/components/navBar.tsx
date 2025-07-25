"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; // A library for conditionally joining class names

// The navigation links from your NavLinks component.
// The icons have been removed to match the new horizontal design.
const links = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Exercise Planner', href: '/dashboard/patients' },
  { name: 'Exercise Catalog', href: '/dashboard/profile' },
];

export default function Navbar() {
  // usePathname hook to get the current URL and set the active link
  const pathname = usePathname();

  return (
    // Main wrapper with top and bottom borders
    <div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 px-4 sm:px-10">
      <nav className="w-full max-w-7xl h-[72px] mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center">
          {/* Using a cleaner text-based logo for the horizontal layout */}
          <span className="text-blue-500 text-3xl mr-2">🏃</span>
          <span className="text-2xl font-bold text-gray-800">Therapix.AI</span>
        </Link>
        
        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                // Base styles for all links
                'py-6 text-base font-medium border-b-4 transition-colors',
                // Conditional styles for the active link
                {
                  'text-blue-500 font-bold border-blue-500': pathname === link.href,
                  'text-gray-600 border-transparent hover:text-blue-500': pathname !== link.href,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Right Side: User Profile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-start">
            {/* The user info from your SideNav footer */}
            <span className="font-medium text-base text-gray-800">Dr. M. Badguy</span>
            <Link href="/logout" className="text-sm text-blue-500 hover:underline">
              Logout
            </Link>
          </div>
        </div>

      </nav>
    </div>
  );
}