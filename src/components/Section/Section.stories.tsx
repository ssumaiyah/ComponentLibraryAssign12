// Section.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Section from './Section';
import { SectionProps } from './Section.types';

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    children: { control: 'text' },
    background: { control: 'color' },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' }, // Add visibility control
  },
} as Meta<typeof Section>;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a primary section',
  background: 'white',
  visibility: false, // Component is visible by default
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'This section is disabled',
  background: 'white',
  disabled: true,
  visibility: false, // Component is visible by default
};

export const Hidden = Template.bind({});
Hidden.args = {
  children: 'This section is hidden',
  background: 'white',
  visibility: true, // Component is hidden
};
