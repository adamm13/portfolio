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
        <h3 className="my-4 text-3xl font-medium tracking-wide">
          <span>Adam</span>
           Mohammed
        </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
          Web Developer
          </p>
          <a
          className="px-2 py-1 my-3 bg-gray-200 rounded-full" 
          href="" 
          download="name">
          <GiTie className="w-6 h-6"/>Download Resume
        </a>
        <div>
          <a href="">
            <AiFillYoutube className="w-8 h-8"/>
          </a>
          <a href="">
            <AiFillGithub className="w-8 h-8"/>
          </a>
          <a href="">
            <AiFillLinkedin className="w-8 h-8"/>
          </a>
        </div>
        <div>
          <div>
            <GoLocation/>
            <span>Toronto, Canada</span>
          </div>
          <p>13.adamm@gmail.com</p>
          <p>416-573-0735</p>
        </div>
        <button>Email Me</button>
        <button>Toggle Theme</button>
    </div>
  )
}
