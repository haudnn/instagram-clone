import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegHeart } from "react-icons/fa";
import { RiChat1Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";
import { BiLabel } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
const PostItem = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-[15px]'>
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
      <div className="flex flex-row h-full">
        <ul>
          <li>
            <div className='w-[470px] flex flex-auto justify-start flex-col items-stretch'>
              <div>
                <div className='pb-[105.556%] block overflow-hidden relative'>
                  <img src="https://picsum.photos/200/300.jpg" alt="" className='absolute h-full left-0 top-0 w-full object-cover' />
                </div>
                <div className="absolute inset-0"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex">
          <FaRegHeart></FaRegHeart>
          <RiChat1Line></RiChat1Line>
          <TbLocation></TbLocation>
        </div>
        <div className='flex'>
          <BsDot></BsDot>
          <BsDot></BsDot>
          <BsDot></BsDot>
        </div>
        <div>
          <BiLabel></BiLabel>
        </div>
      </div>
    </div>
  )
}

export default PostItem