// section.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Section from './Section';
import { SectionProps } from './Section.types';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    children: { control: 'text' },
    background: { control: 'color' },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' },
  },
} as Meta<typeof Section>;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'This is a primary section',
  background: 'white',
  visibility: false,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const sectionElement = await canvas.findByText('This is a primary section');
  await expect(sectionElement).toBeInTheDocument();
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'This section is disabled',
  background: 'white',
  disabled: true,
  visibility: false,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const sectionElement = await canvas.findByText('This section is disabled');
  await expect(sectionElement).toBeInTheDocument();
  await expect(sectionElement).toHaveStyle('opacity: 0.5');
  await expect(sectionElement).toHaveStyle('cursor: not-allowed');
};

export const Hidden = Template.bind({});
Hidden.args = {
  children: 'This section is hidden',
  background: 'white',
  visibility: true,
};

Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.queryByText('This section is hidden')).toBeNull();
};
