// Link.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Link from './Link';
import { LinkProps } from './Link.types';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' }, // Add visibility control
  },
} as Meta<typeof Link>;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  children: 'Primary Link',
  color: 'blue',
  visibility: false, // Component is visible by default
};

export const Blue = Template.bind({});
Blue.args = {
  href: '#',
  children: 'Blue Link',
  color: 'blue',
  visibility: false, // Component is visible by default
};

export const Purple = Template.bind({});
Purple.args = {
  href: '#',
  children: 'Purple Link',
  color: 'purple',
  visibility: false, // Component is visible by default
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: '#',
  children: 'Disabled Link',
  color: 'grey',
  disabled: true,
  visibility: false, // Component is visible by default
};

export const Hidden = Template.bind({});
Hidden.args = {
  href: '#',
  children: 'Hidden Link',
  color: 'red',
  visibility: true, // Component is hidden
};
