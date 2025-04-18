import React, { useState } from 'react';
import { useTheme } from '../ThemeProvider';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'borderless';
  disabled?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  children, 
  variant = 'default', 
  disabled = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors, mode } = useTheme();

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const baseStyles = {
    backgroundColor: mode === 'light' ? colors.surface.light : colors.surface.dark,
    color: colors.neutral[900],
    borderColor: variant === 'default' ? (mode === 'light' ? colors.border.light : colors.border.dark) : 'transparent',
  };

  const disabledStyles = disabled ? {
    opacity: 0.6,
    cursor: 'not-allowed',
  } : {};

  return (
    <div 
      className={`border rounded-md mb-2 overflow-hidden transition-all duration-200 ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{
        ...baseStyles,
        ...disabledStyles,
      }}
    >
      <div
        className="flex justify-between items-center p-4"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-disabled={disabled}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAccordion();
          }
        }}
      >
        <h3 className="font-medium">{title}</h3>
        <span className="transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 border-t" style={{ borderColor: mode === 'light' ? colors.border.light : colors.border.dark }}>
          {children}
        </div>
      </div>
    </div>
  );
};