import Image from "next/image";
import Content1SVG from "../icons/Content1SVG";
import Content2SVG from "../icons/Content2SVG";
import Chart from "../_components/Chart";

export default function MainSection() {
    return (
        <main className="p-4 lg:p-7 w-full flex flex-col">
            <div className="w-full lg:w-[1140px] h-auto lg:h-[68px] flex flex-col md:flex-row items-start md:items-center md:justify-between bg-white rounded-sm px-6 md:px-8 py-3 mt-2 md:mt-0 mb-6 gap-4">
                <div className="flex items-center gap-3">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask
                                id="mask0_2_429"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                            >
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2_429)">
                                <path
                                    d="M13.25 9V3.5H20.5V9H13.25ZM3.5 12.5V3.5H10.75V12.5H3.5ZM13.25 20.5V11.5H20.5V20.5H13.25ZM3.5 20.5V15H10.75V20.5H3.5Z"
                                    fill="#3AAFA9"
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="text-accent text-[16px]">Dashboard</div>
                </div>
                <div className="flex items-center gap-2 ml-2">
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.04163 5.49996V0.916626H15.0833V5.49996H9.04163ZM0.916626 8.41663V0.916626H6.95829V8.41663H0.916626ZM9.04163 15.0833V7.58329H15.0833V15.0833H9.04163ZM0.916626 15.0833V10.5H6.95829V15.0833H0.916626Z"
                                fill="#3AAFA9"
                            />
                        </svg>
                    </div>
                    <div>
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
                            className="lucide lucide-chevron-right-icon lucide-chevron-right w-[20px] text-gray-400"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </div>
                    <div className="text-accent text-[14px]">Dashboard</div>
                </div>
            </div>
            <div id="statistics" className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
                {/* Statistic Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:col-span-1 w-full">
                    {/* Statistic Card 1 */}
                    <div className="w-full h-[173px] md:h-[133px] flex flex-col sm:flex-row-reverse justify-between items-center sm:items-start bg-white p-4 sm:p-5 rounded-lg md:items-center md:justify-center md:px-10 lg:items-center lg:justify-center">
                        <div className="mb-4 w-[60px] h-[60px] sm:mb-0 sm:ml-4 flex-shrink-0 bg-white">
                            {/* SVG */}
                            <Content1SVG />
                        </div>

                        <div className="flex flex-col gap-2 text-center sm:text-left items-center sm:items-start flex-1">
                            <div className="text-[20px] sm:text-[22px] lg:text-[26px] font-semibold text-[#414853]">
                                25
                            </div>
                            <div className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#ADB1BB]">
                                Total Publish
                            </div>
                        </div>
                    </div>

                    {/* Statistic Card 2 */}
                    <div className="w-full h-[173px] md:h-[133px] flex flex-col sm:flex-row-reverse justify-between items-center sm:items-start bg-white p-4 sm:p-5 rounded-lg md:items-center md:justify-center md:px-10 lg:items-center lg:justify-center">
                        <div className="mb-4 w-[60px] h-[60px] sm:mb-0 sm:ml-4 flex-shrink-0">
                            {/* SVG */}
                            <Content2SVG />
                        </div>

                        <div className="flex flex-col gap-2 text-center sm:text-left items-center sm:items-start flex-1">
                            <div className="text-[20px] sm:text-[22px] lg:text-[26px] font-semibold text-[#414853]">
                                298
                            </div>
                            <div className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#ADB1BB]">Total Views</div>
                        </div>
                    </div>
                </div>

                {/* Chart */}
                <div className="w-full lg:w-[829px] h-[290px] lg:col-span-3 bg-white rounded-md flex items-center justify-center lg:ml-4">
                    <Chart />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
                {/* Last Drafts */}
                <div className="bg-white p-4 lg:p-6 rounded-md h-auto lg:h-[336px]">
                    <p className="text-sm font-semibold text-accent">
                        Last Drafts{" "}
                        <span className="inline-flex bg-primary p-1 rounded-lg text-white text-[10px] ml-2">20</span>
                    </p>

                    <div className="flex items-start gap-4 mt-4 relative">
                        <div className="flex flex-col items-center relative w-[120px] h-auto sm:w-[190px] sm:h-[90px] overflow-hidden flex-shrink-0 mt-2 md:mt-0 lg:mt-1">
                            <div className="relative w-full h-[60px] sm:h-[90px]">
                                <Image
                                    src="/images/jababeka.png"
                                    alt="Jababeka"
                                    fill
                                    className="object-cover sm:object-contain"
                                />
                            </div>

                            {/* Tombol ... hanya di mobile */}
                            <p className="block md:hidden text-left w-full py-1">...</p>
                        </div>

                        <div className="flex flex-col gap-2 min-w-0">
                            <h1 className="text-[12px] text-[#414853] font-semibold">
                                Transforming Jababeka Residence Marketing <br />
                                Gallery with Cutting-Ed...
                            </h1>
                            <p className="text-[10px] text-[#53575B] line-clamp-2">
                                Jababeka Residence, a leading property developer, is committed to enhancing the visit...
                            </p>
                            <p className="text-[10px] text-[#53575B]">20 May 2025</p>
                        </div>

                        {/* Tablet/Desktop: icon kanan atas */}
                        <div className="absolute top-0 right-0 hidden sm:block bg-transparent p-1">...</div>
                    </div>

                    <hr className="mt-4 text-gray-200" />

                    <div className="flex items-start gap-4 mt-4 relative">
                        <div className="flex flex-col items-center relative w-[120px] h-auto sm:w-[190px] sm:h-[90px] overflow-hidden flex-shrink-0 mt-2 md:mt-0 lg:mt-1">
                            <div className="relative w-full h-[60px] sm:h-[90px]">
                                <Image
                                    src="/images/room.png"
                                    alt="Room"
                                    fill
                                    className="object-cover sm:object-contain"
                                />
                            </div>

                            {/* Tombol ... hanya di mobile */}
                            <p className="block md:hidden text-left w-full py-1">...</p>
                        </div>

                        <div className="flex flex-col gap-2 min-w-0">
                            <h1 className="text-[12px] text-[#414853] font-semibold">
                                Transforming Jababeka Residence Marketing <br />
                                Gallery with Cutting-Ed...
                            </h1>
                            <p className="text-[10px] text-[#53575B] line-clamp-2">
                                Jababeka Residence, a leading property developer, is committed to enhancing the visit...
                            </p>
                            <p className="text-[10px] text-[#53575B]">20 May 2025</p>
                        </div>

                        {/* Tablet/Desktop: icon kanan atas */}
                        <div className="absolute top-0 right-0 hidden sm:block bg-transparent p-1">...</div>
                    </div>
                </div>

                {/* Last Projects */}
                <div className="bg-white p-4 lg:p-6 rounded-md h-auto lg:h-[336px]">
                    <p className="text-sm font-semibold text-accent">
                        Last Projects{" "}
                        <span className="inline-flex bg-primary p-1 rounded-lg text-white text-[10px] ml-2">20</span>
                    </p>

                    <div className="flex items-start gap-4 mt-4 relative">
                        <div className="flex flex-col items-center relative w-[120px] h-auto sm:w-[190px] sm:h-[90px] overflow-hidden flex-shrink-0 mt-2 md:mt-0 lg:mt-1">
                            <div className="relative w-full h-[60px] sm:h-[90px]">
                                <Image
                                    src="/images/jababeka.png"
                                    alt="Jababeka"
                                    fill
                                    className="object-cover sm:object-contain"
                                />
                            </div>

                            {/* Tombol ... hanya di mobile */}
                            <p className="block md:hidden text-left w-full py-1">...</p>
                        </div>

                        <div className="flex flex-col gap-2 min-w-0">
                            <h1 className="text-[12px] text-[#414853] font-semibold">
                                Transforming Jababeka Residence Marketing <br />
                                Gallery with Cutting-Ed...
                            </h1>
                            <p className="text-[10px] text-[#53575B] line-clamp-2">
                                Jababeka Residence, a leading property developer, is committed to enhancing the visit...
                            </p>
                            <p className="text-[10px] text-[#53575B]">20 May 2025</p>
                        </div>

                        {/* Tablet/Desktop: icon kanan atas */}
                        <div className="absolute top-0 right-0 hidden sm:block bg-transparent p-1">...</div>
                    </div>

                    <hr className="mt-4 text-gray-200" />

                    <div className="flex items-start gap-4 mt-4 relative">
                        <div className="flex flex-col items-center relative w-[120px] h-auto sm:w-[190px] sm:h-[90px] overflow-hidden flex-shrink-0 mt-2 md:mt-0 lg:mt-1">
                            <div className="relative w-full h-[60px] sm:h-[90px]">
                                <Image
                                    src="/images/room.png"
                                    alt="room2"
                                    fill
                                    className="object-cover sm:object-contain"
                                />
                            </div>

                            {/* Tombol ... hanya di mobile */}
                            <p className="block md:hidden text-left w-full py-1">...</p>
                        </div>

                        <div className="flex flex-col gap-2 min-w-0">
                            <h1 className="text-[12px] text-[#414853] font-semibold">
                                Transforming Jababeka Residence Marketing <br />
                                Gallery with Cutting-Ed...
                            </h1>
                            <p className="text-[10px] text-[#53575B] line-clamp-2">
                                Jababeka Residence, a leading property developer, is committed to enhancing the visit...
                            </p>
                            <p className="text-[10px] text-[#53575B]">20 May 2025</p>
                        </div>

                        {/* Tablet/Desktop: icon kanan atas */}
                        <div className="absolute top-0 right-0 hidden sm:block bg-transparent p-1">...</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
