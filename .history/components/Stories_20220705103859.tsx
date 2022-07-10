import React, { useState, useCallback, useRef } from 'react'
import ThumnailStory from './ThumnailStory'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
const Stories = () => {
  const [isMoved, setIsMoved] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)
  const handleClick = useCallback((direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }, [])
  return (
    <section className="h-40 space-y-0.5 md:space-y-2">
      <div className="relative group md:-ml-2">
        <div className="h-6 w-6 absolute top-0 bottom-0 left-2 z-40 m-auto bg-white rounded-full p-2 cursor-pointer">
          <IoIosArrowBack className={`h-5 w-5 ${!isMoved && "hidden"}text-black`}
            onClick={() => handleClick("left")}
          />
        </div>
        <div ref={rowRef} className="flex items-center space-x-0.5 overflow-x-hidden scrollbar-hide md:space-x-2.5 md:p-2">
          <ThumnailStory />
        </div>
        <IoIosArrowForward className="bg-white absolute top-0 bottom-0 right-2 z-40 m-auto h-5 w-5 rounded-full cursor-pointer opacity-0 transition group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </section>
  )
}

export default Stories