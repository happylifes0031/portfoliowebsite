import { configure } from '@storybook/react';

const loadStories = () => {
  const load = require.context('../src', true, /stories\.+(jsx|tsx)$/);
  return load.keys().forEach(load);
};

configure(loadStories, module);
