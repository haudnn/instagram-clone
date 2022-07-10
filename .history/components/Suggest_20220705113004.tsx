import React from 'react'
import Image from 'next/image'
const Suggest = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-row justify-between">
        <p className="text-sm font-medium text-gray-400 ">Suggestions For You</p>
        <p className="text-[0.8rem] text-black-400 font-medium">See All</p>
      </div>
      <div>
      <ul className="flex items-center flex-col">
          <li className="flex items-center justify-between w-full mt-3">
            <div className="flex items-center gap-x-4">
              <a>
                <Image src="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/281411812_404090348059968_6084890194476652799_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=QaEmN0H2F50AX9P0GF8&edm=AGeOuZUBAAAA&ccb=7-5&oh=00_AT9XTuWkz20WHYhCZqa4MSSRA2UKLO3eM3c-WCm9MRPKpA&oe=62C72485&_nc_sid=924bfa" alt="avater"
                  width={50}
                  height={50}
                  objectFit="cover"
                  className="rounded-full cursor-pointer"
                />
              </a>
              <div className="flex flex-col">
                <p className="font-bold text-sm cursor-pointer" >virusinmyeyes</p>
                <p className="text-sm text-slate-500 cursor-pointer">Suggested for you</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Suggest