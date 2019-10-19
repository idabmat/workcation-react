import React from 'react'

import AccountDropdown from '.'

export default {
  title: 'Account Dropdown',
  decorators: [
    (story) => <div className='bg-gray-800 p-6 min-h-screen'>{story()}</div>
  ]
}

const avatarUrl = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'

export const basicDropdown = () => <AccountDropdown avatarUrl={avatarUrl} />
