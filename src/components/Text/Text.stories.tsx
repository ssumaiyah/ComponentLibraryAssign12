// Text.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    bold: { control: 'boolean' },
    underline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' }, // Add visibility control
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: 'Small Text',
  size: 'small',
  visibility: false, // Component is visible by default
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium Text',
  size: 'medium',
  visibility: false, // Component is visible by default
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Text',
  size: 'large',
  visibility: false, // Component is visible by default
};

export const Bold = Template.bind({});
Bold.args = {
  children: 'Bold Text',
  bold: true,
  visibility: false, // Component is visible by default
};

export const Underline = Template.bind({});
Underline.args = {
  children: 'Underlined Text',
  underline: true,
  visibility: false, // Component is visible by default
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Text',
  disabled: true,
  visibility: false, // Component is visible by default
};

export const Hidden = Template.bind({});
Hidden.args = {
  children: 'Hidden Text',
  size: 'medium',
  visibility: true, // Component is hidden
};
