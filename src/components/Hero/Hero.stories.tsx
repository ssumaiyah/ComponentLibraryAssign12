// hero.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Hero from './Hero';
import { HeroProps } from './Hero.types';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    background: { control: 'color' },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' },
  },
} as Meta<typeof Hero>;

const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hero Title',
  subtitle: 'This is a subtitle',
  background: 'lightblue',
  visibility: false,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Await the Promise returned by findByText
  await expect(canvas.findByText('Hero Title')).resolves.toBeInTheDocument();
  await expect(canvas.findByText('This is a subtitle')).resolves.toBeInTheDocument();
};

// hero.stories.tsx
export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Hero Title',
  subtitle: 'This is a subtitle',
  background: 'lightblue',
  disabled: true,
  visibility: false,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const heroElement = await canvas.findByText('Hero Title');

  expect(heroElement).toHaveStyle('cursor: not-allowed');
};

export const Hidden = Template.bind({});
Hidden.args = {
  title: 'Hero Title',
  subtitle: 'This is a subtitle',
  background: 'lightblue',
  visibility: true,
};

Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.queryByText('Hero Title')).toBeNull();
};
