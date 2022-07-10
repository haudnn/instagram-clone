import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Story from '../components/Story'

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
          
        </div>
      </main>
    </div>
  )
}

export default Home
