import React, { useState } from 'react'

import MenuIcon from '../menuIcon'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)
  const visibilityClass = isOpen
    ? 'block'
    : 'hidden'

  return (
    <header className='bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'>
      <div className='flex justify-between items-center px-4 py-3 sm:p-0'>
        <div>
          <img className='h-8' src='/img/logo-inverted.svg' alt="Workcation" />
        </div>
        <div className='sm:hidden'>
          <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={toggleOpen}>
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>
      </div>
      <div className={`${visibilityClass} px-2 pt-2 pb-4 sm:flex sm:p-0`}>
        <a className='block px-2 py-1 text-white font-medium rounded hover:bg-gray-800' href='#'>List your property</a>
        <a className='mt-1 block px-2 py-1 text-white font-medium rounded hover:bg-gray-800 sm:mt-0 sm:ml-2' href='#'>Trips</a>
        <a className='mt-1 block px-2 py-1 text-white font-medium rounded hover:bg-gray-800 sm:mt-0 sm:ml-2' href='#'>Messages</a>
      </div>
    </header>
  )
}

export default NavBar
