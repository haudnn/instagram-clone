import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdHomeFilled , MdAddCircleOutline} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai"
const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0">
            <div className="border-b border-solid p-3 shadow-sm" >
                <div className="max-w-screen-lg flex items-center justify-between m-auto box-border ">
                    <div className="max-w-full">
                        <a href="/" className="block">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                                width={103}
                                height={29}
                                className="cursor-pointer object-contain"
                            />
                        </a>
                    </div>
                    <div className="hidden items-center bg-slate-100 rounded-md relative h-[36px] py-4 sm:flex mx-2 w-[268px]">
                        <input type="text" placeholder="Search" className="relative bg-slate-100 outline-none pl-10  "/>
                        <div className="absolute left-3 inline-block" >
                            <BiSearch></BiSearch>
                        </div> 
                        <div className="relative top-12 w-[375px] left-[-268px] ">
                            <div className="absolute bg-white shadow-xl rounded-md p-4">
                                <div className="flex items-center flex-col overflow-x-hidden overflow-y-auto pt-[12px] h-[362px] w-[375px]">
                                    <div className="flex items-center justify-between w-full">
                                        <p className="font-medium">Recent</p>
                                        <p className="text-sm font-medium text-blue-400">Clear all</p>
                                    </div>
                                    <div className="flex items-center justify-between w-full mt-3 z-10">  
                                        <div className="flex items-center gap-x-4">
                                            <a>
                                                <Image src="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/281411812_404090348059968_6084890194476652799_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=QaEmN0H2F50AX9P0GF8&edm=AGeOuZUBAAAA&ccb=7-5&oh=00_AT9XTuWkz20WHYhCZqa4MSSRA2UKLO3eM3c-WCm9MRPKpA&oe=62C72485&_nc_sid=924bfa" alt="avater" 
                                                width={50}
                                                height={50}
                                                objectFit="cover"
                                                className="rounded-full cursor-pointer"
                                                />
                                            </a>
                                            <div className="flex flex-col">
                                                <p className="font-medium text-sm cursor-pointer" >virusinmyeyes</p>
                                                <p className="text-sm text-slate-500 cursor-pointer">Crybaby</p>
                                            </div>
                                        </div>
                                        <div>
                                            <AiOutlineClose className="h-5 w-5 text-slate-500 cursor-pointer"></AiOutlineClose>
                                        </div>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    <nav >
                        <ul className="flex items-center justify-between gap-x-6 flex-row whitespace-nowrap">
                            <li className="cursor-pointer">
                                <a>
                                    <MdHomeFilled className="h-6 w-6"></MdHomeFilled>
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <a>
                                    <TbLocation className="h-6 w-6"></TbLocation>
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <a>
                                    <MdAddCircleOutline className="h-6 w-6"></MdAddCircleOutline>
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <a>
                                    <MdHomeFilled className="h-6 w-6"></MdHomeFilled>
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <a>
                                    <FaRegHeart className="h-6 w-6"></FaRegHeart>
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <div className="mt-1">
                                    <Image src="https://scontent.cdninstagram.com/v/t51.2885-19/277408480_683313113103433_8064620258265961451_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=f246jodoRAIAX8khZvo&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT_gzFBGDhwst1QsEPKwE8oonb1Vyn1_YtvpwZUy3PG8QQ&oe=62C73590&_nc_sid=978cb9" alt="" width={24} height={24} className="rounded-full" objectFit='cover' />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header