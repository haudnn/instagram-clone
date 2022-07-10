import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi';
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
                    <div className="flex items-center gap-x-3 bg-slate-100 p-2 max-w-full rounded-xl">
                        <BiSearch></BiSearch>
                        <input type="text" placeholder="Search" />
                    </div>
                    <nav>
                        <p>3</p>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header