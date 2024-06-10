// Image.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import Image from './Image';
import { ImageProps } from './Image.types';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'text' },
    shape: { control: { type: 'radio', options: ['square', 'round'] } },
    disabled: { control: 'boolean' },
    visibility: { control: 'boolean' }, // Add visibility control
  },
} as Meta<typeof Image>;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Primary Image',
  size: '150px',
  visibility: false, // Component is visible by default
};

export const Round = Template.bind({});
Round.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Round Image',
  size: '150px',
  shape: 'round',
  visibility: false, // Component is visible by default
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://via.placeholder.com/600',
  alt: 'Large Image',
  size: '600px',
  visibility: false, // Component is visible by default
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
  size: '150px',
  disabled: true,
  visibility: false, // Component is visible by default
};

export const Hidden = Template.bind({});
Hidden.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Hidden Image',
  size: '150px',
  visibility: true, // Component is hidden
};
