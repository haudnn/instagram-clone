import Head from 'next/head'
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
const register = () => {
    return (
        <div>
            <Head>
                <title>Login • Instagram</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="bg-[rgba(250,250,250,1)] overflow-hidden min-h-screen flex grow flex-col shrink-0 box-border m-0 p-0 relative">
                <div className="flex grow flex-col shrink-0 box-border m-0 p-0 relative "></div>
                <main className="bg-[rgba(250,250,250,1)] flex grow order-4 m-0 p-0 relative shrink-0 items-stretch box-boder flex-col">
                    <div className="min-h-[100%] flex overflow-hidden mb-11 flex-auto min-w-0 justify-center flex-row items-center">
                        <div className="mt-3 flex items-stretch flex-col relative box-border justify-center grow max-w-[350px] text-[rgba(38,38,38,0.1)]">
                            <div className="flex items-center flex-col shrink-0 box-border py-[10px] mb-[10px] rounded-sm border border-solid border-[rgba(219,219,219,1)] bg-[rgba(255,255,255,1)]">
                                <div className="mt-9 mb-3 container-flex-0-auto-start ">
                                    <div className="cursor-pointer flex flex-col shrink-0 m-0 p-0 box-border relative items-stretch">
                                        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="max-h-full max-w-full object-contain" />
                                    </div>
                                </div>
                                {/* main */}
                                <div className="flex mb-5 flex-col shrink-0 box-border items-stretch">
                                    <form action="" className="max-w-[350px] flex flex-col">
                                        <h2 className="text-[#8e8e8e] text-base font-semibold text-center mb-[10px] mx-10">Sign up to see photos and videos from your friends.</h2>
                                        <div className="container-flex-0-auto-start my-2 mx-10">
                                            <button className="cursor-pointer rounded relative block text-[14px] font-semibold text-center w-auto select-none text-ellipsis py-[5px] px-[9px]
                                            bg-[rgba(0,149,246,1)] text-[rgba(255,255,255,1)]" >
                                                <AiFillFacebook className="mr-2 w-4 h-4"></AiFillFacebook>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default register