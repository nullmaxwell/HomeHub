export default function Frame() {
    return (
        <div className="flex justify-center max-w-[905px] w-full mx-auto">
            {/* Change src to your src */}
            <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
                width='100%'
                height='500px'
                className="relative z-20 w-full aspect-video rounded-lg shadow-lg"
            ></iframe>
        </div>

    )
}