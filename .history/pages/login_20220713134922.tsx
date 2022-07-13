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
            <div className="mt-3 w-full max-w-[350px] flex justify-center text-[rgba(38,38,38,0.1)]">
              <div className="flex items-center shrink-0 flex-col relative box-border rounded-sm py-[10px] mb-[10px] border border-solid border-[rgb(219,219,219)] bg-white">
                <div className="mt-9 mb-3 container-flex-0-auto-start ">
                  <div className="cursor-pointer flex flex-col shrink-0 m-0 p-0 box-border relative items-stretch">
                    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
                <div className="mb-[10px] max-w-[350px] w-full flex flex-col shrink-0 m-0 p-0 box-border relative items-stretch">
                    <form action="" className="flex flex-col">
                      <div className="mt-6 container-flex-0-auto-start">
                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgb(219,219,219)] rounded-sm text-neutral-800 ">
                                <label className="flex flex-1-0-0 h-9 m-0 p-0 min-w-0 relative" htmlFor="">
                                  <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-sm leading-9 left-[8px] text-[rgb(142,142,142)]">Phone number, username, or email</span>
                                  <input type="text" className="text-base bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[7px] text-ellipsis"/>
                                </label> 
                            </div>
                        </div>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </article>
        </main>
      </section>
    </div>
  )
}

export default login