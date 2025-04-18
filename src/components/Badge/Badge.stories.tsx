import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'info'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    rounded: {
      control: {
        type: 'select',
        options: ['none', 'sm', 'md', 'lg', 'full'],
      },
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Badge>> = (args: React.ComponentProps<typeof Badge>) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error',
  variant: 'error',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Info',
  variant: 'info',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large',
  size: 'lg',
};

export const FullRounded = Template.bind({});
FullRounded.args = {
  children: 'Full Rounded',
  rounded: 'full',
};

export const AllVariants = () => (
  <div className="space-x-2">
    <Badge variant="primary">Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="tertiary">Tertiary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="info">Info</Badge>
  </div>
);