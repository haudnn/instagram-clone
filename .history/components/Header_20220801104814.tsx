import Image from 'next/image'
import React,{useState} from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdHomeFilled , MdAddCircleOutline,MdSaveAlt, MdOutlineExplore} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TbLocation,TbUserCircle,TbSwitchHorizontal } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { FiSettings } from "react-icons/fi"
import CreatePost from './CreatePost';

const Header = () => {
    const [isSearch, setIsSearch] = useState<Boolean>(false)
    const [isDetail, setIsDetail] = useState<Boolean>(false)
    const [isCreate, setIsCreate] = useState<Boolean>(false)
    const toggleSearch = () => {
        setIsSearch(!isSearch)
    }
    const toggleDetail = () => {
        setIsDetail(!isDetail)
    }
    const toggleCreate = () => {
        setIsCreate(!isCreate)
    }
    return (
        <header className="fixed top-0 left-0 right-0 bg-white z-10 max-h-[60px]">
            <div className="border-b border-solid p-3 drop-shadow" >
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
                    <div className="hidden items-center bg-slate-100 rounded-md relative h-[36px] py-4 sm:flex mx-2 w-[268px]" onClick={toggleSearch}>
                        <div className="relative flex items-center">
                            <input type="text" placeholder="Search" className={` bg-slate-100 outline-none ${isSearch ? "pl-3" : "pl-10"}  w-[268px] `}/>
                            <div className={`${isSearch ? "hidden" : ""} absolute left-3`} >
                                <BiSearch></BiSearch>
                            </div>
                            <div className={`${isSearch ? "" : "hidden"} absolute right-3 cursor-pointer`} onClick={toggleSearch}>
                                <IoIosCloseCircleOutline className="h-5 w-5 "></IoIosCloseCircleOutline>
                            </div>
                        </div> 
                        {isSearch && (
                            <div className="relative top-8 w-[375px] left-[-350px]">
                                <div className="absolute h-10 w-8  bg-white rotate-45 left-[170px] top-[-6px] drop-shadow z-10"></div>
                                <div className="absolute bg-white drop-shadow rounded-md p-4 z-10">
                                    <div className="flex items-center flex-col overflow-x-hidden overflow-y-auto pt-[12px] h-[362px] w-[375px]">
                                        <div className="flex items-center justify-between w-full">
                                            <p className="font-medium">Recent</p>
                                            <p className="text-sm font-medium text-blue-400">Clear all</p>
                                        </div>
                                        <div className="flex items-center justify-between w-full mt-3">  
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
                        )}
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
                            <li className="cursor-pointer" onClick={toggleCreate}>
                                <a>
                                    <MdAddCircleOutline className="h-6 w-6"></MdAddCircleOutline>
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <a>
                                    <MdOutlineExplore className="h-6 w-6"></MdOutlineExplore>
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <a>
                                    <FaRegHeart className="h-6 w-6"></FaRegHeart>
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <div className="mt-1 relative" onClick={toggleDetail}>
                                    <Image src="https://scontent.cdninstagram.com/v/t51.2885-19/277408480_683313113103433_8064620258265961451_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=f246jodoRAIAX8khZvo&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT_gzFBGDhwst1QsEPKwE8oonb1Vyn1_YtvpwZUy3PG8QQ&oe=62C73590&_nc_sid=978cb9" alt="" width={24} height={24} className="rounded-full" objectFit='cover' />
                                    {
                                        isDetail && (
                                            <div className="absolute origin-top-center translate-y-0  drop-shadow rounded bg-white top-11 ml-[-200px] w-[230px]">
                                            <div className="w-full h-full overflow-x-hidden overflow-y-auto rounded">
                                              <div className="border-b border-solid border-b-slate-200 pb-3">
                                                <ul className="flex flex-col">
                                                    <li className="block hover:bg-slate-100">
                                                        <a href="block">
                                                            <div className="flex flex-auto items-center gap-x-3 px-[16px] py-[8px] justify-start mt-[4px] ">
                                                                <TbUserCircle></TbUserCircle>
                                                                <span className="text-sm">Profile</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="block hover:bg-slate-100">
                                                        <a href="block">
                                                            <div className="flex flex-auto items-center gap-x-3 px-[16px] py-[8px] justify-start mt-[4px] "> 
                                                                <MdSaveAlt></MdSaveAlt>
                                                                <span className="text-sm">Saved</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="block hover:bg-slate-100">
                                                        <a href="block">
                                                            <div className="flex flex-auto items-center gap-x-3 px-[16px] py-[8px] justify-start mt-[4px] ">
                                                                <FiSettings></FiSettings>
                                                                <span className="text-sm">Settings</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="block hover:bg-slate-100">
                                                        <a href="block">
                                                           <div className="flex flex-auto items-center gap-x-3 px-[16px] py-[8px] justify-start mt-[4px] ">
                                                                <TbSwitchHorizontal></TbSwitchHorizontal>
                                                                <span className="text-sm">Switch Accounts</span>
                                                           </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                              </div>
                                              <div className="px-[16px] py-[8px] hover:bg-slate-100">
                                                <p className="text-sm">Log out</p>
                                              </div>
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>                                
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        <CreatePost isCreate={isCreate}/>
        </header>
    )
}

export default Header