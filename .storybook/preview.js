import React from 'react';
import { ThemeProvider } from '../src/components/ThemeProvider';
import '../src/styles/global.css';

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <div className="p-4">
        <Story />
      </div>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Foundations', 
        ['Color System'],
        'Components', 
        ['Data Display', 'Navigation'],
      ],
    },
  },
};