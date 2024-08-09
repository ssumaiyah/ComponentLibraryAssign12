import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Menu from './Menu';
import { MenuProps } from './Menu.types';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta<MenuProps>;

const Template: StoryFn<MenuProps> = (args) => <Menu {...args} />;

export const Open = Template.bind({});
Open.args = {
  initialState: 'open',
};

export const Closed = Template.bind({});
Closed.args = {
  initialState: 'closed',
};
