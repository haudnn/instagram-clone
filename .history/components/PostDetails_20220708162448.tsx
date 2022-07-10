import React from 'react'
const PostDetails = () => {
  return (
    <div className="fixed inset-0 box-border w-full overflow-y-auto overflow-x-auto h-full bg-modal z-[90] ">
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full rounded-[4px] calc-height-modal overflow-x-auto m-auto">
                <div className="flex flex-col w-full h-full">
                    <article className="w-full max-h-[inherit] p-0">
                        <div className="max-h-[inherit] max-w-[inherit] flex flex-0-auto justify-center flex-row items-stretch ">
                            <div className="aspect-img bg-black grow justify-center min-h-[450px] overflow-hidden shrink flex relative items-stretch flex-col">
                                <div className="left-0 relative top-0 flex">
                                    <div className="block">
                                        <div className="pb-[125%] block"></div>
                                        <div className="absolute flex inset-0 flex-0-auto justify-start flex-col items-stretch">
                                            <div className="w-full h-full">
                                                <div className="flex overflow-x-auto overflow-y-hidden h-full flex-row">
                                                    <div className="flex h-full flex-row">
                                                        <ul className="flex flex-row">
                                                            <li className="w-[1px] translate-x-[1320.59px]"></li>
                                                            <li className="translate-x-0 absolute align-baseline m-0 p-0">
                                                                <div className="w-[660.797px] flex flex-0-auto justify-start flex-col items-stretch">
                                                                    <div className="touch-manipulation">
                                                                        <div className="flex">
                                                                            <div className="block w-full bg-[rgb(239,239,239)]">
                                                                                <div className="pb-[125%] relative block overflow-hidden">
                                                                                    <img src="https://source.unsplash.com/random" alt="" className="object-cover h-full left-0 absolute top-0 select-none w-full"/>
                                                                                </div>
                                                                                <div className="absolute inset-0"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails