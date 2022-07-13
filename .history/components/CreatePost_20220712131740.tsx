import React from 'react'
import { IoMdClose } from "react-icons/io"

const CreatePost = () => {
    return (
        <div className="min-h-screen relative ">
            <div className="fixed inset-0 bg-modal z-30 "></div>
            <div className="absolute top-[10px] right-[10px] block z-50">
                <div className="p-2 flex justify-center items-center bg-transparent cursor-pointer border-none box-border m-0 ">
                    <div className="flex justify-center flex-col items-center cursor-pointer">
                        <h3 className="text-red-500">1</h3>
                        {/* <IoMdClose className="block relative w-[18px] h-[18px] text-white cursor-pointer"></IoMdClose> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost