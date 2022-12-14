import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://images.unsplash.com/photo-1519436893050-4b29535906c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='font-bold text-xl'>{experience?.jobTitle}</h4>
        <p className=' text-base mt-1'>{experience?.company}</p>

        {/* <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://images.unsplash.com/photo-1519436893050-4b29535906c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
            alt=''
          />
        </div> */}
        <p className='uppercase py-5 text-gray-300 text-sm'>
          {experience?.dateStarted &&
            `Started work ${new Date(
              experience?.dateStarted
            ).toDateString()}`}{' '}
          {experience?.dateEnd && `Ended ${experience?.dateEnd}`}
        </p>
        <div className='flex gap-1'>
          {experience.technologies &&
            experience?.technologies.map((technology) => (
              <img
                key={technology._id}
                className='h-10 w-10 rounded-full'
                alt=''
                //src='https://cdn.sanity.io/images/px6b8qjp/production/ad20e75def13b432e684a341e5ae0b7077809339-128x128.svg'
                src={urlFor(technology?.image).url()}
              />
            ))}
        </div>
        {/* <ul className=' list-disc space-y-4 ml-5 text-lg'>
          {experience?.points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul> */}
      </div>
    </article>
  );
}
