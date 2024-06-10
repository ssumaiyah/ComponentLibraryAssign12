import { Meta, StoryFn } from '@storybook/react';
import Text from './index';
import { TextProps } from './index';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    bold: { control: 'boolean' },
    underline: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: 'Small Text',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium Text',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Text',
  size: 'large',
};

export const Bold = Template.bind({});
Bold.args = {
  children: 'Bold Text',
  bold: true,
};

export const Underline = Template.bind({});
Underline.args = {
  children: 'Underlined Text',
  underline: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Text',
  disabled: true,
};
