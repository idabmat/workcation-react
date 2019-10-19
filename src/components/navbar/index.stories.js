import React from 'react'

import NavBar from '.'

export default {
  title: 'NavBar'
}

const avatarUrl = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
const userName = 'Jane Doe'

export const defaultNavBar = () => <NavBar avatarUrl={avatarUrl} userName={userName} />
