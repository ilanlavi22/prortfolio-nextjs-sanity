import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src='https://github.com/ilanlavi22/WeatherApp-Frontend/raw/main/screenshot.png'
              alt=''
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-lg font-semibold text-center md:text-4xl'>
                <span className=' underline decoration-[#F7AB0A]'>
                  Case Study {index + 1} 0f {projects.length}:
                </span>{' '}
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                laboriosam consequuntur ex! Sapiente quasi dolorum totam et.
                Consequatur, cupiditate aut?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=' w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}
