import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { colors } from '../../styles/colors';

export default {
  title: 'Foundations/Color System',
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
} as Meta;

const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <div className="flex flex-col items-center mb-4">
    <div 
      className="w-20 h-20 rounded-md border border-gray-200 mb-2"
      style={{ backgroundColor: value }}
    />
    <div className="text-sm font-mono">{name}</div>
    <div className="text-xs text-gray-500">{value}</div>
  </div>
);

const ColorScale = ({ name, scale }: { name: string; scale: Record<string, string> }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">{name}</h3>
    <div className="grid grid-cols-5 gap-4">
      {Object.entries(scale).map(([key, value]) => (
        <ColorSwatch key={`${name}-${key}`} name={`${name}-${key}`} value={value} />
      ))}
    </div>
  </div>
);

export const Colors: StoryFn = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Color System</h2>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Primary Colors</h3>
        <ColorScale name="primary" scale={colors.primary} />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Secondary Colors</h3>
        <ColorScale name="secondary" scale={colors.secondary} />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Tertiary Colors</h3>
        <ColorScale name="tertiary" scale={colors.tertiary} />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Neutral Colors</h3>
        <ColorScale name="neutral" scale={colors.neutral} />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Semantic Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium mb-2">Success</h4>
            <ColorScale name="success" scale={colors.success} />
          </div>
          <div>
            <h4 className="font-medium mb-2">Warning</h4>
            <ColorScale name="warning" scale={colors.warning} />
          </div>
          <div>
            <h4 className="font-medium mb-2">Error</h4>
            <ColorScale name="error" scale={colors.error} />
          </div>
          <div>
            <h4 className="font-medium mb-2">Info</h4>
            <ColorScale name="info" scale={colors.info} />
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Surface & Background</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium mb-2">Light Theme</h4>
            <div className="grid grid-cols-2 gap-4">
              <ColorSwatch name="surface-light" value={colors.surface.light} />
              <ColorSwatch name="background-light" value={colors.background.light} />
              <ColorSwatch name="border-light" value={colors.border.light} />
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Dark Theme</h4>
            <div className="grid grid-cols-2 gap-4">
              <ColorSwatch name="surface-dark" value={colors.surface.dark} />
              <ColorSwatch name="background-dark" value={colors.background.dark} />
              <ColorSwatch name="border-dark" value={colors.border.dark} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Usage Guidelines</h3>
        <div className="prose">
          <h4>Color Tokens</h4>
          <p>
            Use the color tokens from the palette above to maintain consistency across the application.
            Each color has a range from 50 (lightest) to 900 (darkest).
          </p>
          
          <h4>Accessibility</h4>
          <p>
            All colors have been tested to meet WCAG 2.1 AA contrast requirements. When using colors:
          </p>
          <ul>
            <li>Text on light backgrounds should use colors 600-900</li>
            <li>Text on dark backgrounds should use colors 50-400</li>
            <li>Ensure a minimum contrast ratio of 4.5:1 for normal text</li>
          </ul>
          
          <h4>Theming</h4>
          <p>
            The color system supports both light and dark themes. Use the <code>ThemeProvider</code> to
            toggle between themes. Surface, background, and border colors automatically adjust based on the theme.
          </p>
        </div>
      </section>
    </div>
  );
};