import React from 'react'
import PostItem from './PostItem'

const Posts = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-y-[15px] flex-wrap">
        <PostItem/>
        <PostItem/>
        <PostItem/>
      </div>
    </section>
  )
}

export default Posts