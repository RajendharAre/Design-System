import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'borderless'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Accordion>> = (args: React.ComponentProps<typeof Accordion>) => (
  <Accordion {...args}>
    <p>This is the content inside the accordion. It can be any React node.</p>
    <ul className="list-disc pl-5 mt-2">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
};

export const Borderless = Template.bind({});
Borderless.args = {
  title: 'Borderless Accordion',
  variant: 'borderless',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Accordion',
  disabled: true,
};

export const MultipleAccordions = () => (
  <div className="space-y-2">
    <Accordion title="First Accordion">
      <p>Content for first accordion</p>
    </Accordion>
    <Accordion title="Second Accordion">
      <p>Content for second accordion</p>
    </Accordion>
    <Accordion title="Third Accordion" variant="borderless">
      <p>Content for third accordion</p>
    </Accordion>
  </div>
);