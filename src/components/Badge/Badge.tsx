import React from 'react';
import { useTheme } from '../ThemeProvider';

type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = 'md',
  className = '',
}) => {
  const { colors } = useTheme();

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const variantColors = {
    primary: {
      bg: colors.primary[100],
      text: colors.primary[700],
    },
    secondary: {
      bg: colors.secondary[100],
      text: colors.secondary[700],
    },
    tertiary: {
      bg: colors.tertiary[100],
      text: colors.tertiary[700],
    },
    success: {
      bg: colors.success[100],
      text: colors.success[700],
    },
    warning: {
      bg: colors.warning[100],
      text: colors.warning[700],
    },
    error: {
      bg: colors.error[100],
      text: colors.error[700],
    },
    info: {
      bg: colors.info[100],
      text: colors.info[700],
    },
  };

  return (
    <span
      className={`inline-flex items-center font-medium ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`}
      style={{
        backgroundColor: variantColors[variant].bg,
        color: variantColors[variant].text,
      }}
    >
      {children}
    </span>
  );
};