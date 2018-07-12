import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs/react';
import CustomButton from './CustomButton';

storiesOf('CustomButton', module)
  .add('with text', () => (
    <CustomButton onClick={action('clicked')}>Hello Button</CustomButton>
  ))
  .add('with some emoji', () => (
    <CustomButton onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></CustomButton>
  ))
  .add('with dynamic text', () => (
    <CustomButton disabled={boolean('Disabled', false)} onClick={action('clicked')}>
      {text('Label', 'Change me')}
    </CustomButton>
  ));
