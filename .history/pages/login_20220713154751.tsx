import Head from 'next/head'
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";

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
            <div className="mt-3 w-full max-w-[350px] text-[rgba(38,38,38,0.1)]">
              {/* top */}
              <div className="flex items-center shrink-0 flex-col relative box-border rounded-sm py-[10px] mb-[10px] border border-solid border-[rgb(219,219,219)] bg-white">
                <div className="mt-9 mb-3 container-flex-0-auto-start ">
                  <div className="cursor-pointer flex flex-col shrink-0 m-0 p-0 box-border relative items-stretch">
                    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
                <div className="mb-[10px] max-w-[350px] w-full flex flex-col shrink-0 m-0 p-0 box-border relative items-stretch">
                    <form method="post" action="" className="flex flex-col">
                      <div className="mt-6 container-flex-0-auto-start">
                        {/* username */}
                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgb(219,219,219)] rounded-sm text-neutral-800 ">
                                <label className="flex flex-1-0-0 h-9 m-0 p-0 min-w-0 relative">
                                  <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Phone number, username, or email</span>
                                  <input type="text" className="text-base bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[7px] text-ellipsis"/>
                                </label> 
                            </div>
                        </div>
                         {/* password */}
                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgb(219,219,219)] rounded-sm text-neutral-800 ">
                                <label className="flex flex-1-0-0 h-9 m-0 p-0 min-w-0 relative">
                                  <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Password</span>
                                  <input type="password" className="text-base bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[7px] text-ellipsis"/>
                                </label> 
                                <div className="flex flex-0-auto flex-row h-full pr-2 align-middle items-center">
                                  <div className="container-flex-0-auto-start ml-2">
                                    <button className="hidden text-neutral-800  p-0 relative bg-transparent cursor-pointer text-sm text-center w-auto select-none text-ellipsis font-semibold">Show</button>
                                  </div>
                                </div>
                            </div>
                        </div>
                        {/* login */}
                        <div className="m-2 mx-10 container-flex-0-auto-start" >
                            <button type="submit" className="cursor-pointer rounded relative block text-[14px] font-semibold text-center w-auto select-none text-ellipsis py-[5px] px-[9px]
                            bg-[rgba(0,149,246,.3)] text-[rgba(255,255,255,1)]" disabled={true} >
                              <div className="container-flex-0-auto-start">Log in</div>
                            </button>
                        </div>
                        <div className="mt-[10px] mb-[18px] mx-10 flex flex-row box-border items-stretch relative">
                            <div className="bg-[rgba(219,219,219,1)] flex grow shrink h-[1px] relative top-[0.45em]"></div>
                            <div className="text-[rgba(142,142,142,1)] text-[13px] font-semibold uppercase leading-[15px] mx-[18px] flex grow-0 shrink-0">or</div>
                            <div className="bg-[rgba(219,219,219,1)] flex grow shrink h-[1px] relative top-[0.45em]"></div>
                        </div>
                        {/* login fb */}
                        <div className="m-2 mx-10 container-flex-0-auto-start">
                          <button type="submit" className="inline-block border-0 text-[#385185] p-0 relative cursor-pointer text-[14px] font-semibold text-center w-auto select-none text-ellipsis ">
                            <AiFillFacebook className="inline-block mr-2 w-5 h-5"></AiFillFacebook>
                            <span className="text-[#385185]">Log in with Facebook</span>
                          </button>
                        </div>
                        <a href="" className="mt-3 block text-center text-xs text-[rgba(0,55,107,1)]">Forgot password?</a>
                      </div>
                    </form>
                </div>
              </div>
              <div className="flex items-center shrink-0 flex-col relative box-border rounded-sm py-[10px] mb-[10px] border border-solid border-[rgb(219,219,219)] bg-white">
                  <div className="block text-[rgba(142,142,,142,1)] font-normal text-sm m-[-3px] mb-[-4px] ">
                      <p className="text-sm text-neutral-800 m-[15px] text-center">Don't have an account? {""}
                        <a href="" className="">
                          <span>Sign up</span>
                        </a>
                       </p>

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