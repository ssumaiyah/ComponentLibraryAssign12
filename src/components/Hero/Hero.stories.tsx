import { Meta, StoryFn } from '@storybook/react';
import Hero from './Hero';
import { HeroProps } from './Hero.types';

export default {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    background: { control: 'color' },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' }, // Add visibility control
  },
} as Meta<typeof Hero>;

const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hero Title',
  subtitle: 'This is a subtitle',
  background: 'lightblue',
  visibility: false, // Component is visible by default
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Hero Title',
  subtitle: 'This is a subtitle',
  background: 'lightblue',
  disabled: true,
  visibility: false, // Component is visible by default
};

export const Hidden = Template.bind({});
Hidden.args = {
  title: 'Hero Title',
  subtitle: 'This is a subtitle',
  background: 'lightblue',
  visibility: true, // Component is hidden
};
