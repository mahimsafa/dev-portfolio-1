import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    data: Skill
}

export default function Skill({ data }: Props) {
    return (
        <div className='group relative flex cursor-pointer bg-[#292929] p-2 rounded-full items-center space-x-3 justify-center'>

            {
                data.img &&
                <img src={data.img} alt="" className='h-5 w-5' />
            }
            <p>{data.value}</p>

            {/* <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{ duration: 1 }}
                className='rounded-full border border-gray-500 object-cover h-24 w-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out '
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png" alt="" />


                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/50 h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 overflow-hidden rounded-full z-0'>
                    <div className='flex items-center justify-center h-full'>
                        <p className='text-3xl font-semibold text-black opacity-100'>100%</p>
                    </div>
                </div> */}
        </div>
    )
}