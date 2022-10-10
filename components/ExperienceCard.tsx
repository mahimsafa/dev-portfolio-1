import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    data: Experience
}

export default function ExperienceCard({ data }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] px-3 pt-3 md:p-10 md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden w-full lg:w-1/2'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='rounded-full h32 w-32 xl:h-[200px] xl:w-[200px] object-cover object-center'
                src={data.img} alt="" />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{data.position}</h4>
                <p className='text-2xl font-bold mt-1'>{data.company}</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech Used */}
                    {data.keytech?.map((tech, index) => (
                        <p
                            key={index}
                            className='bg-[#111] text-sm py-2 rounded-lg px-4'
                        >
                            {tech}
                        </p>
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300/90'>Started work {data.started} - Ended {data.ended ? data.ended : 'present'}</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {data.responsibilities?.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>

                    ))}
                </ul>
            </div>
        </article>
    )
}