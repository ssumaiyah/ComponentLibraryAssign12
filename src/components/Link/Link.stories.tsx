// link.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Link from './Link';
import { LinkProps } from './Link.types';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' },
  },
} as Meta<typeof Link>;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  children: 'Primary Link',
  color: 'blue',
  visibility: false,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = await canvas.findByText('Primary Link');
  await expect(linkElement).toBeInTheDocument();
};

export const Blue = Template.bind({});
Blue.args = {
  href: '#',
  children: 'Blue Link',
  color: 'blue',
  visibility: false,
};

Blue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = await canvas.findByText('Blue Link');
  await expect(linkElement).toBeInTheDocument();
  
};

export const Purple = Template.bind({});
Purple.args = {
  href: '#',
  children: 'Purple Link',
  color: 'purple',
  visibility: false,
};

Purple.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = await canvas.findByText('Purple Link');
  await expect(linkElement).toBeInTheDocument();
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: '#',
  children: 'Disabled Link',
  color: 'grey',
  disabled: true,
  visibility: false,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = await canvas.findByText('Disabled Link');
  await expect(linkElement).toBeInTheDocument();
  await expect(linkElement).toHaveStyle('cursor: not-allowed');
};

export const Hidden = Template.bind({});
Hidden.args = {
  href: '#',
  children: 'Hidden Link',
  color: 'red',
  visibility: true,
};

Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.queryByText('Hidden Link')).toBeNull();
};
