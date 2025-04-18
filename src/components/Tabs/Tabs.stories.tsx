import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tabs } from './Tabs';
import { Home, User, Settings } from 'react-feather';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'underline', 'pills'],
      },
    },
    orientation: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Tabs>> = (args) => <Tabs {...args} />;

const tabItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <Home size={16} />,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <User size={16} />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={16} />,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
];

export const Default = Template.bind({});
Default.args = {
  items: tabItems,
};

export const UnderlineVariant = Template.bind({});
UnderlineVariant.args = {
  items: tabItems,
  variant: 'underline',
};

export const PillsVariant = Template.bind({});
PillsVariant.args = {
  items: tabItems,
  variant: 'pills',
};

export const VerticalOrientation = Template.bind({});
VerticalOrientation.args = {
  items: tabItems,
  orientation: 'vertical',
};

export const ControlledTabs = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  
  return (
    <div>
      <Tabs 
        items={tabItems} 
        defaultActiveTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="mt-4 p-4 border rounded">
        {activeTab === 'home' && <p>Home content</p>}
        {activeTab === 'profile' && <p>Profile content</p>}
        {activeTab === 'settings' && <p>Settings content</p>}
      </div>
    </div>
  );
};