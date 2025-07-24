//the layout for the dashboard here.


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
         <div className="w-full flex-none md:w-64">
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
       

    );
  }