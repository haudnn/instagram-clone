import Image from 'next/image'
import React from 'react'

const ThumnailStory = () => {
  return (
    <div>
       <div className="min-w-[56px] min-h-[56px] cursor-pointer transition duration-200 ease-out md:h-56 md:min-w-[56px]">
          <div className="w-[56px] h-[56px] conic-gradient relative rounded-full mb-3">
            <img
              src="https://picsum.photos/id/237/300/300"
              className="rounded-full md:rounded-full w-full h-full  bg-white"
              alt=""
            />
          </div>
          <p className="cursor-pointer text-xs text-[#333] transition duration-200">_dieulinh16_</p>
        </div>
    </div>
  )
}

export default ThumnailStory