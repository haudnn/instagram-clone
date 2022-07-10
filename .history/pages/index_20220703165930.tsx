import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Post from '../components/Post'
import Story from '../components/Story'
import Suggest from '../components/Suggest'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <div>
          <Story/>
          <Post/>
        </div>
        <div>
          <Suggest/>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default Home
