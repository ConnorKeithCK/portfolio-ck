import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Terminal from '../components/Terminal'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Connor Keith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Terminal />
    </div>
  )
}

export default Home
