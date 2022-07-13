import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Stories from '../components/Stories'
import Suggest from '../components/Suggest'
import User from '../components/User'
import {useState}
const Home: NextPage = () => {
  const [isPostDetail, setIsPostDetail] = useState<Boolean>(true)
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-[90px] flex gap-x-[40px] max-w-[900px] m-auto">
        <div className="w-[470px]">
          <Stories />
          <Posts />
        </div>
        <div className="w-full">
          <div className="fixed">
            <User />
            <Suggest />
            <Footer />
          </div>
        </div>
      </main>
      {isPostDetail && <PostDetails/>}
    </div>
  )
}

export default Home
