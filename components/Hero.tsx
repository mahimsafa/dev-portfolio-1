import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircels from './BackgroundCircels'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi, The Name\'s Mahim', 'Guy Who Loves To Explore', '<ButInATechyWay />'],
        loop: true,
        delaySpeed: 2000
    })

    function handleNavigation(e: any) {
        const target = document.getElementById(e.target.value)
        target?.scrollIntoView({ behavior: "smooth", block: "end" })
    }

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircels />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://mahimsafa.com/_next/image?url=%2Fimages%2Fmahim.png&w=256&q=100" alt="Picture"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[7px]'>Software Engineer</h2>
                <h1 className='text-4xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>
                <div className='pt-5 space-x-1 md:space-x-0 space-y-1 md:space-y-0'>
                    <button className='hero-button' value='about' onClick={handleNavigation}>About</button>
                    <button className='hero-button' value='experience' onClick={handleNavigation}>Experience</button>
                    <button className='hero-button' value='skills' onClick={handleNavigation}>Skills</button>
                    <button className='hero-button' value='projects' onClick={handleNavigation}>Projects</button>
                </div>
            </div>
        </div>
    )
}