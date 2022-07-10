import React from 'react'
import { FiMoreHorizontal } from "react-icons/ri";

const PostDetails = () => {
    return (
        <div className="fixed inset-0 box-border w-full overflow-y-auto overflow-x-auto h-full bg-modal z-[90] ">
            <div className="flex justify-center items-center w-full h-full">
                <div className="w-full rounded-[4px] calc-height-modal overflow-x-auto m-auto">
                    <div className="flex flex-col w-full h-full">
                        <article className="w-full max-h-[inherit] p-0">
                            <div className="max-h-[inherit] max-w-[inherit] flex flex-0-auto justify-center flex-row items-stretch ">
                                <div className="aspect-img bg-black grow justify-center min-h-[450px] overflow-hidden shrink flex relative items-stretch flex-col">
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
                                <div className="flex flex-col grow shrink-[2] max-w-[500px] m-w-[405px]">
                                            <div className="flex justify-start flex-row items-stretch flex-auto min-h-0 min-w-0 ">
                                                <div className="rounded-r bg-white h-full w-full">
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
                                                                        <div>
                                                                            <FiMoreHorizontal ></FiMoreHorizontal>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
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