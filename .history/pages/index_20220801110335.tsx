import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Stories from '../components/Stories'
import Suggest from '../components/Suggest'
import User from '../components/User'
import { useState } from 'react'
import PostDetails from '../components/PostDetails'
import ModalMoreOption from '../components/ModalMoreOption'
const Home: NextPage = () => {
  const [isPostDetail, setIsPostDetail] = useState<Boolean>(false)
  return (
    <>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <main className="mt-[90px] flex max-w-[900px] m-auto ">
          <div className=" mr-8 ml-4 w-full ">
            {/* <Stories /> */}
            <Posts />
          </div>
          <div className="hidden lg:block sidebar">
              <User />
              <Suggest />
              {/* <Footer /> */}
          </div>
        </main>
      </>
      {isPostDetail && <PostDetails />}
      {/* <ModalMoreOption></ModalMoreOption> */}
    </>
  )
}

export default Home
