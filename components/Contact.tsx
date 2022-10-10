import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import BackToTop from './BackToTop'

type Props = {}

export default function Contact({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <h4 className='text-4xl font-semibold text-center'>
                I have got this what you need. <span className='underline decoration-[#f7ab0a]/50'>Let's Talk.</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#f7ab0a] animate-pulse h-7 w-7' />
                    <p className='text-2xl'>+880 1919 377945</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a] animate-pulse h-7 w-7' />
                    <p className='text-2xl'>hi@mahimsafa.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#f7ab0a] animate-pulse h-7 w-7' />
                    <p className='text-2xl'>Dhaka, Bangladesh</p>
                </div>
            </div>

            <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <BackToTop />
                </motion.div>
        </motion.div>
    )
}