import React from 'react'

const PostItem = () => {
  return (
    <div>
      <div>
        <div>
        <div className="flex items-center gap-x-[5px]">
          <div className=" cursor-pointer conic-gradient relative rounded-full mb-3">
            <img
              src="https://picsum.photos/id/237/300/300"
              className="rounded-full md:rounded-full w-full h-full p-[2px]"
              alt=""
            />
          </div>
          <p className="cursor-pointer text-sm text-[#333] font-medium">_dieulinh16_</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem