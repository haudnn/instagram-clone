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
                                                <AiFillFacebook className="inline-block mr-2 w-5 h-5"></AiFillFacebook>{""}
                                                Log in with Facebook
                                            </button>
                                        </div>
                                        <div className="mt-[10px] mb-[18px] mx-10 flex flex-row box-border items-stretch relative">
                                            <div className="bg-[rgba(219,219,219,1)] flex grow shrink h-[1px] relative top-[0.45em]"></div>
                                            <div className="text-[rgba(142,142,142,1)] text-[13px] font-semibold uppercase leading-[15px] mx-[18px] flex grow-0 shrink-0">or</div>
                                            <div className="bg-[rgba(219,219,219,1)] flex grow shrink h-[1px] relative top-[0.45em]"></div>
                                        </div>
                                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgba(219,219,219,1)] rounded-sm text-neutral-800 ">
                                                <label className="flex flex-1-0-0 h-9 m-0 p-0 min-w-0 relative">
                                                    <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Mobile Number or Email</span>
                                                    <input type="text" className="text-base bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[7px] text-ellipsis" />
                                                </label>
                                            </div>                                       
                                        </div>
                                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgba(219,219,219,1)] rounded-sm text-neutral-800 ">
                                                <label className="flex flex-1-0-0 h-9 m-0 p-0 min-w-0 relative">
                                                    <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Mobile Number or Email</span>
                                                    <input type="text" className="text-base bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[7px] text-ellipsis" />
                                                </label>
                                            </div>                                       
                                        </div>
                                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgba(219,219,219,1)] rounded-sm text-neutral-800 ">
                                                <label className="flex flex-1-0-0 h-9 m-0 p-0 min-w-0 relative">
                                                    <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Mobile Number or Email</span>
                                                    <input type="text" className="text-base bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[7px] text-ellipsis" />
                                                </label>
                                            </div>                                       
                                        </div>
                                        <div className="mx-10 mb-[6px] flex flex-col shrink-0 box-border relative items-stretch">
                                            <div className="flex flex-row text-sm w-full relative items-center bg-[rgb(250,250,250)] border border-solid border-[rgba(219,219,219,1)] rounded-sm text-neutral-800 ">
                                                <label className="flex flex-1-0-0 h-9 m-0 p-0 min-w-0 relative">
                                                    <span className="select-none whitespace-nowrap text-ellipsis right-0 absolute pointer-events-none overflow-hidden text-[12px] leading-9 left-[8px] text-[rgb(142,142,142)]">Mobile Number or Email</span>
                                                    <input type="text" className="text-base bg-white border-0 flex-1-0-auto m-0 outline-0 overflow-hidden pt-[9px] pl-2 pb-[7px] text-ellipsis" />
                                                </label>
                                            </div>                                       
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