import jsonData from "../data/linkData"
import LinkBox from "./LinkBox"

export default function LinkContainer() {
  return (
    <div className="flex flex-row justify-center z-20 relative">
      <div id="app" className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center mb-10">
        {jsonData.sections.map((data: any, index: any) => (
          <div key={index} className="m-3">
            <h2 className="font-black text-lg text-center text-white font-mono">{data.title}</h2>
            <LinkBox items={data.items} />
          </div>
        ))}
      </div>
    </div>
  )
}