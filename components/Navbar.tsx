import { useState } from 'react'

import Link from 'next/link';

export default function Navbar() {
  
  const [activeItem, setActiveItem] = useState<string>('')

  return (
    <div>
      <span classname="font-bold text-green">{activeItem}</span>
      <div className='text-red-400 font-lg flex space-x-3'>
        {activeItem !== 'About' && (
            <Link href="/">
              <a>
                <span onClick={() => setActiveItem('About')}>About</span>
             </a>
            </Link>
          )}
        {activeItem !== 'Projects' && (
            <Link href="/Projects">
              <a>
                <span onClick={() => setActiveItem('Projects')}>Projects</span>
             </a>
            </Link>
          )}
        {activeItem !== 'Resume' && (
            <Link href="/Resume">
              <a>
                <span onClick={() => setActiveItem('Resume')}>Resume</span>
             </a>
            </Link>
          )}
      </div>
    </div>
  )
}
