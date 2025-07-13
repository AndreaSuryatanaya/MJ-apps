"use client";

import Image from "next/image";

import ButtonLogout from "./_components/ButtonLogout";
import { useState } from "react";
import AvatarSVG from "./icons/AvatarSVG";
import LogoSVG from "./icons/LogoSVG";
import MainSection from "./sections/MainSection";
import NavSection from "./sections/NavSection";

export default function DashboardPage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <section>
            <header className="bg-white p-4 lg:p-7 flex h-[80px] lg:h-[88px] w-full lg:w-[1440px] items-center justify-between">
                <div>
                    <LogoSVG />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                name="search-item"
                                id="search-item"
                                className="pl-10 pr-3 py-2 border h-[32px] text-[12px] border-gray-300 rounded-md placeholder-gray-500 text-gray-900  "
                                placeholder="Search..."
                            />
                        </div>
                        <div>
                            <div className="flex items-center space-x-2">
                                <div
                                    id="border-avatar"
                                    className="lg:border-hidden flex items-center gap-2 lg:gap-4 border-2 rounded-full border-gray-200 px-2 lg:px-4 py-1 lg:py-2"
                                >
                                    <button
                                        className="block lg:hidden"
                                        id="mobile-menu-button"
                                        onClick={toggleMobileMenu}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-menu-icon lucide-menu text-[#414853]"
                                        >
                                            <path d="M4 12h16" />
                                            <path d="M4 18h16" />
                                            <path d="M4 6h16" />
                                        </svg>
                                    </button>
                                    <div>
                                        <AvatarSVG />
                                    </div>
                                </div>

                                <div className="hidden lg:block">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-down-icon lucide-chevron-down text-gray-500"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="flex" id="dashboard-content">
                {/* Mobile Sidebar Overlay */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40 lg:hidden"
                        onClick={toggleMobileMenu}
                    ></div>
                )}

                {/* Mobile Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } w-[240px]`}
                >
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                            <svg
                                width="107"
                                height="38"
                                viewBox="0 0 107 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <rect width="107" height="38" fill="url(#pattern0_2_442)" />
                                {/* Same pattern as in header */}
                            </svg>
                            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m18 6-12 12" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-4 mb-1 hover:bg-[#E0F2F0] hover:text-[#6893a4] px-3 py-2 w-[188px]"
                                    onClick={toggleMobileMenu}
                                >
                                    <Image src="/images/dashboard.png" alt="logo dashboard" width={18} height={18} />
                                    <span className="text-accent text-[12px]">Dashboard</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-4 mb-1 hover:bg-[#E0F2F0] hover:text-[#6893a4] px-3 py-2 w-[188px]"
                                    onClick={toggleMobileMenu}
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <div className="flex items-center gap-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-pencil-icon lucide-pencil"
                                            >
                                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                                <path d="m15 5 4 4" />
                                            </svg>
                                            <span className="text-accent text-[12px]">Write</span>
                                        </div>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-down-icon lucide-chevron-down text-accent"
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-4 mb-1 hover:bg-[#E0F2F0] hover:text-[#6893a4] px-3 py-2 w-[188px]"
                                    onClick={toggleMobileMenu}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-notepad-text-icon lucide-notepad-text"
                                    >
                                        <path d="M8 2v4" />
                                        <path d="M12 2v4" />
                                        <path d="M16 2v4" />
                                        <rect width="16" height="18" x="4" y="4" rx="2" />
                                        <path d="M8 10h6" />
                                        <path d="M8 14h8" />
                                        <path d="M8 18h5" />
                                    </svg>
                                    <span className="text-accent text-[12px]">Published</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-4 mb-1 hover:bg-[#E0F2F0] hover:text-[#6893a4] px-3 py-2 w-[188px]"
                                    onClick={toggleMobileMenu}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-folder-icon lucide-folder"
                                    >
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                                    </svg>
                                    <span className="text-accent text-[12px]">Drafts</span>
                                </a>
                            </li>
                        </ul>
                        <ButtonLogout />
                    </div>
                </div>
                <NavSection />
                <MainSection />
            </div>
        </section>
    );
}
