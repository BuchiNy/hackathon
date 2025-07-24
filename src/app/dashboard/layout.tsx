//the layout for the dashboard here.

import DashboardLayoutClient from "./DashboardLayoutClient";
;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
    <div className="bg-white">
        {/* {children} */}
        <DashboardLayoutClient>{children}</DashboardLayoutClient>
      </div>
    </div>
  );
}
