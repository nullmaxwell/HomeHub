'use client'
import { useState, useEffect } from "react";

export default function Clock() {

    const [time, setTime] = useState<Date>();
    const [isUTC, setIsUTC] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const toggleTimezone = () => {
        setIsUTC(!isUTC);
    };
    // Set Local formatted time
    const LocalTime = (time: any) => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        const offsetHours = Math.floor(time.getTimezoneOffset() / 60);

        return `${hours}:${minutes}:${seconds} UTC +${offsetHours}`;
    };

    // Set UTC formatted time
    const UTCtime = (time: any) => {
        const hours = time.getUTCHours().toString().padStart(2, '0');
        const minutes = time.getUTCMinutes().toString().padStart(2, '0');
        const seconds = time.getUTCSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };


    const formattedTime = time ? (isUTC ? UTCtime(time) : LocalTime(time)) : 'Server delay...';
    return (
        <>
            <div className="snap-center relative inline-flex items-center justify-start px-6 py-3 font-bold text-white rounded-md shadow-2xl group w-full max-w-full select-none" onClick={toggleTimezone} style={{ backgroundColor: '#00000033' }}>
                {/* <!-- Top glass gradient --> */}
                <span
                    className="rounded-md absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                {/* <!-- Bottom gradient --> */}
                <span
                    className="rounded-md absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                {/* <!-- Left gradient --> */}
                <span
                    className="rounded-md absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                {/* <!-- Right gradient --> */}
                <span
                    className="rounded-md absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <div className="flex flex-col">
                    <span className="relative text-left font-light text-sm whitespace-nowrap">{isUTC ? "UTC" : "Local"} Time</span>
                    <span id="timeText" className="relative text-left font-mono whitespace-nowrap">{formattedTime}</span>
                </div>
            </div>
        </>
    )
}