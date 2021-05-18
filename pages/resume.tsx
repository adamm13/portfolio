import Bar from "../components/Bar";
import { languages, tools } from "../data";

export default function resume() {
  return (
    <div className="px-6 py-2">
      {/* education and experiences */}
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h5 className="my-3 text-2xl font-bold">Education</h5>
        <div>
          <h5 className="my-2 text-xl font-bold">Diploma in Web Development</h5>
          <p className="font-semibold">Lighthouse Labs</p>
          <p className="my-3">skdl sdfsd fsd fsd fs dlfksjdl sdflsdkjfs fsdlkfjsdklfjsd</p>
        </div>
      </div>
      <div>
        <h5 className="my-3 text-2xl font-bold">Experience</h5>
        <div>
          <h5 className="my-2 text-xl font-bold">Jr Full Stack Web Developer</h5>
          <p className="font-semibold">Freelance</p>
          <p className="my-3">skdl sdfsd fsd fsd fs dlfksjdl sdflsdkjfs fsdlkfjsdklfjsd</p>
        </div>
      </div>
    </div>

      {/* languages and tools */}
      <div className="grid gap-6 md:grid-cols-2">

      <div>
        <h5 className="my-3 font-bold text-2-xl">Languages & Frameworks</h5>
        <div className="my-2">
          {
            languages.map(language=> (
            <Bar data={language} key={language.name}/>
            ))}
        </div>
      </div>
      <div>
        <h5 className="my-3 font-bold text-2-xl">Tools and Software</h5>
        <div className="my-2">
          {
            tools.map(tool=> (
            <Bar data={tool} key={tool.name}/>
            ))}
        </div>
      </div>
      </div>
    </div>
  )
}
