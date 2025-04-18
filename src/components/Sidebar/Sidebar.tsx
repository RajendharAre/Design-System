import React, { useState } from 'react';
import { useTheme } from '../ThemeProvider';

interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
  logo?: React.ReactNode;
  collapsedWidth?: string;
  expandedWidth?: string;
  defaultCollapsed?: boolean;
  onItemClick?: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  logo,
  collapsedWidth = '4rem',
  expandedWidth = '16rem',
  defaultCollapsed = false,
  onItemClick,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { colors, mode } = useTheme();

  const handleItemClick = (item: SidebarItem) => {
    if (item.disabled) return;
    setActiveItem(item.id);
    if (item.onClick) item.onClick();
    if (onItemClick) onItemClick(item.id);
  };

  return (
    <div
      className={`flex flex-col h-full transition-all duration-200 overflow-hidden`}
      style={{
        width: collapsed ? collapsedWidth : expandedWidth,
        backgroundColor: colors.surface[mode],
        borderRight: `1px solid ${colors.border}`,
      }}
    >
      {logo && (
        <div className="p-4 flex items-center justify-center">
          {React.isValidElement(logo) ? (
            <div
              style={{
                width: collapsed ? '2rem' : 'auto',
                transition: 'width 0.2s ease',
              }}
            >
              {logo}
            </div>
          ) : (
            logo
          )}
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        <nav>
          <ul className="space-y-1 p-2">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item)}
                  className={`w-full flex items-center p-3 rounded-md transition-colors duration-200 ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-10 hover:bg-gray-500'}`}
                  style={{
                    backgroundColor: activeItem === item.id ? `${colors.primary[100]}40` : 'transparent',
                    color: activeItem === item.id ? colors.primary[500] : colors.neutral[700],
                    justifyContent: collapsed ? 'center' : 'flex-start',
                  }}
                  disabled={item.disabled}
                  aria-disabled={item.disabled}
                >
                  {item.icon && (
                    <span className={`${!collapsed ? 'mr-3' : ''}`}>
                      {item.icon}
                    </span>
                  )}
                  {!collapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-4 border-t" style={{ borderColor: colors.border[mode] }}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-2 rounded-md hover:bg-opacity-10 hover:bg-gray-500"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
    </div>
  );
};