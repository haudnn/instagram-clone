import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { MdHomeFilled , MdAddCircleOutline} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";

const Header = () => {
    return (
        <header>
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
                    <div className="flex items-center bg-slate-100 rounded-md relative w-[300px] h-[36px] flex-initial py-4">
                        <input type="text" placeholder="Search" className="relative bg-slate-100 outline-none pl-10"/>
                        <div className="absolute left-3 inline-block" >
                            <BiSearch></BiSearch>
                        </div>
                    </div>
                    <nav >
                        <ul className="flex items-center justify-between gap-x-6 flex-row whitespace-nowrap">
                            <li >
                                <a className="text-lg">
                                    <MdHomeFilled width={100} ></MdHomeFilled>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <TbLocation></TbLocation>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <MdAddCircleOutline></MdAddCircleOutline>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <MdHomeFilled></MdHomeFilled>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaRegHeart></FaRegHeart>
                                </a>
                            </li>
                            <li>
                                <div>
                                    <img src="" alt="" />
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