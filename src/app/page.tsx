import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        //Landing page with CTA to the login page
        <Link
            href="/dashboard"
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500"
          >
            <span>Dashboard</span> <ArrowForwardIcon className="ml-2 w-5 h-5" />
          </Link>
      </main>
    </div>
  );
}
