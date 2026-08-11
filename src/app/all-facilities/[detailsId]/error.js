"use client";

import Link from "next/link";
import React from "react";

const ErrorPage = ({ error, reset }) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-2xl text-center">

        {/* Decorative Elements */}
        <div className="absolute -top-10 left-5 h-24 w-24 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-10 right-5 h-32 w-32 rounded-full bg-green-200/40 blur-3xl" />

        {/* Error Card */}
        <div className="relative rounded-3xl border border-emerald-100 bg-white/90 p-8 shadow-xl backdrop-blur-md sm:p-12">

          {/* Error Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-4xl">
            ⚠️
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Something Went Wrong
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            Something unexpected happened while loading this page.
            Please try again or return to the home page.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Try Again */}
            <button
              onClick={() => reset()}
              className="w-full rounded-xl bg-[#22C55E]  px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-900  transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl sm:w-auto"
            >
              Try Again
            </button>

            {/* Back Home */}
            <Link
              href="/"
              className="w-full rounded-xl 
              border border-blue-950 bg-white px-6 py-3.5 
              text-base font-semibold text-blue-950  transition-all 
              duration-300 hover:-translate-y-1 hover:bg-blue-950 hover:text-white sm:w-auto"
            >
              Back to Home
            </Link>
          </div>

          {/* Footer Text */}
          <p className="mt-8 text-sm text-slate-400">
            SportNest — Find your place. Play your game.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;