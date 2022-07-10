import Image from 'next/image'
import React from 'react'

const Story = () => {
  return (
    <section>
       <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={``}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
    </section>
  )
}

export default Story