import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Home, Settings, User, FileText, Mail } from 'react-feather';

export default {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  argTypes: {
    defaultCollapsed: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Sidebar>> = (args) => (
  <div className="h-screen">
    <Sidebar {...args} />
  </div>
);

const items = [
  {
    id: 'home',
    label: 'Home',
    icon: <Home size={20} />,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <User size={20} />,
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: <FileText size={20} />,
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <Mail size={20} />,
    disabled: true,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={20} />,
  },
];

const logo = (
  <div className="font-bold text-lg flex items-center">
    <span className="text-blue-500">LOGO</span>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items,
  logo,
};

export const CollapsedByDefault = Template.bind({});
CollapsedByDefault.args = {
  items,
  logo,
  defaultCollapsed: true,
};

export const CustomWidths = Template.bind({});
CustomWidths.args = {
  items,
  logo,
  collapsedWidth: '5rem',
  expandedWidth: '20rem',
};

export const WithActiveItem = () => {
  const [activeItem, setActiveItem] = React.useState('profile');
  
  return (
    <div className="h-screen">
      <Sidebar 
        items={items} 
        logo={logo}
        onItemClick={setActiveItem}
      />
      <div className="ml-16 p-4">
        <p>Active item: {activeItem}</p>
      </div>
    </div>
  );
};