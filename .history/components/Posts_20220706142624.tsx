import React from 'react'
import PostItem from './PostItem'

const Posts = () => {
  return (
    <section className="mt-[16px]">
      <div className="flex flex-col gap-x-[15px]">
        <PostItem/>
        <PostItem/>
        <PostItem/>
      </div>
    </section>
  )
}

export default Posts