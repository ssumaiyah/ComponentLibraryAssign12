import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Menu from './Menu';
import { MenuProps } from './Menu.types';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    initialState: { control: 'radio', options: ['open', 'closed'] },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Menu>;

const Template: StoryFn<MenuProps> = (args) => <Menu {...args} />;

export const Open = Template.bind({});
Open.args = {
  initialState: 'open',
};

Open.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const contentElement = await canvas.findByText('Menu Content');
  await expect(contentElement).toBeInTheDocument();
};

export const Closed = Template.bind({});
Closed.args = {
  initialState: 'closed',
};

Closed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const contentElement = canvas.queryByText('Menu Content');
  await expect(contentElement).not.toBeInTheDocument();
};

export const Primary = Template.bind({});
Primary.args = {
  initialState: 'closed',
  className: 'primary',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = await canvas.findByText('Open Menu');

};

export const Disabled = Template.bind({});
Disabled.args = {
  initialState: 'closed',
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = await canvas.findByText('Open Menu');
  await expect(buttonElement).toBeDisabled();
 
};
