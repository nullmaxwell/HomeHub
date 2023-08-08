export default function WidgetBar({children}: any) {
    return (
        <div id="widgets" className="flex sm:flex-row md:gap-4 gap-3 flex-col">
            {children}
        </div>
    )
}