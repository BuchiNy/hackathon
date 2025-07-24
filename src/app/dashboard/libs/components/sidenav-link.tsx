import Link from 'next/link';
import NavLinks from '../components/nav-links';

export default function SideNav() {
  return (
    <aside className="flex h-full flex-col bg-[#EDEDED] p-4 text-gray-800 shadow-md rounded-r-xl w-full md:max-w-[280px] transition-all">
      {/* Logo Section */}
      <Link href="/" className="mb-8 block">
        <div className="flex h-16 md:h-24 w-full items-center justify-center rounded-lg bg-[#D9D9D9]">
          <span className="text-lg md:text-xl font-bold text-gray-700 tracking-wide">
            Logo
          </span>
        </div>
      </Link>

      {/* Navigation + Footer Section */}
      <nav className="flex flex-1 flex-col justify-between">
        <div className="space-y-2">
          <NavLinks />
        </div>

        {/* Optional Footer or Sidebar Note */}
        <div className="mt-6 hidden md:block rounded-lg bg-[#D9D9D9] px-4 py-3">
          <p className="text-xs text-gray-600 leading-snug">
            Logged in as<br />
            <span className="font-medium text-gray-800">Dr. M. Badguy</span>
          </p>
        </div>
      </nav>
    </aside>
  );
}
