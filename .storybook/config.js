import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

const req = require.context('../src/components', true, /\.stories\.js$/)

/**
 * Load stories from "src/" that end in ".stories.js"
 */
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withKnobs);

configure(loadStories, module);
