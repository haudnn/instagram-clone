import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-6">
      <div className="min-w-[320px]">
        <ul className="flex flex-row flex-wrap w-full">
          <li>
            <a href="/" className="text-xs text-stone-300 font-medium">
              About
            </a>
            <span>.</span>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer