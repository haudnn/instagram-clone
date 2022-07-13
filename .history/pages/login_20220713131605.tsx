import Head from 'next/head'
import React from 'react'

const login = () => {
  return (
    <div>
      <Head>
        <title>Instagram </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="overflow-hidden min-h-screen">
        <main className="bg-white flex grow order-4 m-0 p-0 relative shrink-0 items-stretch box-boder flex-col">
          <article className="flex flex-row justify-center items-center mx-auto mt-8 max-w-[935px] pb-8 w-full">
            <div className="bg-login">
              <div className="mt-[27px] ml-[113px] relative">
                  <img className="img-login active" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" />
              </div>
            </div>
            <div className="mt-3 max-w-[350px] flex justify-center grow text-[rgba(38,38,38,0.1)]">
              <div className="flex items-center rounded-sm">

              </div>
            </div>
          </article>
        </main>
      </section>
    </div>
  )
}

export default login