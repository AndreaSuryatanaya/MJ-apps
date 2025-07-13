"use client";

import React, { useEffect, useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

const Chart = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<ChartJS | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext("2d");
            if (!ctx) return;

            ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

            chartInstance.current = new ChartJS(ctx, {
                type: "bar",
                data: {
                    labels: [
                        "Jan\n2025",
                        "Feb\n2025",
                        "Mar\n2025",
                        "Apr\n2025",
                        "Mei\n2025",
                        "Jun\n2025",
                        "Jul\n2025",
                        "Agu\n2025",
                        "Sep\n2025",
                        "Okt\n2025",
                        "Nov\n2025",
                        "Des\n2025",
                    ],
                    datasets: [
                        {
                            label: "News",
                            data: [85, 145, 170, 125, 85, 260, 235, 140, 175, 170, 205, 170],
                            backgroundColor: "#5EEAD4",
                            borderRadius: 0,
                            borderSkipped: false,
                        },
                        {
                            label: "Projects",
                            data: [90, 95, 175, 140, 165, 215, 290, 175, 210, 205, 240, 175],
                            backgroundColor: "#E5E7EB",
                            borderRadius: 0,
                            borderSkipped: false,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            titleColor: "white",
                            bodyColor: "white",
                            cornerRadius: 0,
                            callbacks: {
                                label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
                            },
                        },
                    },
                    layout: {
                        padding: { top: 8, right: 8, bottom: 8, left: 8 },
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            border: { display: false },
                            ticks: {
                                color: "#6B7280",
                                font: { size: 10 },
                                maxRotation: 0,
                                minRotation: 0,
                                callback: function (value) {
                                    const labels = (this.chart?.data?.labels as string[]) || [];
                                    return labels[value as number]?.split("\n");
                                },
                            },
                        },
                        y: {
                            beginAtZero: true,
                            max: 350,
                            grid: { color: "#F3F4F6" },
                            border: { display: false },
                            ticks: {
                                color: "#6B7280",
                                font: { size: 10 },
                                stepSize: 50,
                            },
                        },
                    },
                },
            });
        }

        return () => {
            chartInstance.current?.destroy();
        };
    }, []);

    return (
        <div className="bg-transparent p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm md:text-base font-medium text-accent">Analytics Summary</h2>
                <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1.5 pr-8 text-sm text-gray-700">
                        <option value="years">Years</option>
                        <option value="months">Months</option>
                        <option value="days">Days</option>
                    </select>
                    <svg
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-teal-300 rounded"></div>
                    <span className="text-xs text-gray-600">News</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-200 rounded"></div>
                    <span className="text-xs text-gray-600">Projects</span>
                </div>
            </div>

            <div className="w-[310px] md:w-[650px] lg:w-[800px] md:h-[170px] lg:h-[173px]">
                <canvas ref={chartRef} className="w-full h-full"></canvas>
            </div>
        </div>
    );
};

export default Chart;
