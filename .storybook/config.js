import React from 'react'
import '../src/assets/styles/index.css'
import { configure, addDecorator, addParameters } from '@storybook/react'

const tailwindBreakPoints = {
  xs: {
    name: 'Tailwind XS',
    styles: {
      width: '320px',
      height: '100%'
    }
  },
  sm: {
    name: 'Tailwind SM',
    styles: {
      width: '640px',
      height: '100%'
    }
  },
  md: {
    name: 'Tailwind MD',
    styles: {
      width: '768px',
      height: '100%'
    }
  },
  lg: {
    name: 'Tailwind LG',
    styles: {
      width: '1024px',
      height: '100%'
    }
  },
  xl: {
    name: 'Tailwind XL',
    styles: {
      width: '1280px',
      height: '100%'
    }
  }
}

addParameters({
  viewport: {
    viewports: tailwindBreakPoints
  }
})

addDecorator(
  story => (
    <div className='bg-gray-200 antialiased text-gray-900 min-h-screen'>
      {story()}
    </div>
  )
)

configure(
  require.context('../src/components', true, /\.stories\.js$/),
  module
)
