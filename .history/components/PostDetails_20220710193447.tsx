import React from 'react'
import { RiMoreFill } from "react-icons/ri";
import { RiChat1Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";
import { BiLabel } from "react-icons/bi";
import { BsDot, BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegSmile,FaRegHeart } from "react-icons/fa"
const PostDetails = () => {
    return (
        <div className="fixed inset-0 box-border w-full overflow-y-auto overflow-x-auto h-full bg-modal z-[90] ">
            <div className="flex justify-center items-center w-full h-full">
                <div className="container-modal">
                    <div className="flex flex-col max-w-full h-full">
                        <article className="w-full max-h-[inherit] p-0 flex flex-col shrink-0 relative items-stretch box-border">
                            <div className="max-h-[inherit] max-w-[inherit] flex flex-0-auto justify-center flex-row items-stretch ">
                                <div className="aspect-img bg-black grow justify-center min-h-[450px] overflow-hidden shrink flex relative items-stretch flex-col box-border">
                                    <div className="left-0 relative top-0">
                                        <div className="block">
                                            <div className="pb-[125%] block"></div>
                                            <div className="absolute flex inset-0 flex-0-auto justify-start flex-col items-stretch">
                                                <div className="w-full h-full">
                                                    <div className="flex overflow-x-auto overflow-y-hidden h-full flex-row"   >
                                                        <div className="flex h-full flex-row" >
                                                            <ul className="flex flex-row">
                                                                <li className="w-[1px] translate-x-[1320.59px]"></li>
                                                                <li className="translate-x-0 absolute align-baseline m-0 p-0">
                                                                    <div className="w-[660.797px] flex flex-0-auto justify-start flex-col items-stretch">
                                                                        <div className="touch-manipulation">
                                                                            <div className="flex">
                                                                                <div className="block w-full bg-[rgb(239,239,239)]">
                                                                                    <div className="pb-[125%] relative block overflow-hidden">
                                                                                        <img src="https://source.unsplash.com/random" alt="" className="object-cover h-full left-0 absolute top-0 select-none w-full" />
                                                                                    </div>
                                                                                    <div className="absolute inset-0"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li style={{ transform: 'translateX(660.797px)' }}>
                                                                    <div style={{ width: "660.797px" }} className="flex flex-0-auto justify-start flex-col items-stretch">
                                                                        <div className="touch-manipulation">
                                                                            <div className="flex">
                                                                                <div className="block w-full bg-[rgb(239,239,239)]">
                                                                                    <div className="pb-[125%] relative block overflow-hidden">
                                                                                        <img src="https://source.unsplash.com/random" alt="" className="object-cover h-full left-0 absolute top-0 select-none w-full" />
                                                                                    </div>
                                                                                    <div className="absolute inset-0"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <button className="right-0 cursor-pointer bg-transparent border-none justify-self-center outline-none px-2 py-4 absolute top-[50%] translate-y-[-50%]">
                                                            <div className="w-8 h-8 bg-no-repeat bg-position bg-[url('https://static.cdninstagram.com/rsrc.php/v3/y5/r/bve3a0HeZc8.png')]"></div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col grow shrink-[2] max-w-[500px] min-w-[405px] box-border relative items-stretch">
                                    <div className="flex justify-start flex-row items-stretch flex-auto min-h-0 min-w-0 ">
                                        <div className="rounded-r bg-white h-full w-full flex flex-col relative shrink-0 items-stretch box-border">
                                            <div className="border-left-post bg-white border-bottom-post mr-0 rounded-tr-lg">
                                                <div className="flex flex-0-auto justify-between flex-row items-center">
                                                    <header className="flex py-[14px] pr-1 pl-4 grow shrink flex-row items-center">
                                                        <div className="block h-fit w-fit relative">
                                                            <div className="w-[32px] h-[32px] conic-gradient relative rounded-full mb-3">
                                                                <img
                                                                    src="https://source.unsplash.com/random"
                                                                    className="rounded-full md:rounded-full w-full h-full bg-white p-[2px]"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="ml-[14px] flex items-start grow shrink overflow-hidden">
                                                            <div className="max-w-full flex flex-row items-baseline">
                                                                <div className="flex items-center flex-row grow shrink max-w-full overflow-hidden p-1">
                                                                    <div className="inline m-0 text-sm font-semibold text-neutral-800">
                                                                        <span className="inline relative">
                                                                            <a href="" className="select-none">
                                                                                _seorina
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-row items-baseline">
                                                                    <div className="mr-[2px]">
                                                                        <span className="ml-1 mr-1 text-neutral-800 inline">•</span>
                                                                    </div>
                                                                    <button className="text-neutral-800 border-0 inline-block p-0 relative bg-transparent cursor-pointer select-none">
                                                                        <div className="flex flex-0-auto justify-center flex-col items-stretch h-full">
                                                                            <div className="block font-semibold m-0 text-sm">Following</div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <div className="flex pr-2 justify-content">
                                                        <button className='flex items-center bg-transparent border-none cursor-pointer justify-center p-2'>
                                                            <div className="flex items-center  justify-center">
                                                                <div className="flex flex-0-auto justify-between flex-col items-center w-6 h-6">
                                                                    <RiMoreFill className="w-full h-full"></RiMoreFill>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-0 w-full min-w-[335px] box-border relative flex grow flex-col shrink-0 items-stretch">
                                                <section className="px-4 mt-1 flex flex-row pb-2 pt-[6px] m-0 order-3">
                                                    <span className="inline-block ml-[-8px]">
                                                        <button className="flex items-center bg-transparent border-none cursor-pointer justify-center p-2">
                                                            <div className="none flex justify-center items-center"></div>
                                                            <div>
                                                                <span>
                                                                    <FaRegHeart className="w-6 h-6"></FaRegHeart>
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </span>
                                                    <span className="inline-block ml-[-8px]">
                                                        <button className="flex items-center bg-transparent border-none cursor-pointer justify-center p-2">
                                                            <div className="none flex justify-center items-center"></div>
                                                            <div>
                                                                <span>
                                                                    <RiChat1Line className="w-6 h-6"></RiChat1Line>
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </span>
                                                    <span className="inline-block ml-[-8px]">
                                                        <button className="flex items-center bg-transparent border-none cursor-pointer justify-center p-2">
                                                            <div className="none flex justify-center items-center"></div>
                                                            <div>
                                                                <span>
                                                                    <TbLocation className="w-6 h-6"></TbLocation>
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </span>
                                                    <span className="inline-block ml-auto mr-[-10px]">
                                                        <button className="flex items-center bg-transparent border-none cursor-pointer justify-center p-2">
                                                            <div className="none flex justify-center items-center"></div>
                                                            <div>
                                                                <span>
                                                                    <BiLabel className="w-6 h-6"></BiLabel>
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </span>
                                                </section>
                                                <section className="order-4 px-4 mb-1 flex flex-row justify-end">
                                                    <div className="flex justify-start flex-row items-stretch flex-auto min-h-0 min-w-0">
                                                        <div className="m-auto flex justify-start flex-col items-stretch flex-auto flex-wrap min-h-0 min-w-0">
                                                            <div className="block font-normal m-0 text-sm text-neutral-800">
                                                                Liked by {""}
                                                                <a href="/" className="">
                                                                    <div className="inline m-0 text-sm font-semibold text-neutral-800">alihoangduong</div>
                                                                </a>
                                                                {""} and {""}
                                                                <a href="/" className="">
                                                                    <div className="inline m-0 text-sm font-semibold text-neutral-800">others</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                              
                                                <div className="order-5 pl-4 mb-0">
                                                    <div className="flex flex-0-auto justify-start flex-row items-stretch ">
                                                        <div>
                                                            <a href="/" className="font-normal text-[10px] text-[rgb(142,142,142)] uppercase">
                                                                <span className="tracking-[.2px]">2 days ago</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <section className="mt-[14px] px-4 order-6 contaier-input-cmt text-sm py-[6px] flex">
                                                    <div className="flex flex-col shrink-0 items-stretch box-border">
                                                        <form action="POST" className="flex items-center flex-row border-0 grow shrink relative m-0 p-0 text-[100%] align-baseline">
                                                            <div className="flex py-2 pr-4 pl-0">
                                                                <button className="flex items-center bg-transparent outline-none cursor-pointer border-none p-0">
                                                                    <div className="flex items-center justify-center">
                                                                        <FaRegSmile className="w-6 h-6 text-neutral-800 block relative"></FaRegSmile>
                                                                    </div>
                                                                </button>
                                                                {/* <div className="right-[12px] bottom-[360px]"></div> */}
                                                            </div>
                                                            <textarea placeholder="Add a comment..." autoComplete="off" autoCorrect='off' className="bg-none!h-[20px] border-none text-neutral-800 flex grow max-h-[80px] outline-none p-0 w-0 resize-none"></textarea>
                                                            <button disabled={true} className="opacity-90 relative inline-block p-0 border-0 bg-none cursor-pointer box-border w-auto text-ellipsis text-center select-none">
                                                                <div className="block text-blue-300 font-semibold m-0 text-sm">Post</div>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails