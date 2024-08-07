// Text.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    bold: { control: 'boolean' },
    underline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: 'Small Text',
  size: 'small',
  visibility: false,
};

Small.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.findByText('Small Text');
  await expect(textElement).toBeInTheDocument();
  await expect(textElement).toHaveStyle('font-size: 12px');
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium Text',
  size: 'medium',
  visibility: false,
};

Medium.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.findByText('Medium Text');
  await expect(textElement).toBeInTheDocument();
  await expect(textElement).toHaveStyle('font-size: 16px');
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large Text',
  size: 'large',
  visibility: false,
};

Large.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.findByText('Large Text');
  await expect(textElement).toBeInTheDocument();
  await expect(textElement).toHaveStyle('font-size: 20px');
};

export const Bold = Template.bind({});
Bold.args = {
  children: 'Bold Text',
  bold: true,
  visibility: false,
};

Bold.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.findByText('Bold Text');
  await expect(textElement).toBeInTheDocument();
  await expect(textElement).toHaveStyle('font-weight: 700'); // Adjusted
};

export const Underline = Template.bind({});
Underline.args = {
  children: 'Underlined Text',
  underline: true,
  visibility: false,
};

Underline.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.findByText('Underlined Text');
  await expect(textElement).toBeInTheDocument();
  await expect(textElement).toHaveStyle('text-decoration: underline solid rgb(0, 0, 0)'); // Adjusted
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Text',
  disabled: true,
  visibility: false,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = await canvas.findByText('Disabled Text');
  await expect(textElement).toBeInTheDocument();
  await expect(textElement).toHaveStyle('color: rgb(128, 128, 128)'); // Adjusted
  await expect(textElement).toHaveStyle('cursor: not-allowed');
};

export const Hidden = Template.bind({});
Hidden.args = {
  children: 'Hidden Text',
  size: 'medium',
  visibility: true,
};

Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.queryByText('Hidden Text')).toBeNull();
};
