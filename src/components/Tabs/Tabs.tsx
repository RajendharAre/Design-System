import React, { useState } from 'react';
import { useTheme } from '../ThemeProvider';

interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  variant?: 'default' | 'underline' | 'pills';
  orientation?: 'horizontal' | 'vertical';
  onTabChange?: (id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  variant = 'default',
  orientation = 'horizontal',
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0]?.id);
  const { colors } = useTheme();

  const handleTabClick = (id: string) => {
    if (items.find(item => item.id === id)?.disabled) return;
    setActiveTab(id);
    if (onTabChange) onTabChange(id);
  };

  const containerClasses = orientation === 'horizontal' 
    ? 'flex flex-row space-x-2' 
    : 'flex flex-col space-y-2';

  const getTabClasses = (tab: TabItem) => {
    const baseClasses = [
      'px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
      tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ];

    if (variant === 'underline') {
      baseClasses.push('border-b-2 rounded-none px-4 py-3');
      if (activeTab === tab.id) {
        baseClasses.push(`border-${colors.primary[500]}`);
      } else {
        baseClasses.push('border-transparent');
      }
    } else if (variant === 'pills') {
      if (activeTab === tab.id) {
        baseClasses.push(`bg-${colors.primary[500]} text-white`);
      } else {
        baseClasses.push('hover:bg-gray-100 dark:hover:bg-gray-800');
      }
    } else {
      // default variant
      if (activeTab === tab.id) {
        baseClasses.push(`bg-${colors.primary[100]} text-${colors.primary[700]}`);
      } else {
        baseClasses.push('hover:bg-gray-100 dark:hover:bg-gray-800');
      }
    }

    return baseClasses.join(' ');
  };

  return (
    <div className={containerClasses}>
      {items.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={getTabClasses(tab)}
          disabled={tab.disabled}
          aria-disabled={tab.disabled}
          aria-selected={activeTab === tab.id}
          role="tab"
          style={{
            color: activeTab === tab.id ? colors.primary[700] : colors.neutral[700],
            backgroundColor: activeTab === tab.id ? colors.primary[100] : 'transparent',
            borderColor: variant === 'underline' && activeTab === tab.id ? colors.primary[500] : 'transparent',
          }}
        >
          <div className="flex items-center">
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </div>
        </button>
      ))}
    </div>
  );
};