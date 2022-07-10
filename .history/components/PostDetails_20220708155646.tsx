import React from 'react'

const PostDetails = () => {
  return (
    <div className="fixed inset-0 box-border w-full overflow-y-auto overflow-x-auto h-full bg-modal z-[90] ">
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full rounded-[4px] calc-height-modal overflow-x-auto m-auto">
                <div className="flex flex-col w-full h-full">
                    <article className="w-full max-h-[inherit] p-0">
                        <div className="max-h-[inherit] max-w-[inherit] flex flex-0-auto justify-center flex-row items-stretch ">
                            <div className="max-h-[517px] max-w-[396.6px] basis-[396.6px] aspect-img bg-black grow justify-center min-h-[450px] overflow-hidden shrink flex relative items-stretch flex-col">
                                <div className="left-0 relative top-0 flex">

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