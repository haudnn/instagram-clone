import React from 'react'
import { RiMoreFill } from "react-icons/ri";
import { RiChat1Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";
import { BiLabel } from "react-icons/bi";
import { BsDot, BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegSmile, FaRegHeart } from "react-icons/fa"
const PostDetails = () => {
    return (
        <div className="fixed inset-0 bg-modal items-center justify-center flex z-20 hidden">
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
                                <div className="flex justify-start flex-col items-stretch flex-auto min-h-0 min-w-0 relative box-border ">
                                    <div className="rounded-r bg-white h-full flex flex-col relative shrink-0 items-stretch box-border">
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
                                        <div className="p-0 w-full min-w-[335px] box-border relative flex grow flex-col shrink-0 items-stretch align-baseline">
                                            {/* react */}
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
                                            {/* liked */}
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
                                            {/* cmt */}
                                            <div className="p-0 mx-0 mt-0 mb-auto order-1 overflow-x-hidden overflow-y-auto flex grow shrink min-h-0 items-stretch box-border relative flex-col">
                                                <ul className="cmt-container">
                                                    <div className="touch-manipulation">
                                                        <li className="pb-4 pt-[5px] pr-4 w-auto overflow-visible relative mr-[-2px] mt-[-5px] break-words">
                                                            <div className="flex items-start flex-row justify-between relative">
                                                                <div className="w-full flex flex-row">
                                                                    <div className="block w-[50px] h-[32px] relative">
                                                                        <div className="cursor-pointer block items-center flex-none justify-center !self-center mr-[18px] relative ">
                                                                            <div className="w-[42px] h-[42px] top-[-5px] left-[-5px] absolute">
                                                                                <div className=" cursor-pointer w-[40px] h-[40px] conic-gradient relative rounded-full">
                                                                                    <img
                                                                                        src="https://picsum.photos/id/237/300/300"
                                                                                        className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                        alt=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="inline-block shrink min-w-0">
                                                                        <h2 className="inline-flex items-center">
                                                                            <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                <span className="inline relative">
                                                                                    <a href="/" className="inline text-sm font-semibold text-neutral-800">
                                                                                        vox.ngoc.tran
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                            <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                <span className="shrink-0 w-3 h-3 bg-no-repeat bg-pos-veri bg-[url('https://static.cdninstagram.com/rsrc.php/v3/y5/r/bve3a0HeZc8.png')]"></span>
                                                                            </div>
                                                                        </h2>
                                                                        <div className="inline">
                                                                            <span className="inline m-0 font-normal text-sm text-neutral-800">
                                                                                Tính mời anh đi ăn tối, nhưng mà thôi em ăn rồi
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                            <div className="text-day-base">
                                                                                <span>2d</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </div>
                                                    {/* comments */}
                                                    <ul className="mb-4">
                                                        <div className="touch-manipulation">
                                                            <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                <div className="flex flex-row justify-between items-start">
                                                                    <div className="flex flex-row w-container-cmt">
                                                                        <div className="block height-fit width-fit relative">
                                                                            <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                    <img
                                                                                        src="https://picsum.photos/id/237/300/300"
                                                                                        className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="inline-block shrink min-w-0">
                                                                            <h3 className="inline-flex items-center">
                                                                                <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                    <span className="inline relative">
                                                                                        <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                    </span>
                                                                                </div>
                                                                            </h3>
                                                                            <div className="inline">
                                                                                <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                            </div>
                                                                            <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                    <a href="" className="inline mr-[12px]">
                                                                                        <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                    </a>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">
                                                                                            2 likes
                                                                                        </div>
                                                                                    </button>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                    </button>
                                                                                    <div className="mr-[8px] inline-block"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="mt-[9px]">
                                                                        <div className="cursor-pointer p-0">
                                                                            <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                <div className="hidden items-center justify-center">
                                                                                    <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                </div>
                                                                                <div className=" flex items-center justify-center">
                                                                                    <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </div>
                                                        <li>
                                                            <ul className="container-reply">
                                                                <li className="border-0 inline-block align-baseline m-0 p-0">
                                                                    <div className="flex flex-0-auto justify-start flex-row items-stretch">
                                                                        <button className="inline-block border-0 p-0 relative cursor-pointer w-auto select-none text-center text-ellipsis text-sm bg-none box-border">
                                                                            <div className="line-reply"></div>
                                                                            <span className="font-semibold text-xs text-[rgb(142,142,142)]">View replies (4)</span>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                {/* views reply */}
                                                                <div className="touch-manipulation">
                                                                    <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                        <div className="flex flex-row justify-between items-start">
                                                                            <div className="flex flex-row w-container-cmt">
                                                                                <div className="block height-fit width-fit relative">
                                                                                    <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                        <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                            <img
                                                                                                src="https://picsum.photos/id/237/300/300"
                                                                                                className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                                alt=""
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="inline-block shrink min-w-0">
                                                                                    <h3 className="inline-flex items-center">
                                                                                        <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                            <span className="inline relative">
                                                                                                <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                            </span>
                                                                                        </div>
                                                                                    </h3>
                                                                                    <div className="inline">
                                                                                        <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                                    </div>
                                                                                    <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                        <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                            <a href="" className="inline mr-[12px]">
                                                                                                <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                            </a>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">
                                                                                                    2 likes
                                                                                                </div>
                                                                                            </button>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                            </button>
                                                                                            <div className="mr-[8px] inline-block"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-[9px]">
                                                                                <div className="cursor-pointer p-0">
                                                                                    <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                        <div className="hidden items-center justify-center">
                                                                                            <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                        </div>
                                                                                        <div className=" flex items-center justify-center">
                                                                                            <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                        </div>
                                                                                    </button>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="mb-4">
                                                        <div className="touch-manipulation">
                                                            <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                <div className="flex flex-row justify-between items-start">
                                                                    <div className="flex flex-row w-container-cmt">
                                                                        <div className="block height-fit width-fit relative">
                                                                            <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                    <img
                                                                                        src="https://picsum.photos/id/237/300/300"
                                                                                        className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="inline-block shrink min-w-0">
                                                                            <h3 className="inline-flex items-center">
                                                                                <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                    <span className="inline relative">
                                                                                        <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                    </span>
                                                                                </div>
                                                                            </h3>
                                                                            <div className="inline">
                                                                                <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                            </div>
                                                                            <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                    <a href="" className="inline mr-[12px]">
                                                                                        <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                    </a>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">
                                                                                            2 likes
                                                                                        </div>
                                                                                    </button>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                    </button>
                                                                                    <div className="mr-[8px] inline-block"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="mt-[9px]">
                                                                        <div className="cursor-pointer p-0">
                                                                            <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                <div className="hidden items-center justify-center">
                                                                                    <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                </div>
                                                                                <div className=" flex items-center justify-center">
                                                                                    <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </div>
                                                        <li>
                                                            <ul className="container-reply">
                                                                <li className="border-0 inline-block align-baseline m-0 p-0">
                                                                    <div className="flex flex-0-auto justify-start flex-row items-stretch">
                                                                        <button className="inline-block border-0 p-0 relative cursor-pointer w-auto select-none text-center text-ellipsis text-sm bg-none box-border">
                                                                            <div className="line-reply"></div>
                                                                            <span className="font-semibold text-xs text-[rgb(142,142,142)]">View replies (4)</span>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                {/* views reply */}
                                                                <div className="touch-manipulation">
                                                                    <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                        <div className="flex flex-row justify-between items-start">
                                                                            <div className="flex flex-row w-container-cmt">
                                                                                <div className="block height-fit width-fit relative">
                                                                                    <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                        <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                            <img
                                                                                                src="https://picsum.photos/id/237/300/300"
                                                                                                className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                                alt=""
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="inline-block shrink min-w-0">
                                                                                    <h3 className="inline-flex items-center">
                                                                                        <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                            <span className="inline relative">
                                                                                                <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                            </span>
                                                                                        </div>
                                                                                    </h3>
                                                                                    <div className="inline">
                                                                                        <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                                    </div>
                                                                                    <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                        <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                            <a href="" className="inline mr-[12px]">
                                                                                                <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                            </a>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">
                                                                                                    2 likes
                                                                                                </div>
                                                                                            </button>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                            </button>
                                                                                            <div className="mr-[8px] inline-block"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-[9px]">
                                                                                <div className="cursor-pointer p-0">
                                                                                    <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                        <div className="hidden items-center justify-center">
                                                                                            <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                        </div>
                                                                                        <div className=" flex items-center justify-center">
                                                                                            <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                        </div>
                                                                                    </button>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="mb-4">
                                                        <div className="touch-manipulation">
                                                            <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                <div className="flex flex-row justify-between items-start">
                                                                    <div className="flex flex-row w-container-cmt">
                                                                        <div className="block height-fit width-fit relative">
                                                                            <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                    <img
                                                                                        src="https://picsum.photos/id/237/300/300"
                                                                                        className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="inline-block shrink min-w-0">
                                                                            <h3 className="inline-flex items-center">
                                                                                <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                    <span className="inline relative">
                                                                                        <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                    </span>
                                                                                </div>
                                                                            </h3>
                                                                            <div className="inline">
                                                                                <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                            </div>
                                                                            <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                    <a href="" className="inline mr-[12px]">
                                                                                        <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                    </a>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">
                                                                                            2 likes
                                                                                        </div>
                                                                                    </button>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                    </button>
                                                                                    <div className="mr-[8px] inline-block"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="mt-[9px]">
                                                                        <div className="cursor-pointer p-0">
                                                                            <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                <div className="hidden items-center justify-center">
                                                                                    <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                </div>
                                                                                <div className=" flex items-center justify-center">
                                                                                    <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </div>
                                                        <li>
                                                            <ul className="container-reply">
                                                                <li className="border-0 inline-block align-baseline m-0 p-0">
                                                                    <div className="flex flex-0-auto justify-start flex-row items-stretch">
                                                                        <button className="inline-block border-0 p-0 relative cursor-pointer w-auto select-none text-center text-ellipsis text-sm bg-none box-border">
                                                                            <div className="line-reply"></div>
                                                                            <span className="font-semibold text-xs text-[rgb(142,142,142)]">View replies (4)</span>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                {/* views reply */}
                                                                <div className="touch-manipulation">
                                                                    <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                        <div className="flex flex-row justify-between items-start">
                                                                            <div className="flex flex-row w-container-cmt">
                                                                                <div className="block height-fit width-fit relative">
                                                                                    <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                        <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                            <img
                                                                                                src="https://picsum.photos/id/237/300/300"
                                                                                                className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                                alt=""
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="inline-block shrink min-w-0">
                                                                                    <h3 className="inline-flex items-center">
                                                                                        <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                            <span className="inline relative">
                                                                                                <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                            </span>
                                                                                        </div>
                                                                                    </h3>
                                                                                    <div className="inline">
                                                                                        <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                                    </div>
                                                                                    <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                        <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                            <a href="" className="inline mr-[12px]">
                                                                                                <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                            </a>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">
                                                                                                    2 likes
                                                                                                </div>
                                                                                            </button>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                            </button>
                                                                                            <div className="mr-[8px] inline-block"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-[9px]">
                                                                                <div className="cursor-pointer p-0">
                                                                                    <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                        <div className="hidden items-center justify-center">
                                                                                            <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                        </div>
                                                                                        <div className=" flex items-center justify-center">
                                                                                            <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                        </div>
                                                                                    </button>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="mb-4">
                                                        <div className="touch-manipulation">
                                                            <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                <div className="flex flex-row justify-between items-start">
                                                                    <div className="flex flex-row w-container-cmt">
                                                                        <div className="block height-fit width-fit relative">
                                                                            <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                    <img
                                                                                        src="https://picsum.photos/id/237/300/300"
                                                                                        className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="inline-block shrink min-w-0">
                                                                            <h3 className="inline-flex items-center">
                                                                                <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                    <span className="inline relative">
                                                                                        <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                    </span>
                                                                                </div>
                                                                            </h3>
                                                                            <div className="inline">
                                                                                <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                            </div>
                                                                            <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                    <a href="" className="inline mr-[12px]">
                                                                                        <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                    </a>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">
                                                                                            2 likes
                                                                                        </div>
                                                                                    </button>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                    </button>
                                                                                    <div className="mr-[8px] inline-block"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="mt-[9px]">
                                                                        <div className="cursor-pointer p-0">
                                                                            <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                <div className="hidden items-center justify-center">
                                                                                    <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                </div>
                                                                                <div className=" flex items-center justify-center">
                                                                                    <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </div>
                                                        <li>
                                                            <ul className="container-reply">
                                                                <li className="border-0 inline-block align-baseline m-0 p-0">
                                                                    <div className="flex flex-0-auto justify-start flex-row items-stretch">
                                                                        <button className="inline-block border-0 p-0 relative cursor-pointer w-auto select-none text-center text-ellipsis text-sm bg-none box-border">
                                                                            <div className="line-reply"></div>
                                                                            <span className="font-semibold text-xs text-[rgb(142,142,142)]">View replies (4)</span>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                {/* views reply */}
                                                                <div className="touch-manipulation">
                                                                    <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                        <div className="flex flex-row justify-between items-start">
                                                                            <div className="flex flex-row w-container-cmt">
                                                                                <div className="block height-fit width-fit relative">
                                                                                    <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                        <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                            <img
                                                                                                src="https://picsum.photos/id/237/300/300"
                                                                                                className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                                alt=""
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="inline-block shrink min-w-0">
                                                                                    <h3 className="inline-flex items-center">
                                                                                        <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                            <span className="inline relative">
                                                                                                <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                            </span>
                                                                                        </div>
                                                                                    </h3>
                                                                                    <div className="inline">
                                                                                        <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                                    </div>
                                                                                    <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                        <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                            <a href="" className="inline mr-[12px]">
                                                                                                <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                            </a>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">
                                                                                                    2 likes
                                                                                                </div>
                                                                                            </button>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                            </button>
                                                                                            <div className="mr-[8px] inline-block"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-[9px]">
                                                                                <div className="cursor-pointer p-0">
                                                                                    <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                        <div className="hidden items-center justify-center">
                                                                                            <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                        </div>
                                                                                        <div className=" flex items-center justify-center">
                                                                                            <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                        </div>
                                                                                    </button>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="mb-4">
                                                        <div className="touch-manipulation">
                                                            <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                <div className="flex flex-row justify-between items-start">
                                                                    <div className="flex flex-row w-container-cmt">
                                                                        <div className="block height-fit width-fit relative">
                                                                            <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                    <img
                                                                                        src="https://picsum.photos/id/237/300/300"
                                                                                        className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                        alt=""
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="inline-block shrink min-w-0">
                                                                            <h3 className="inline-flex items-center">
                                                                                <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                    <span className="inline relative">
                                                                                        <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                    </span>
                                                                                </div>
                                                                            </h3>
                                                                            <div className="inline">
                                                                                <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                            </div>
                                                                            <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                    <a href="" className="inline mr-[12px]">
                                                                                        <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                    </a>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">
                                                                                            2 likes
                                                                                        </div>
                                                                                    </button>
                                                                                    <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                        <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                    </button>
                                                                                    <div className="mr-[8px] inline-block"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <span className="mt-[9px]">
                                                                        <div className="cursor-pointer p-0">
                                                                            <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                <div className="hidden items-center justify-center">
                                                                                    <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                </div>
                                                                                <div className=" flex items-center justify-center">
                                                                                    <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                </div>
                                                                            </button>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </div>
                                                        <li>
                                                            <ul className="container-reply">
                                                                <li className="border-0 inline-block align-baseline m-0 p-0">
                                                                    <div className="flex flex-0-auto justify-start flex-row items-stretch">
                                                                        <button className="inline-block border-0 p-0 relative cursor-pointer w-auto select-none text-center text-ellipsis text-sm bg-none box-border">
                                                                            <div className="line-reply"></div>
                                                                            <span className="font-semibold text-xs text-[rgb(142,142,142)]">View replies (4)</span>
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                {/* views reply */}
                                                                <div className="touch-manipulation">
                                                                    <li className="pb-0 overflow-visible pt-[12px] w-auto mr-[-2px] mt-[-5px] relative">
                                                                        <div className="flex flex-row justify-between items-start">
                                                                            <div className="flex flex-row w-container-cmt">
                                                                                <div className="block height-fit width-fit relative">
                                                                                    <div className="items-center flex-none block justify-center relative seft-center mr-[18px]">
                                                                                        <a href="/" className="block cursor-pointer w-[32px] h-[32px] conic-gradient relative rounded-full">
                                                                                            <img
                                                                                                src="https://picsum.photos/id/237/300/300"
                                                                                                className="rounded-full md:rounded-full w-full h-full p-[2px]"
                                                                                                alt=""
                                                                                            />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="inline-block shrink min-w-0">
                                                                                    <h3 className="inline-flex items-center">
                                                                                        <div className="flex mr-1 flex-0-auto justify-start flex-col items-stretch">
                                                                                            <span className="inline relative">
                                                                                                <a href="/" className="inline text-sm font-semibold text-neutral-800 select-none">ashwukong</a>
                                                                                            </span>
                                                                                        </div>
                                                                                    </h3>
                                                                                    <div className="inline">
                                                                                        <span className=" text-neutral-800 inline m-0 text-sm font-normal">Hôm bữa gặp bã chụp ảnh ngoài cầu ánh sao mà xỉu up xỉu down gì đẹp dữ luôn</span>
                                                                                    </div>
                                                                                    <div className="mt-4 mb-1 flex flex-0-auto justify-start flex-col items-stretch">
                                                                                        <div className="block mt-[-2px] mb-[-3px] font-normal text-[rgb(142,142,142)]">
                                                                                            <a href="" className="inline mr-[12px]">
                                                                                                <span className="text-[12px] font-normal cursor-pointer">2d</span>
                                                                                            </a>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">
                                                                                                    2 likes
                                                                                                </div>
                                                                                            </button>
                                                                                            <button className="bg-none border-none cursor-pointer inline mr-[12px] p-0 text-sm text-[rgb(142,142,142)]">
                                                                                                <div className="inline m-0 font-semibold text-xs">Reply</div>
                                                                                            </button>
                                                                                            <div className="mr-[8px] inline-block"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <span className="mt-[9px]">
                                                                                <div className="cursor-pointer p-0">
                                                                                    <button className="p-0 flex items-center bg-transparent border-none cursor-pointer justify-center">
                                                                                        <div className="hidden items-center justify-center">
                                                                                            <BsHeartFill className="block relative w-3 h-3 text-red-600"></BsHeartFill>
                                                                                        </div>
                                                                                        <div className=" flex items-center justify-center">
                                                                                            <BsHeart className="block relative w-3 h-3 text-[rgb(142,142,142)]"></BsHeart>
                                                                                        </div>
                                                                                    </button>
                                                                                </div>
                                                                            </span>
                                                                        </div>
                                                                    </li>
                                                                </div>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </ul>
                                            </div>
                                            {/* time */}
                                            <div className="order-5 pl-4 mb-0">
                                                <div className="flex flex-0-auto justify-start flex-row items-stretch ">
                                                    <div>
                                                        <a href="/" className="font-normal text-[10px] text-[rgb(142,142,142)] uppercase">
                                                            <span className="tracking-[.2px]">2 days ago</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* add cmt*/}
                                            <section className="mt-[14px] px-4 order-6 contaier-input-cmt text-sm py-[6px] flex">
                                                <form action="POST" className="flex items-center flex-row border-0 grow shrink relative align-baseline m-0 p-0 text-[100%]">
                                                    <div className="flex py-2 pr-3 pl-0">
                                                        <button className="flex items-center bg-transparent outline-none cursor-pointer border-none p-0">
                                                            <FaRegSmile className="w-6 h-6 text-neutral-800 block relative"></FaRegSmile>
                                                        </button>
                                                        <div className="right-[12px] bottom-[360px]"></div>
                                                    </div>
                                                    <textarea placeholder="Add a comment..." autoComplete="off" autoCorrect='off' className="!h-[20px] border-none text-neutral-800 flex grow max-h-[80px] outline-none p-0 w-0 resize-none"></textarea>
                                                    <button disabled={true} className="opacity-90 relative inline-block p-0 border-0 bg-none cursor-pointer box-border w-auto text-ellipsis text-center select-none">
                                                        <div className="block text-blue-300 font-semibold m-0 text-sm">Post</div>
                                                    </button>
                                                </form>
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
    )
}

export default PostDetails