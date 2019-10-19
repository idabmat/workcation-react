import React from 'react'

import NavBar from '.'

export default {
  title: 'NavBar',
  decorators: [
    (story) => <div className='-m-6'>{story()}</div>
  ]
}

export const defaultNavBar = () => <NavBar />
