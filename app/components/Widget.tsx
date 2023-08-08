export default function Widget() {
    return (
        <>
            {/* <!-- Clock Component --> */}
            <div className="snap-center relative inline-flex items-center justify-start px-6 py-3 font-bold text-white rounded-md shadow-2xl group w-full max-w-full opacity-60 bg-slate-600">
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
                    <span className="relative text-left font-light text-sm whitespace-nowrap">Time UTC:</span>
                    <span id="timeText" className="relative text-left font-mono whitespace-nowrap"></span>
                </div>
            </div></>
    )
}