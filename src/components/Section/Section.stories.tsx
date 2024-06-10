import { Meta, StoryFn } from '@storybook/react';
import Section from './index';
import { SectionProps } from './index';

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    children: { control: 'text' },
    background: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Section>;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a primary section',
  background: 'white',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'This section is disabled',
  background: 'white',
  disabled: true,
};
