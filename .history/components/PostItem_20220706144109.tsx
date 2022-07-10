import React from 'react'

import { HiOutlineDotsHorizontal } from 'react-icons/hi';
const PostItem = () => {
  return (
    <div>
        <div className='flex items-center justify-between '>
          <div className="flex items-center gap-x-[10px]">
            <div className=" cursor-pointer w-[40px] h-[40px] conic-gradient relative rounded-full">
              <img
                src="https://picsum.photos/id/237/300/300"
                className="rounded-full md:rounded-full w-full h-full p-[2px]"
                alt=""
              />
            </div>
            <p className="cursor-pointer text-sm text-[#333] font-medium">_dieulinh16_</p>
          </div>
          <div className="cursor-pointer">
           <HiOutlineDotsHorizontal className='w-5 h-5'></HiOutlineDotsHorizontal>
          </div>
        </div>
    </div>
  )
}

export default PostItem