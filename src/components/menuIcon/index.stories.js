import React from 'react'

import MenuIcon from '.'

export default {
  title: 'MenuIcon'
}

export const closedMenuIcon = () => <MenuIcon isOpen={false} />
export const openMenuIcon = () => <MenuIcon isOpen={true} />
