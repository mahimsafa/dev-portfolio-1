import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

type Props = {
  data: any
}

const Home: NextPage<Props> = ({ data }) => {

  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scroll-smooth" id='main' >
      <Head>
        <title>Mahim Safa</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Work Experiences */}
      <section id='experience' className='snap-center'>
        <Experience data={data.experience} />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills data={data.skills} />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects data={data.projects} />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      
    </main>
  )
}

export default Home

export async function getServerSideProps({ req, _ }: { req: any, _: null }) {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const baseUrl = req.rawHeaders[req.rawHeaders.indexOf('Host') + 1]
  const responso = await fetch('http://' + baseUrl + '/api/me')
  const data = await responso.json()
  // Props returned will be passed to the page component
  return { props: { data } }
}
