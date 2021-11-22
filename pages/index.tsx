import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Terminal from '../components/Terminal'
import Toolbar from '../components/Toolbar'
import HomeStyle from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={HomeStyle["desktop"]}>
      <Head>
        <title>Connor Keith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toolbar />
      <Navbar />
    </div>
  )
}

export default Home
