import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Post from '../components/Post'
import Story from '../components/Story'
import Suggest from '../components/Suggest'
import User from '../components/User'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="mt-[80px] grid grid-cols-2 max-w-[821px] m-auto">
        <div className="max-w-[470px]">
          <Story/>
          <Post/>
        </div>
        <div>
          <User/>
          <Suggest/>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default Home
