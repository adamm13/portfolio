import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services }  from '../data'
import { fadeInUp, stagger, routeFade } from "../animations";
import { motion } from "framer-motion";

const About = () => {
  // console.log('CLIENT:', services) <-----client dom side rendering

  return (
    <motion.div 
    className="flex flex-col flex-grow px-6 pt-1" 
    variants={routeFade} 
    initial="initial" 
    animate="animate"
    exit= "exit"
    >
      <h5 className="my-3 font-medium">
        A finance professional turned developer with a vast knowledge of financial and banking sectors.
        Passion for changing technologies, creativity, and continual learning led me to software development.
        Leadership and collaborative experiences in multiple lines of work.
        Collaborative team player consistently sharing my knowledge and skills.
        </h5>
        <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" 
        style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
          <h6 className="my-3 text-xl font-bold tracking-wide"> My Skills</h6>
          <motion.div
            className="grid gap-6 my-3 md:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
            >
            {services.map(service => (
             <motion.div
              className="py-2 bg-gray-200 rounded-lg dark:bg-gray-900 lg:col-span-1 "
              key={service.title}
              variants={fadeInUp}
              >
                <ServiceCard service={service}/>
                </motion.div>
              ))}
          </motion.div>
        </div>
    </motion.div>
  )
}

export default About;

export const getServerSideProps = async (
  context:GetServerSidePropsContext
  ) => {
  // calculation 

  const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  const data = await res.json()
    console.log(services)
  return {
    props:{
      services: data.services,
    }
  }
}

// export const getStaticProps = async (
//   context:GetStaticPropsContext
//   ) => {
//   // calculation 

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   // console.log("server", services)  <---- server side rendering

//   return {
//     props:{
//       services: data.services,
//     }
//   }
// }
