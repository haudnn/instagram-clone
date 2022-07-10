import React from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegHeart,FaRegSmile } from "react-icons/fa";
import { RiChat1Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";
import { BiLabel } from "react-icons/bi";
import { BsDot, BsHeartFill, BsHeart } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
const PostItem = () => {
  return (
    <div className="border rounded-lg shadow-sm">
      <div className='flex items-center justify-between mb-[15px] px-[12px] pt-[12px]'>
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
      <div className="flex flex-0-auto justify-start flex-col items-stretch">
        <div className="rounded-lg pointer-events-auto bg-white">
          <div className="p-0 w-full">
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
              <span className="ml-auto  inline-block hover:text-slate-500 ">
                <BiLabel className="w-6 h-6"></BiLabel>
              </span>
            </div>
            <div className="mb-2 px-[12px] flex flex-row justify-end">
              <div className="flex justify-start flex-row items-stretch flex-auto min-h-0 min-w-0">
                <div className='flex flex-0-auto justify-start flex-col items-start mr-1'>
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
                      <div className="w-5 h-5 order-0 mr-[-9px] cursor-pointer border-2 border-white rounded-[50%] box-content">
                        <span className="w-5 h-5 bg-zinc-50 rounded-[50%] box-border block overflow-hidden flex-auto relative">
                          <img src="https://picsum.photos/200/300.jpg" alt="" className="img-circle h-ful w-full m-0 p-0 align-baseline" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-auto flex flex-wrap flex-auto min-h-0 min-w-0 justify-start items-stretch ">
                  <div className="block text-neutral-800 font-normal m-0 text-sm">
                    Liked by {" "}
                    <a href="/" className="">
                      <div className="inline m-0 text-sm font-semibold text-neutral-800">alihoangduong</div>
                    </a>
                    {""} and {""}
                    <a href="/" className="">
                      <div className="inline m-0 text-sm font-semibold text-neutral-800">others</div>
                    </a>
                  </div>
                </div>

              </div>
            </div>
            <div className="px-[12px]">
              <div className="flex flex-0-auto justify-start flex-col items-stretch">
                <div className="mb-2 flex flex-0-auto justify-start flex-col items-stretch">
                  <div className="flex justify-start flex-row items-stretch flex-auto min-h-0 min-w-0">
                    <div className="block justify-start flex-row items-stretch flex-auto min-h-0 min-w-0">
                      <span className="inline relative">
                        <a href="/">
                          <span className="inline m-0 text-sm font-semibold text-neutral-800">sunihalinh {""}</span>
                        </a>
                      </span>
                      <span>{""}</span>
                      <span className="inline m-0 text-sm font-normal text-neutral-800">
                        <span className="inline m-0 text-sm font-normal text-neutral-800">Mùa hạ ơi</span>
                        <span>... {""}
                          <div className="cursor-pointer inline">
                            <div className="cursor-pointer inline m-0 text-sm font-normal text-neutral-400">
                              more
                            </div>
                          </div>
                        </span>

                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-2 flex flex-0-auto justify-start flex-col items-stretch">
                  <a href="/">
                    <div className="block text-neutral-400 font-normal m-0 text-sm">
                      View all {""}
                      <span>53 {""}</span>
                      {""}comments
                    </div>
                  </a>
                </div>
                <div className="mb-2 flex flex-0-auto justify-start flex-col items-stretch">
                  <div className="mb-1 flex flex-0-auto justify-start flex-row items-center">
                    <div className="block justify-start flex-col items-stretch flex-auto min-h-0 min-w-0">
                      <span className="inline relative">
                        <a href="/" className="hover:underline">
                          <span className="inline m-0 text-sm font-semibold text-neutral-800">tramngo.official {""}</span>
                        </a>
                      </span>
                      <span>
                        <span className="inline m-0 text-sm font-normal text-neutral-800">Rất là xinh nha chị ơi</span>
                      </span>
                    </div>
                    <span>
                      <div className="cursor-pointer">
                        <button className="flex items-center bg-transparent outline-none cursor-pointer border-none p-0">
                          <div>
                            <span className="duration-[45ms] ease-in-out scale-100">
                              <BsHeart className="w-3 h-3 text-neutral-800 block relative"></BsHeart>
                            </span>
                          </div>
                        </button>
                        {/* <BsHeartFill color="red"></BsHeartFill> */}
                      </div>
                    </span>
                  </div>
                  <div className="mb-1 flex flex-0-auto justify-start flex-row items-center">
                    <div className="block justify-start flex-col items-stretch flex-auto min-h-0 min-w-0">
                      <span className="inline relative">
                        <a href="/" className="hover:underline">
                          <span className="inline m-0 text-sm font-semibold text-neutral-800">sunihalinh {""}</span>
                        </a>
                      </span>
                      <span>
                        <span className="inline m-0 text-sm font-normal text-neutral-800"><a href="" className="text-blue-800">
                          @tramngo.official
                        </a> củm ơn cô gái</span>
                      </span>
                    </div>
                    <span>
                      <div className="cursor-pointer">
                        <button className="flex items-center bg-transparent outline-none cursor-pointer border-none p-0">
                          <div>
                            <span className="duration-[45ms] ease-in-out scale-100">
                              <BsHeart className="w-3 h-3 text-neutral-800 block relative"></BsHeart>
                            </span>
                          </div>
                        </button>
                        {/* <BsHeartFill color="red"></BsHeartFill> */}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-3 mb-3">
              <a href="">
                <div className="inline m-0 text-neutral-400 font-normal text-[0.6rem]">
                  <span className="tracking-normal uppercase">2 days ago</span>
                </div>
              </a>
            </div>
            <div className="px-[12px] border-t border-gray-200 flex shrink-0 text-sm justify-center py-1">
              <div>
                <form action="POST" className="flex items-center flex-row border-0 grow shrink relative align-baseline m-0 p-0 text-[100%]">
                  <div className="flex py-4 pr-3 pl-0">
                      <button className="flex items-center bg-transparent outline-none cursor-pointer border-none p-0">
                          <FaRegSmile className="w-6 h-6 text-neutral-800 block relative"></FaRegSmile>
                      </button>
                      {/* <div className="right-[12px] bottom-[360px]"></div> */}
                  </div>
                  <textarea placeholder="Add a comment..." autoComplete="off" autoCorrect='off' className="h-[18px] border-none text-neutral-800 flex grow max-h-[80px] outline-none p-0 w-0 resize-none"></textarea>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem