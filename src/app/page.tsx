"use client";

import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { configureAmplify } from "../amplify-config";

configureAmplify();

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-blue-50 p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">
          Welcome to <span className="text-blue-500 mr-2">🏃</span>
          <span className="font-bold text-gray-800">Therapix.AI</span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-700">
          Empower your recovery with guided, personalized medical exercise routines.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500 transition"
        >
          <span className="text-base font-medium">Login</span>
          <ArrowForwardIcon className="ml-2 h-5 w-5" />
        </Link>
      </main>
    </div>
  );
}
