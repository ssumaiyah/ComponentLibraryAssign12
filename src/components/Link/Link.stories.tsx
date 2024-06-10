// Import React only if necessary; otherwise, remove the import if using React 17+
// import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Link from './index';
import { LinkProps } from './index';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Link>;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  children: 'Primary Link',
  color: 'blue',
};

export const Blue = Template.bind({});
Blue.args = {
  href: '#',
  children: 'Blue Link',
  color: 'blue',
};

export const Purple = Template.bind({});
Purple.args = {
  href: '#',
  children: 'Purple Link',
  color: 'purple',
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: '#',
  children: 'Disabled Link',
  color: 'grey',
  disabled: true,
};
