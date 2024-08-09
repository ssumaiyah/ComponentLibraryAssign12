import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Icon from './Icon';
import { IconProps } from './Icon.types';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta<IconProps>;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'primary',
  disabled: true,
};
