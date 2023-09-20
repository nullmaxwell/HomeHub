import LinkContainer from "./components/LinkContainer";
import Settings from "./components/Settings";
import WidgetBar from "./components/WidgetsBar";

import jsonDataWidgets from "./data/widgetData.json";
import jsonData from "./data/linkData.json";
import Frame from "./components/Frame";

export default function Home() {
  return (
    <main className="relative h-full p-6">
      <div id="grain-slider" className="demo-wrap max-w-7xl mx-auto">
        <div className="md:mb-20 mb-10 w-full flex flex-col justify-center items-center drop-shadow-lg relative z-20">
          <h1 className="md:text-4xl text-2xl font-black text-center text-white font-mono md:my-20 my-10">
            {process.env.HUB_PAGE_TITLE ? process.env.HUB_PAGE_TITLE : 'HomeHub'}
          </h1>
          <WidgetBar data={jsonDataWidgets} />
        </div>
        <LinkContainer data={jsonData} />
        <Frame />
        <Settings />
      </div>
    </main>
  );
}
