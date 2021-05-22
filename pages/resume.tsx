import { motion } from 'framer-motion';
import Bar from "../components/Bar";
import { fadeInUp, routeFade } from "../animations";
import { languages, tools } from "../data";

const resume = () => {

  return (
    <motion.div
      className="px-6 py-2"
      variants={routeFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div 
      variants={fadeInUp} 
      initial='initial' 
      animate='animate'
      >
        <h5 className="my-3 text-2xl font-bold">Education</h5>
        <div>
          <h5 className="my-2 text-xl font-semibold text-purple">Diploma in Web Development</h5>
          <p className="font-semibold">Lighthouse Labs (2021)</p>
          <p className="my-3">Studied various aspects of full stack web development. Used popular frameworks 
          to build both single-page applications and progressive web applications. </p>
        </div>
      </motion.div>
       <motion.div variants={fadeInUp} initial='initial' animate='animate'>
        <h5 className="my-3 text-2xl font-bold">Experience</h5>
        <div>
          <h5 className="my-2 text-xl font-semibold text-purple">Jr Full Stack Web Developer</h5>
          <p className="font-semibold">Freelance</p>
          <p className="my-3">Built applications focusing on popular front-end frameworks. Utilized 
          various other programs to build dynamic apps.</p>
        </div>
      </motion.div>
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
    </motion.div>
  )
}

export default resume