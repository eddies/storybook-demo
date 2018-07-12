import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CustomButton from './CustomButton';

storiesOf('CustomButton', module)
  .add('with text', () => (
    <CustomButton onClick={action('clicked')}>Hello Button</CustomButton>
  ))
  .add('with some emoji', () => (
    <CustomButton onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></CustomButton>
  ));
