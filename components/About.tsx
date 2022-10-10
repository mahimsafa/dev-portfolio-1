import React from 'react'
import { motion } from 'framer-motion'
import BackToTop from './BackToTop'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-auto'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5
                }}
                className='absolute md:relative top-36 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-96 xl:w-[500px] xl:h-[600px]'
                src="https://mahimsafa.com/_next/image?url=%2Fimages%2Fmahim.png&w=256&q=100" alt="" />
            <div className='absolute md:relative bottom-20 space-y-10 px-0 md:px-10'>
                <h4 className=' text-4xl font-semibold'>Here's a <span className='underline decoration-[#f7ab0a]'> little</span> background</h4>
                <p className='text-sm'>I'a mahim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum blanditiis voluptatem optio numquam vero, totam voluptas autem quidem, assumenda aut fugit doloremque possimus consequuntur nesciunt maxime tenetur consequatur voluptatum! Illo doloribus perspiciatis totam et facilis ipsa quidem eveniet veniam ipsam nulla, a id laborum! Deleniti iure quia dolore? Error libero fugit, ut nihil dolore aliquam nostrum rerum excepturi incidunt veniam.</p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <BackToTop />
            </motion.div>
        </motion.div >
    )
}