import React from 'react'
import { IoMdClose } from "react-icons/io"

const CreatePost = () => {
    return (
        <div className="min-h-screen flex flex-col relative">
            <div className="fixed inset-0 bg-modal z-30">
                <div className="absolute top-[10px] right-[10px] block z-30">
                    <div className="p-2 flex justify-center items-center bg-transparent cursor-pointer border-none box-border m-0 ">
                        <div className="flex justify-center flex-col items-center cursor-pointer">
                            <IoMdClose className="block relative w-[25px] h-[25px] text-white cursor-pointer"></IoMdClose>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full grow shrink-0">
                    <div className="min-h-0 min-w-0 flex justify-center box-border items-start">
                        <div className="flex justify-center flex-col items-center relative overflow-y-hidden box-content outline-none">
                            <div className="flex shrink justify-center m-5 relative container-modal-create-post">
                                <div style={{ maxHeight:"calc(100vh - 40px)"}} className="bg-white overflow-y-auto overflow-x-auto rounded-r-xl rounded-l-xl ">
                                     <div className="flex flex-col h-full max-w-full">
                                        <div className="modal-create-wrapper flex flex-col items-stretch box-border relative shrink">
                                            <div className="overflow-hidden flex-auto min-h-0 min-w-0 justify-start flex-col items-stretch">
                                                <div className="w-full container-flex-0-auto-start">
                                                    <div className="flex flex-col">
                                                        <div className="inline-block w-full border-b border-solid border-b-[rgb(219, 219, 219)] h-[43px] relative">
                                                            <div className="flex w-full h-full absolute flex-0-auto items-center flex-col justify-center">
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost