import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/fa';
const Header = () => {
    return (
        <header>
            <div className="border-b border-solid p-3  shadow-sm" >
                <div className="max-w-screen-lg flex items-center justify-between m-auto  ">
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
                    <div className="">
                    <BiSearch></BiSearch>
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