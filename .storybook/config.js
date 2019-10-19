import React from 'react'
import '../src/assets/styles/index.css'
import { configure, addDecorator } from '@storybook/react'

addDecorator(
  story => (
    <div className='bg-gray-200 p-6 antialiased text-gray-900 min-h-screen'>
      {story()}
    </div>
  )
)

configure(
  require.context('../src/components', true, /\.stories\.js$/),
  module
)
