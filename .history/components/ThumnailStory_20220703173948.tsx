import Image from 'next/image'
import React from 'react'

const ThumnailStory = () => {
  return (
    <div>
       <div className="min-w-[56px] min-h-[56px] cursor-pointer transition duration-200 ease-out md:h-56 md:min-w-[56px]">
          <div className="w-32 h-32 conic-gradient relative rounded-full">
            <img
              src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GkV1pgR-JMkAX8VNcYg&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-Qi2G8FDkFZnConaohfseHBuI6XOJI92fx26QMVkrtqA&oe=62E62778"
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