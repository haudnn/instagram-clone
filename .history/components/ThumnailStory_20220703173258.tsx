import Image from 'next/image'
import React from 'react'

const ThumnailStory = () => {
  return (
    <div>
       <div className="relative min-w-[56px] min-h-[56px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[56px]">
          <div className="w-32 h-32 conic-gradient relative rounded-full">
            <image
              src="https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-19/290976956_1364809047360012_4875358875881246704_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=6XIhocKzJzQAX9Ce2tk&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT8fK6uvVM17ZxLssHBFMQhAnXw201y75mOwJasi7fd0jQ&oe=62C7A75C&_nc_sid=cff2a4"
              className="rounded-full object-cover md:rounded-full w-full h-full"
            />
          </div>
          <p className="cursor-pointer text-xs text-[#333] transition duration-200">_dieulinh16_</p>
        </div>
    </div>
  )
}

export default ThumnailStory