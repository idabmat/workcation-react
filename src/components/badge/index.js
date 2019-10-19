import React from 'react'

const Badge = ({ children }) => {
  return (
    <span className='inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-medium tracking-wide'>{ children }</span>
  )
}

export default Badge
