import React from 'react'
import { motion } from 'framer-motion'
import BackToTop from './BackToTop'

type Props = {
    data: Project[]
}

export default function Projects({ data }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen  flex overflow-hidden flex-col relative text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
                {/* Projects */}
                {data.map((project, index) => (
                    <div key={index} className='relative w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            src={project.img} alt=""
                            className='absolute top-40 md:top-0 md:relative h-52 w-52 md:h-96 md:w-96 object-cover '
                        />
                        <div className='absolute top-[22rem] md:top-0 md:bottom-0 md:relative space-y-3 md:space-y-10 px-0 md:px-10 max-w-full'>
                            <h4 className='text-2xl lg:text-4xl font-semibold text-center'>
                                {project.name}
                            </h4>

                            <p className='text-sm md:text-lg text-center md:text-left px-3'>
                                {project.description}
                            </p>
                            {project.key && <div className='flex flex-row w-full space-x-2 flex-wrap space-y-2 justify-center items-center'>
                                {project.key.map((key, index) => (
                                    <p className='text-sm bg-[#242424] p-2 rounded-lg' key={index}>
                                        {key}
                                    </p>
                                ))}
                            </div>}
                        </div>
                    </div>
                )
                )}

            </div>

            <div className='w-full absolute top-[30%] bg-[#f7ab0b]/10 left-0 h-[500px] -skew-y-12' />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <BackToTop />
            </motion.div>

        </motion.div>
    )
}