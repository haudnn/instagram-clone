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
      <div className="flex flex-row my-[15px] px-[12px] gap-x-3">
        <span>
          <FaRegHeart className="w-6 h-6 hover:text-slate-500"></FaRegHeart>
        </span>
        <span>
          <RiChat1Line className="w-6 h-6 hover:text-slate-500"></RiChat1Line>
        </span>
        <span>
          <TbLocation className="w-6 h-6 hover:text-slate-500"></TbLocation>
        </span>
        <span className="ml-auto mr-[-10px] inline-block hover:text-slate-500 ">
          <BiLabel className="w-6 h-6"></BiLabel>
        </span>
      </div>
      <div>
        <div>
          <div className="mb-2 px-[12px] flex flex-row justify-end">
            <div className='flex flex-auto min-h-0 min-w-0 justify-end flex-row items-stretch'>
              <div className="flex">
                <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                  <div className="flex flex-auto justify-end flex-row items-center ">
                    <div className="w-5 h-5 order-2 cursor-pointer border-2 border-white rounded-[50%] box-content">
                      <span className="w-5 h-5 bg-zinc-50 rounded-[50%] box-border block overflow-hidden flex-auto relative">
                        <img src="https://picsum.photos/200/300.jpg" alt="" className="img-circle h-ful w-full m-0 p-0 align-baseline" />
                      </span>
                    </div>
                    <div className="w-5 h-5 order-1 mr-[-9px] cursor-pointer border-2 border-white rounded-[50%] box-content">
                      <span className="w-5 h-5 bg-zinc-50 rounded-[50%] box-border block overflow-hidden flex-auto relative">
                        <img src="https://picsum.photos/200/300.jpg" alt="" className="img-circle h-ful w-full m-0 p-0 align-baseline" />
                      </span>
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

export default PostItem