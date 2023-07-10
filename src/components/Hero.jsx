import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import React from'react'

const Hero = () => {
  
  return (
    <section className='relative w-full h-screen mx-auto'>
<div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-4`}>
<div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
            <h1 className={`font-black text-white lg:text-[60px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>
            Hi, I'm <span className='text-[#915EFF]'>Haroune</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Full-stack web developer skilled in creating 
          captivating 
            <br className='sm:block hidden' />
            websites, and user-friendly web applications.
          
          </p>
        </div>
</div>
        <ComputersCanvas/>
        <div  className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{ y:[0,24,0]}} transition={{duration:1.5, repeat:Infinity,repratType:'loop'}}
           className='w-3 h-3 rounded-full bg-secondary mb-1 ' />
          </div>
        </a>
        </div>
    </section>
  )
}

export default Hero