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
        <div>
          <div>
            <img src="https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-15/292050208_593324782138436_1981547217930212640_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ZAOdvpZI5cMAX9STkAw&tn=HGj1aPU4J3Dfdjth&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg3NjE5MjkxMzQyNTc2NDI5Mw%3D%3D.2-ccb7-5&oh=00_AT_cIXkBIefV72hZQ5lXL2lFf1t_M9T6rujtHiepdXuZ4g&oe=62CB85A0&_nc_sid=6136e7" alt="" />
          </div>
        </div>
    </div>
  )
}

export default PostItem