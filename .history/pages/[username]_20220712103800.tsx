import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header'
import { FaUserCheck } from "react-icons/fa"
import { IoIosArrowDown,IoMdGrid } from "react-icons/io"
import { RiMoreFill,RiFolderUserLine } from "react-icons/ri"
import { BiVideo } from "react-icons/bi"
import { MdPlayCircleOutline } from "react-icons/md"
import { BiCarousel } from "react-icons/bi"

const Profile: NextPage = () => {
    return (
        <div>
            <Head>
                <title>AMEE (@ameemee_m) • Instagram photos and videos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="flex flex-col grow overflow-hidden min-h-screen">
                <Header />
                <main className="mt-[70px] bg-[rgb(250,250,250)] flex grow items-stretch flex-col relative m-0 p-0 shrink box-border">
                    <div className="pt-[30px] px-[20px] pb-0 box-content flex flex-col shrink-0 relative container-profile mb-0 mx-auto mt-0 grow max-w-[935px]">
                        <header className="mb-[44px] flex flex-row">
                            <div className="mr-[30px] flex grow basis-0 shrink-0 flex-col items-stretch relative box-border">
                                <div className="cursor-pointer flex items-center flex-col ">
                                    <div className="w-[150px] h-[150px] conic-gradient relative rounded-full mb-3">
                                        <img
                                            src="https://source.unsplash.com/random"
                                            className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <section className="basis-[30px] grow-[2] container-profile-info">
                                <div className="flex mb-[20px] items-center flex-row shrink min-w-[0]">
                                    <h2 className="block overflow-hidden text-ellipsis whitespace-nowrap text-neutral-800 font-light text-2xl mt-[-5px] mb-[-6px]">ameemee_m</h2>
                                    <div className="flex ml-1 flex-0-auto justify-start flex-col items-stretch">
                                        <span className="shrink-0 w-[18px] h-[18px] bg-pos-veri-profile bg-pos-veri bg-[url('https://static.cdninstagram.com/rsrc.php/v3/y5/r/bve3a0HeZc8.png')]"></span>
                                    </div>
                                    <div className="flex ml-[20px] flex-0-auto justify-start flex-row items-stretch">
                                        <div className="flex flex-0-auto justify-start flex-row items-stretch">
                                            <div className="ml-2 flex flex-auto min-w-0 min-h-0 justify-start flex-col items-stretch overflow-hidden">
                                                <button className="button-profile">
                                                    <div className="block overflow-hidden text-ellipsis whitespace-nowrap text-neutral-800 font-semibold m-0 text-sm">Message</div>
                                                </button>
                                            </div>
                                            <div className="ml-2 flex flex-auto min-w-0 min-h-0 justify-start flex-col items-stretch overflow-hidden">
                                                <button className="button-profile">
                                                    <div className="h-full flex flex-0-auto justify-center flex-col items-stretch px-4">
                                                        <div className="block overflow-hidden text-ellipsis whitespace-nowrap text-neutral-800 font-semibold m-0 text-sm">
                                                            <FaUserCheck className="w-[20px] h-[20px] block relative"></FaUserCheck>
                                                        </div>
                                                    </div>                                      
                                                </button>
                                            </div>
                                            <div className="ml-2 flex flex-auto min-w-0 min-h-0 justify-start flex-col items-stretch overflow-hidden">
                                                <button className="button-profile">
                                                    <div className="h-full flex flex-0-auto justify-center flex-col items-stretch">
                                                        <div className="block overflow-hidden text-ellipsis whitespace-nowrap text-neutral-500 font-normal m-0 text-sm">
                                                            <IoIosArrowDown  className="w-[20px] h-[20px] block relative "></IoIosArrowDown>
                                                        </div>
                                                    </div>                                
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row shrink-0 ml-[5px]">
                                        <button className="flex items-center bg-transparent border-none cursor-pointer justify-center p-2">
                                            <div className="flex items-center justify-center flex-col shrink-0">
                                                <RiMoreFill className="w-8 h-8 block relative text-neutral-800 "></RiMoreFill>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <ul className="mb-5 flex flex-row">
                                    <li className="ml-0 mr-10 text-base">
                                        <div className="container-text-base">
                                            <span className="font-semibold text-neutral-800">269</span>
                                            {""} posts
                                        </div>
                                    </li>
                                    <li className="ml-0 mr-10 text-base">
                                        <div className="container-text-base">
                                            <span className="font-semibold text-neutral-800">1.7M</span>
                                            {""} followers
                                        </div>
                                    </li>
                                    <li className="ml-0 mr-10 text-base">
                                        <div className="container-text-base">
                                            <span className="font-semibold text-neutral-800">296</span>
                                            {""} following
                                        </div>
                                    </li>
                                </ul>
                                <div>
                                    <span className="inline m-0 font-semibold text-neutral-800 text-base">
                                        AMEE
                                    </span>
                                    <br></br>
                                    <div className="container-flex-0-auto-start">
                                        <div className="block text-[rgb(142,142,142)] font-normal m-0 text-base">Artist</div>
                                    </div>
                                    <div className="container-text-base">
                                        Artist {""}
                                        <a href="/" className="text-[rgb(0,55,107)]">@st319entertainment</a>
                                        <br />
                                        ‘hai mươi hai (22)’ music video
                                    </div>
                                    <a href="" className="text-[rgb(0,55,107)]">
                                        <div className="block overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-base">
                                            youtu.be/n2iFnPaAsnU
                                        </div>
                                    </a>
                                    <a href="" className='font-medium text-neutral-800'>
                                        <span className="block mt-[14px]">
                                            <div className="block text-[rgb(142,142,142)] font-medium mt-[-2px] mb-[-3px] text-xs">
                                                Followed by {""}
                                                <span className='font-medium text-neutral-800'>ngoctrinh89</span>
                                                , {""}
                                                <span className='font-medium text-neutral-800'>ngokienhuy_bap</span>
                                                , {""}
                                                <span className='font-medium text-neutral-800'>erikthanh_</span>
                                                +17 more
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </section>
                        </header>
                        {/* stories */}
                        {/* <div className="h-[130px] mb-[44px] flex flex-col items-stretch shrink-0 relative box-border">
                            <div className="w-full h-full">
                                <div className="flex flex-row h-full overflow-x-auto overflow-y-hidden">
                                    <div className="flex flex-row h-full">
                                        <ul className="flex flex-row border-0 m-0 p-0 align-baseline"></ul>  
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="flex items-center border-t border-solid border-t-[rgb(219, 219, 219)] flex-row text-xs font-semibold justify-center text-center tracking-[1px]">
                            <a href="" className="container-tab-profile">
                                <span className="flex items-center">
                                    <IoMdGrid className="w-4 h-4"></IoMdGrid>
                                    <span className="ml-[6px]">Posts</span>
                                </span>
                            </a>
                            <a href="" className="container-tab-profile">
                                <span className="flex items-center">
                                    <BiVideo className="w-4 h-4"></BiVideo>
                                    <span className="ml-[6px]">Reels</span>
                                </span>
                            </a>
                            <a href="" className="container-tab-profile">
                                <span className="flex items-center">
                                    <MdPlayCircleOutline className="w-4 h-4"></MdPlayCircleOutline>
                                    <span className="ml-[6px]">Videos</span>
                                </span>
                            </a>
                            <a href="" className="container-tab-profile">
                                <span className="flex items-center">
                                    <RiFolderUserLine className="w-4 h-4"></RiFolderUserLine>
                                    <span className="ml-[6px]">Tagged</span>
                                </span>
                            </a>
                        </div>
                        <div className="flex flex-col shrink-0 items-stretch box-border">
                            <article className="flex grow flex-col shrink-0 items-stretch box-border">
                                <div className="flex flex-col shrink-0 items-stretch box-border">
                                    <div className="flex-col pb-0 pt-0">
                                        <div className="flex flex-row mb-[28px]">
                                            <div className="grow shrink-0 basis-[0%] mr-[28px] block relative w-full">
                                                <a href="/" className="cursor-pointer"> 
                                                    <div className="bg-[rgb(239,239,239)] w-full">
                                                        <div className="overflow-hidden pb-[100%] relative">
                                                            <img src="https://source.unsplash.com/random" alt="" className="object-cover h-full absolute left-0 top-0 select-none w-full" />
                                                        </div>
                                                        <div className="absolute inset-0"></div>
                                                    </div>
                                                    <div className="flex items-end absolute inset-0 justify-start pointer-events-none">
                                                        <div className="container-flex-0-auto-start m-2">
                                                            <BiCarousel className="w-[22px] h-[22px] block relative text-white"></BiCarousel>
                                                        </div>
                                                    </div>
                                                </a> 
                                            </div>
                                            <div className="grow shrink-0 basis-[0%] mr-[28px] block relative w-full">
                                                <a href="/" className="cursor-pointer"> 
                                                    <div className="bg-[rgb(239,239,239)] w-full">
                                                        <div className="overflow-hidden pb-[100%] relative">
                                                            <img src="https://source.unsplash.com/random" alt="" className="object-cover h-full absolute left-0 top-0 select-none w-full" />
                                                        </div>
                                                        <div className="absolute inset-0"></div>
                                                    </div>
                                                    <div className="flex items-end absolute inset-0 justify-start pointer-events-none">
                                                        <div className="container-flex-0-auto-start m-2">
                                                            <BiCarousel className="w-[22px] h-[22px] block relative text-white"></BiCarousel>
                                                        </div>
                                                    </div>
                                                </a> 
                                            </div>
                                            <div className="grow shrink-0 basis-[0%] mr-[28px] block relative w-full">
                                                <a href="/" className="cursor-pointer"> 
                                                    <div className="bg-[rgb(239,239,239)] w-full">
                                                        <div className="overflow-hidden pb-[100%] relative">
                                                            <img src="https://source.unsplash.com/random" alt="" className="object-cover h-full absolute left-0 top-0 select-none w-full" />
                                                        </div>
                                                        <div className="absolute inset-0"></div>
                                                    </div>
                                                    <div className="flex items-end absolute inset-0 justify-start pointer-events-none flex-col shrink-0 ">
                                                        <div className="container-flex-0-auto-start m-2">
                                                            <BiCarousel className="w-[22px] h-[22px] block relative text-white"></BiCarousel>
                                                        </div>
                                                    </div>
                                                </a> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>  

                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Profile