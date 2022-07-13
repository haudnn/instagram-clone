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
                                                            <div className="flex w-full h-full absolute flex-0-auto items-center flex-row justify-between">
                                                                <div></div>
                                                                <h3 className="text-neutral-800 flex items-center justify-center text-base m-0 p-0 text-center min-w-0 border-0 font-semibold">
                                                                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">Create new post</div>
                                                                </h3>
                                                                <div className="flex items-center justify-center basis-[48px] flex-col shrink-0 box-border">
                                                                   <div className="p-4 container-flex-0-auto-start">
                                                                        <button className="border-0 p-0 inline-block bg-none cursor-pointer text-ellipsis text-center text-sm w-auto font-semibold box-border text-[rgb(0,149,246)] select-none">Share</button>
                                                                   </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{height:"calc( 100vmin - 112px - 43px - 64px"}} className="w-full flex-auto flex flex-row max-h-[710px]">
                                                    <div style={{ width:"calc(100% - 340px)"}} className="opacity-[1] flex items-start h-full justify-center box-border flex-col relative">
                                                        <div className="flex items-center border-0 box-border flex-col shrink-0 w-full h-full justify-center m-0 p-0 relative align-baseline">
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <div className="w-full h-full flex-0-auto justify-center flex-col items-center">
                                                                    <div className=""></div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="bg-[rgb(250,250,250)] flex items-center border-0 box-border flex-col shrink-0 w-full h-full justify-center m-0 p-0 relative align-baseline">
                                                                <div className="top-[24px] z-[2] flex items-center box-border flex-col shrink-0 m-0 p-0 relative align-baseline"></div>
                                                                <div className="flex items-center h-full w-full touch-none shrink-0 flex-col relative box-border" >
                                                                    <div className="w-full h-full flex items-stretch border-0 box-border flex-col shrink-0 justify-center m-auto p-0 relative align-baseline cursor-crosshair">
                                                                        <img src="https://source.unsplash.com/random" alt="" className="w-full h-full border-0 m-0 p-0 align-baseline object-cover " />
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                            
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