import React from 'react'
import Stars from '../stars'

const Card = ({ property }) => {
  return (
    <div>
      <div className='relative pb-5/6'>
        <img className='absolute h-full w-full object-cover rounded-lg shadow-md' src={property.imageUrl} alt={property.imageAlt} />
      </div>
      <div className='relative px-4 -mt-16'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex items-baseline'>
            <span className='inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-medium tracking-wide'>New</span>
            <div className='ml-2 text-gray-600 text-xs uppercase font-medium tracking-wide'>
              { property.beds } beds &bull; { property.baths } baths
            </div>
          </div>
          <h4 className='mt-1 font-medium text-lg leading-tight truncate'>{ property.title }</h4>
          <div className='mt-1'>
            { property.formattedPrice }
            <span className='text-gray-600 text-sm'> / wk</span>
          </div>
          <div className='mt-2 flex items-center'>
            <Stars rating={property.rating} />
            <span className='ml-2 text-gray-600 text-sm'>{ property.reviewCount } reviews</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
