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
                                <div style={{ maxHeight: "calc(100vh - 40px)" }} className="bg-white overflow-y-auto overflow-x-auto rounded-r-xl rounded-l-xl ">
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
                                                <div style={{ height: "calc( 100vmin - 112px - 43px - 64px" }} className="w-full flex-auto flex flex-row max-h-[710px]">
                                                    <div style={{ width: "calc(100% - 340px)" }} className="opacity-[1] flex items-start h-full justify-center box-border flex-col relative">
                                                        <div className="flex items-center border-0 box-border flex-col shrink-0 w-full h-full justify-center m-0 p-0 relative align-baseline">
                                                          
                                                            <div className="bg-[rgb(250,250,250)] flex items-center border-0 box-border flex-col shrink-0 w-full h-full justify-center m-0 p-0 relative align-baseline">
                                                                <div className="top-[24px] z-[2] flex items-center box-border flex-col shrink-0 m-0 p-0 relative align-baseline"></div>
                                                                <div className="flex items-center h-full w-full touch-none shrink-0 flex-col relative box-border" >
                                                                    <div className="w-full h-full flex items-stretch border-0 box-border flex-col shrink-0 justify-center m-auto p-0 relative align-baseline cursor-crosshair">
                                                                        <img src="https://source.unsplash.com/random" alt="" className="w-full h-full border-0 m-0 p-0 align-baseline object-cover " />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="opacity-[1] flex box-border borde-l border-solid border-l-[rgb(219,219,219)] w-[340px] flex-col relative ">
                                                        <div className="flex flex-auto min-h-0 min-w-0 justify-start flex-col items-stretch">
                                                            <div className="max-h-full min-h-[99%]">
                                                                <div className=" flex flex-auto items-stretch border-0 box-border flex-col m-0 p-0 relative align-baseline overflow-x-hidden overflow-y-auto">
                                                                    <div className="mx-4 container-flex-0-auto-start">
                                                                        <div className="mt-[18px] mb-[14px] p-0 flex items-stretch border-0 box-border flex-col relative align-baseline shrink-0 ">
                                                                            <div className="flex flex-0-auto flex-row justify-start items-center">
                                                                                <div className="mr-[12px] container-flex-0-auto-start">
                                                                                    <span className="w-[28px] h-[28px] bg-[rgb(250,250,250)] rounded-full box-border block flex-0-auto overflow-hidden relative">
                                                                                        <img src="https://source.unsplash.com/random" alt="" className="w-full h-full align-baseline p-0 m-0 border-0"/>
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex flex-auto min-h-0 min-w-0 justify-center flex-col items-stretch">
                                                                                    <div className="container-flex-0-auto-start">
                                                                                        <div className="block overflow-hidden text-ellipsis whitespace-nowrap mt-[-3px] mb-[-4px]">
                                                                                            <div className="inline m-0 font-semibold text-neutral-800 text-base ">ngoc.hauu19</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="container-flex-0-auto-start">
                                                                        <div className="container-flex-0-auto-start">
                                                                            <textarea autoComplete="off" autoCorrect='off' placeholder="Write a caption..." className="bg-none overflow-auto px-4 resize-none max-h-[168px] min-h-[168px] text-base m-0 border-none outline-none"></textarea>
                                                                        </div>
                                                                        <div className="flex justify-between items-stretch border-0 box-border flex-row shrink-0 m-0 p-0 relative align-baseline">
                                                                            <div className="flex py-1 px-2 flex-auto min-h-0 min-w-0 justify-start">

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="w-full h-full flex items-center justify-center">
                                                        <div className="w-full h-full p-[24px] flex flex-0-auto justify-center flex-col items-center">
                                                            <svg aria-label="Icon to represent media such as images or videos" className="block relative text-neutral-800 " color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
                                                            <div className="flex flex-0-auto justify-start flex-col items-strech mt-4">
                                                                <h2 className="text-center font-light text-neutral-800 text-xl mt-[-4px] mb-[-5px]">Drag photos and videos here</h2>
                                                            </div>
                                                            <div className="flex flex-0-auto justify-start flex-row items-center mt-6">
                                                                <label className="flex flex-0-auto justify-start flex-col items-strech p-1" htmlFor="File-For">
                                                                    <div className="button-add-pic">Select from computer</div>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form encType='multipart/form-data' action="" method="POST">
                                                        <input accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime" type="file" id="File-For" className="!hidden" multiple/>
                                                    </form> */}
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