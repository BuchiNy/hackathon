//the layout for the dashboard here.

import SideNav from "./libs/components/sidenav-link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-surface-100">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-white text-surface-900">
        {children}
      </div>
    </div>
  );
}