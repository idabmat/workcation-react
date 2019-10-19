import React from 'react';

import { action } from '@storybook/addon-actions';
import Stars from '.';

export default {
  title: 'Stars',
  decorators: [
    (story) => <div className='flex'>{story()}</div>
  ]
};

export const rating0 = () => (
  <Stars rating={0} />
)

export const rating1 = () => (
  <Stars rating={1} />
)

export const rating2 = () => (
  <Stars rating={2} />
)

export const rating3 = () => (
  <Stars rating={3} />
)
export const rating4 = () => (
  <Stars rating={4} />
)
export const rating5 = () => (
  <Stars rating={5} />
)
