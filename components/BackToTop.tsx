import React from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'


type Props = {}

export default function BackToTop({ }: Props) {
    function handleNavigation() {
        const target = document.getElementById('hero')
        target?.scrollIntoView({ behavior: "smooth", block: "end" })
    }
    return (
        <div className='fixed bottom-20 right-20 bg-[#f7ab0a]/50 h-20 w-20 p-10 rounded-full hidden md:flex justify-center items-center cursor-pointer z-30 ' onClick={handleNavigation}>
            <p>
                <ChevronDoubleUpIcon className='h-10 w-10 animate-bounce' />
            </p>
        </div>
    )
}