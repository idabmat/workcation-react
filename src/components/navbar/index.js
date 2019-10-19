import React, { useState } from 'react'

import MenuIcon from '../menuIcon'
import AccountDropdown from '../accountDropdown'

const NavBar = ({ avatarUrl, userName }) => {
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
      <nav className={`${visibilityClass} sm:block`}>
        <div className='px-2 pt-2 pb-4 sm:flex sm:p-0'>
          <a className='block px-2 py-1 text-white font-medium rounded hover:bg-gray-800' href='#'>List your property</a>
          <a className='mt-1 block px-2 py-1 text-white font-medium rounded hover:bg-gray-800 sm:mt-0 sm:ml-2' href='#'>Trips</a>
          <a className='mt-1 block px-2 py-1 text-white font-medium rounded hover:bg-gray-800 sm:mt-0 sm:ml-2' href='#'>Messages</a>
          <div className='hidden sm:block sm:ml-6'>
            <AccountDropdown avatarUrl={avatarUrl} />
          </div>
        </div>
        <div className='px-4 py-5 border-t border-gray-700 sm:hidden'>
          <div className='flex items-center'>
            <img className='h-8 w-8 border-2 border-gray-600 rounded-full object-cover' src={avatarUrl} alt='Your avatar' />
            <span className=' ml-3 font-medium text-white'>{userName}</span>
          </div>
          <div className='mt-4'>
            <a href='#' className='block text-gray-400 hover:text-white'>Account settings</a>
            <a href='#' className='mt-2 block text-gray-400 hover:text-white'>Support</a>
            <a href='#' className='mt-2 block text-gray-400 hover:text-white'>Sign out</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
