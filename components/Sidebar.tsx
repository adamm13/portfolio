import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

export default function Sidebar() {
  return (
    <div>
      <img 
        src="https://avatars.githubusercontent.com/u/43428818?v=4" 
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wider font-Ubuntu">
          <span className="text-green">Adam </span>
           Mohammed
        </h3>
        <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full">
          Web Developer
          </p>
          <a
          className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" 
          href="" 
          download="name">
          <GiTie className="w-6 h-6"/>Download Resume
        </a>
        <div className="flex justify-around my-5 text-blue-500 w-9/12 md:w-full mx-auto">
          <a href="">
            <AiFillYoutube className="w-8 h-8 cursor-pointer"/>
          </a>
          <a href="">
            <AiFillGithub className="w-8 h-8 cursor-pointer"/>
          </a>
          <a href="">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
          </a>
        </div>

        {/* address */}
        <div className="py-4 my-5 bg-gray-200" style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
          <div className="flex items-center justify-center space-x-2">
            <GoLocation className="mr-2"/>
            <span>Toronto, Canada</span>
          </div>
          <p className="my-2 ">13.adamm@gmail.com</p>
          <p className="my-2 ">416-573-0735</p>
        </div>
        <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
        onClick={() => window.open('mailto:13.adamm@gmail.com')}>
        Email Me
        </button>
        <button className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none">
        Dark Mode
        </button>
    </div>
  )
}
