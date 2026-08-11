import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center px-5 py-10 md:py-20">
            <div className="relative w-full max-w-3xl text-center">

                {/* Decorative Background Elements */}
                <div className="absolute -top-10 left-10 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl" />
                <div className="absolute -bottom-10 right-10 h-32 w-32 rounded-full bg-green-200/40 blur-3xl" />

                {/* 404 Card */}
                <div className="relative rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-xl backdrop-blur-md sm:p-12 md:p-16">

                    {/* Small Badge */}
                    <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Oops! Page not found
                    </div>

                    {/* 404 */}
                    <h1 className="text-[100px] font-black leading-none tracking-tight text-emerald-600 sm:text-3xl md:text-9xl">
                        404
                    </h1>

                    {/* Heading */}
                    <h2 className="mt-4 text-xl font-bold tracking-tight text-blue-950 sm:text-lg md:text-3xl">
                        Looks like you missed the field!
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        The page you are looking for doesn&apos;t exist or may have
                        been moved. Let&apos;s get you back to the game.
                    </p>

                    {/* Button */}
                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 
                            rounded-xl border border-blue-950 py-4 px-2 md:px-7 md:py-3.5 text-base font-semibold text-blue-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-950 hover:text-white  hover:shadow-xl"
                        >
                            <span>←</span>
                            Back to Home
                        </Link>
                    </div>

                    {/* Bottom Text */}
                    <p className="mt-8 text-sm text-slate-400">
                        SportNest — Find your place. Play your game.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default NotFoundPage;