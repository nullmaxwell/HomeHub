import LinkContainer from "./components/LinkContainer";
import Settings from "./components/Settings";
import WidgetBar from "./components/WidgetsBar";

import jsonDataWidgets from "./data/widgetData.json";
import jsonData from "./data/linkData.json";

export default function Home() {
  return (
    <main className="relative h-screen">
      <div id="grain-slider" className="demo-wrap">
        <div className="md:mb-20 mb-10 w-full flex flex-col justify-center items-center drop-shadow-lg relative z-20">
          <h1 className="md:text-4xl text-2xl font-black text-center text-white font-mono md:my-20 my-10">
            {process.env.HUB_PAGE_TITLE ? process.env.HUB_PAGE_TITLE : 'Header Text'}
          </h1>
          <WidgetBar data={jsonDataWidgets} />
        </div>
        <LinkContainer data={jsonData} />
        <Settings />
      </div>
    </main>
  );
}
