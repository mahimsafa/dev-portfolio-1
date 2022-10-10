import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'


type Props = {}

const Header = (props: Props) => {

    function handleNavigation() {
        const target = document.getElementById('contact')
        target?.scrollIntoView({ behavior: "smooth", block: "end" })
    }

    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,

                }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon url="https://twitter.com/mahim_safa" fgColor='gray' bgColor='transparent' className='opacity-100 lg:opacity-50 transition-opacity hover:opacity-100' />
                <SocialIcon url="https://linkedin.com/in/mahimsafa" fgColor='gray' bgColor='transparent' className='opacity-100 lg:opacity-50 transition-opacity hover:opacity-100' />
                <SocialIcon url="https://github.com/mahim_safa" fgColor='gray' bgColor='transparent' className='opacity-100 lg:opacity-50 transition-opacity hover:opacity-100' />
                <SocialIcon url="https://facebook.com/thebikkritoguy" fgColor='gray' bgColor='transparent' className='opacity-100 lg:opacity-50 transition-opacity hover:opacity-100' />

            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1,

                }}
                onClick={handleNavigation}
                className='flex flex-row items-center text-gray-300 cursor-pointer' >
                {/* Contact */}
                <div className='opacity-100 lg:opacity-50 transition-opacity hover:opacity-100'>
                    <SocialIcon network='email' fgColor='gray' bgColor='transparent' className='cursor-pointer' />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
                </div>
            </motion.div>
        </header>
    )
}

export default Header