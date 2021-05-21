import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {RiDownloadFill} from 'react-icons/Ri'
import { useTheme} from 'next-themes'

import Image from 'next/image'

export default function Sidebar() {

  const {theme, setTheme} = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/43428818?v=4" 
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
        height='128px'
        width="128px"
        layout="intrinsic"
        quality="100"
        />
        <h3 className="my-4 text-3xl font-medium tracking-wider font-Ubuntu">
          <span className="text-purple">Adam </span>
           Mohammed
        </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-700 dark:bg-black-500">
          Full Stack Developer
          </p>
          <a
          className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-700 dark:bg-black-500" 
          href="https://www.canva.com/design/DAEaJQFqN9Q/3SN6eAmM0wpp-S4-WxUCyw/view?utm_content=DAEaJQFqN9Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" 
          download="Adam Resume">
          <RiDownloadFill className="w-6 h-6 mr-2"/>Resume
        </a>
        <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full">
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
        <div className="py-4 my-5 bg-gray-200 dark:bg-dark-700 dark:bg-black-500" 
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
          <div className="flex items-center justify-center space-x-2">
            <GoLocation className="mr-1"/>
            <span>Toronto, Canada</span>
          </div>
          <p className="my-2 ">13.adamm@gmail.com</p>
          <p className="my-2 ">416-573-0735</p>
        </div>
        <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple-400 to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto:13.adamm@gmail.com')}>
        Email Me
        </button>
        <button onClick={changeTheme}
         className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple-400 to-blue-400 focus:outline-none">
        Dark Mode
        </button>
    </div>
  )
}
