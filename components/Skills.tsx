import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import BackToTop from './BackToTop'

type Props = {
    data: Skill[]
}

export default function Skills({ data }: Props) {
    const development = data.filter((item) => item.type === 'development')
    const nontech = data.filter((item) => item.type === 'nontech')
    const others = data.filter((item) => item.type === 'others')
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-7xl xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

            <div className='absolute bottom-0 top-40 md:top-0 h-full w-full flex items-center md:justify-center flex-col space-y-10 md:space-y-16'>
                <div className='flex flex-col space-y-2 md:space-y-4 justify-center items-center w-full'>
                    <h3 className=' uppercase tracking-[3px] text-gray-500 text-sm'>Development</h3>
                    <div className='flex max-w-6xl flex-wrap justify-center items-center gap-2 md:gap-3'>
                        {development.map((skill, index) => (
                            <Skill data={skill} key={index} />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col space-y-2 md:space-y-4 justify-center items-center w-full'>
                    <h3 className=' uppercase tracking-[3px] text-gray-500 text-sm'>Others</h3>

                    <div className='flex max-w-6xl flex-wrap justify-center items-center gap-2 md:gap-3'>
                        {others.map((skill, index) => (
                            <Skill data={skill} key={index} />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col space-y-2 md:space-y-4 justify-center items-center w-full'>
                    <h3 className=' uppercase tracking-[3px] text-gray-500 text-sm'>Non Technical</h3>
                    <div className='flex max-w-6xl flex-wrap justify-center items-center gap-2 md:gap-3'>
                        {nontech.map((skill, index) => (
                            <Skill data={skill} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className='opacity-0'
            >
                <BackToTop />
            </motion.div>

        </motion.div>
    )
}