import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <div className="max-w-screen-lg flex items-center justify-between m-auto p-6 box-border ">
                <div>
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                        width={103}
                        height={29}
                        layout="fill"
                    />
                </div>
                <div>
                    <p>2</p>
                </div>
                <nav>
                    <p>3</p>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header