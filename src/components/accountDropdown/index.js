import React, { useState, useEffect } from 'react'

const BackDrop = ({isOpen, close}) => {
  if (!isOpen) return null

  return (
    <button tabindex='-1' className='fixed inset-0 h-full w-full bg-black opacity-50 cursor-default' onClick={close}></button>
  )
}

const Menu = ({isOpen}) => {
  if (!isOpen) return null

  return (
    <div className='absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl'>
      <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>Account settings</a>
      <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>Support</a>
      <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'>Sign out</a>
    </div>
  )
}
const AccountDropdown = ({ avatarUrl }) => {
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!isOpen)
  const close = () => setOpen(false)
  const handleEscape = (event) => {
    if (event.key === 'Esc' || event.key === 'Escape') {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  })

  return (
    <div className='relative'>
      <button className='relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white' onClick={toggleOpen}>
        <img className='h-full w-full object-cover' src={avatarUrl} alt='Your avatar' />
      </button>
      <BackDrop isOpen={isOpen} close={close} />
      <Menu isOpen={isOpen} />
    </div>
  )
}

export default AccountDropdown
