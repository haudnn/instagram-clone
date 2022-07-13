import React from 'react'
import { IoMdClose } from "react-icons/io"

const CreatePost = () => {
    return (
        <div className=" flex flex-col relative">
            <div className="fixed inset-0 bg-modal z-30 min-h-screen ">
                <div className="absolute top-[10px] right-[10px] block z-30">
                    <div className="p-2 flex justify-center items-center bg-transparent cursor-pointer border-none box-border m-0 ">
                        <div className="flex justify-center flex-col items-center cursor-pointer">
                            <IoMdClose className="block relative w-[25px] h-[25px] text-white cursor-pointer"></IoMdClose>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreatePost