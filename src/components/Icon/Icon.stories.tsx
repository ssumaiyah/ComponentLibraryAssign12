import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Icon from './Icon';
import { IconProps } from './Icon.types';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: ['twitter', 'github', 'linkedin', 'instagram'],
    },
    url: { control: 'text' },
    type: { control: 'radio', options: ['primary', 'disabled'] },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Icon>;


const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'twitter',
  url: 'https://twitter.com',
  type: 'primary',
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const iconElement = await canvas.findByTestId('icon');
  await expect(iconElement).toBeInTheDocument();
  await expect(iconElement).not.toHaveClass('disabled');
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'twitter',
  url: 'https://twitter.com',
  type: 'disabled',
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const iconElement = await canvas.findByTestId('icon');
  await expect(iconElement).toBeInTheDocument();
 
};
