import React from 'react'
import {Tilt} from "react-tilt";
import {motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constant'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';


const ServiceCard = ({index,title,icon})=>{
return(
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn('right','spring' , 0.5 * index , 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
         <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
         <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intoduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p  variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'>
      Hi, I'm Haroune, an experienced web developer specializing in React.js. With a strong background in frontend and backend development, I excel at creating dynamic and user-friendly web interfaces. I have successfully completed diverse projects, including a Facebook clone, YouTube clone, chat application, admin dashboard, and weather app. My educational background and expertise allow me to efficiently manage databases (MongoDb-MySql..) and deliver seamless data integration. I am dedicated to producing error-free code and thrive in collaborative environments, where I can leverage my problem-solving skills to create impactful web solutions.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");