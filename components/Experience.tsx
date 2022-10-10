import { motion } from 'framer-motion'
import BackToTop from './BackToTop'
import ExperienceCard from './ExperienceCard'


type Props = {
    data: []
}

export default function Experience({ data }: Props) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-end md:justify-evenly mx-auto items-center md:items-end '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>


            <div className='absolute w-full flex top-28 md:bottom-0 mt-10 space-x-5 overflow-x-scroll p-0 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-transparent md:scrollbar-track-gray-400/20 scrollbar-thumb-transparent md:scrollbar-thumb-[#f7ab0a]/80 '
            >
                {/* ExperienceCards */}
                {data?.map((item, index) => (
                    <>
                        <ExperienceCard data={item} key={index} />
                    </>
                ))}
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
