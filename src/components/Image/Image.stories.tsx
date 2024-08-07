// image.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Image from './Image';
import { ImageProps } from './Image.types';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'text' },
    shape: { control: { type: 'radio', options: ['square', 'round'] } },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' },
  },
} as Meta<typeof Image>;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Primary Image',
  size: '150px',
  visibility: false,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.findByAltText('Primary Image')).resolves.toBeInTheDocument();
};

export const Round = Template.bind({});
Round.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Round Image',
  size: '150px',
  shape: 'round',
  visibility: false,
};

Round.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = await canvas.findByAltText('Round Image');
  await expect(imageElement).toHaveStyle('border-radius: 50%');
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://via.placeholder.com/600',
  alt: 'Large Image',
  size: '600px',
  visibility: false,
};

Large.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = await canvas.findByAltText('Large Image');
  await expect(imageElement).toHaveStyle('width: 600px');
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
  size: '150px',
  disabled: true,
  visibility: false,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = await canvas.findByAltText('Disabled Image');
  await expect(imageElement).toHaveStyle('opacity: 0.5');
  await expect(imageElement).toHaveStyle('cursor: not-allowed');
};

export const Hidden = Template.bind({});
Hidden.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Hidden Image',
  size: '150px',
  visibility: true,
};

Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.queryByAltText('Hidden Image')).toBeNull();
};

export const Responsive = Template.bind({});
Responsive.args = {
  src: 'https://via.placeholder.com/800x400',
  alt: 'Responsive Image',
  visibility: false,
};

Responsive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.findByAltText('Responsive Image')).resolves.toBeInTheDocument();
};
