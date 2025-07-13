import Image from "next/image";
import ButtonLogout from "../_components/ButtonLogout";

export default function NavSection() {
    return (
        <nav id="sidebar" className="hidden lg:block">
            <div className="w-[240px] min-h-screen bg-white p-8">
                <ul>
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-4 mb-1 hover:bg-[#E0F2F0] hover:text-[#6893a4] px-3 py-2 w-[188px]"
                        >
                            <Image src="/images/dashboard.png" alt="logo dashboard" width={18} height={18} />
                            <span className="text-accent text-[12px]">Dashboard</span>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-4 mb-1 hover:bg-[#E0F2F0] hover:text-[#6893a4] px-3 py-2 w-[188px]"
                        >
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-4">
                                    {/* Icon Write */}
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
        </nav>
    );
}
