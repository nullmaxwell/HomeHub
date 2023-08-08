export default function Widget({ data }: any) {
    return (
        <>
            {data.map(( data: any, index: any ) =>
                <a key={index} href={data.link} className="snap-center relative inline-flex items-center justify-start px-6 py-3 font-bold text-white rounded-md shadow-2xl group w-full max-w-full" style={{ backgroundColor: '#00000033' }}>
                    {/* <!-- Top glass gradient --> */}
                    <span className="rounded-md absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    {/* <!-- Bottom gradient --> */}
                    <span className="rounded-md absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    {/* <!-- Left gradient --> */}
                    <span className="rounded-md absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    {/* <!-- Right gradient --> */}
                    <span className="rounded-md absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <div className="flex flex-col">
                        <span id="statusLight" className="rounded-full w-2 h-2 absolute top-2 right-2 ${statusClassName}"></span>
                        <span className="relative text-left font-light text-sm whitespace-nowrap">{data.name}</span>
                        <span className="relative text-left font-mono whitespace-nowrap">Test</span>
                    </div>
                </a>
            )}
        </>
    )
}