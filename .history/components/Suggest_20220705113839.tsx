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
            <div className="flex gap-x-3">
              <a className="flex items-center">
                <Image src="https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/281411812_404090348059968_6084890194476652799_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=QaEmN0H2F50AX9P0GF8&edm=AGeOuZUBAAAA&ccb=7-5&oh=00_AT9XTuWkz20WHYhCZqa4MSSRA2UKLO3eM3c-WCm9MRPKpA&oe=62C72485&_nc_sid=924bfa" alt="avater"
                  width={32}
                  height={32}
                  objectFit="cover"
                  className="rounded-full cursor-pointer"
                />
              </a>
              <div className="flex flex-col items-stretch flex-auto">
                <p className="font-medium text-sm cursor-pointer" >virusinmyeyes</p>
                <p className="text-xs text-slate-400 cursor-pointer">Suggested for you</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-blue-400">Follow</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Suggest