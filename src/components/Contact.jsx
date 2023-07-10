import React, { useRef, useState } from 'react'
import Map from './Map'
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vcr221p', 'template_bjgmrfr', ref.current, 'vcA-hukzdvV8B0bBz')
    .then((result) => {
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });
  }

  return (
    <section className='h-screen snap-center'>
      <div className='w-full h-full flex justify-center gap-10'>
      <div className='flex flex-1 items-center justify-center '>
        <form ref={ref} onSubmit={handleSubmit} className={`w-${window.innerWidth < 400 ? '350' : '400'}px flex flex-col gap-6 md:w-[300px]`}>
          <h1 className='font-bold text-3xl'>Contact Us</h1>
          <input className='p-[20px] bg-[#e8e6e6] border-none rounded-md' placeholder='Name' name='name'/>
          <input className='p-[20px]  bg-[#e8e6e6] border-none rounded-md' placeholder='Email' name='email'/>
          <textarea className='p-[20px]  bg-[#e8e6e6] text-black border-none rounded-md' placeholder='Write Your Message' name='message' rows={10}/>
          <button type="submit" className='p-5 text-white bg-[#1e2791] border-none font-bold rounded-md'>Send</button>
        
          {success &&
          (<span className='text-white'>
              Your message has been sent. We'll get back to you soon.
            </span>
            )}
        </form>
      </div>
    <div className='flex-1 hidden md:flex'>
      <Map/>
    </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Contact,'contact')