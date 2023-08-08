import Clock from "./Clock";
import Widget from "./Widget";

export default function WidgetBar({ data }: any) {
    return (
        <div id="widgets" className="flex sm:flex-row md:gap-4 gap-3 flex-col">
            <Clock />
            <Widget data={data} />
        </div>
    )
}